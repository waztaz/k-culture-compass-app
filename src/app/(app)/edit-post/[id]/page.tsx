'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useFirestore, useUser, useDoc } from '@/firebase';
import type { UserPost } from '@/lib/types';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title must be at least 5 characters.',
  }),
  content: z.string().min(20, {
    message: 'Content must be at least 20 characters.',
  }),
});

export default function EditPostPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const user = useUser();
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const postRef = useMemo(() => {
    if (!firestore || !postId) return null;
    return doc(firestore, 'user-posts', postId);
  }, [firestore, postId]);
  
  const { data: post, loading: postLoading } = useDoc<UserPost>(postRef, { deps: [firestore, postId] });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  useEffect(() => {
    if (user === null) {
      router.push('/community'); // Redirect if not logged in
    }
    if (post) {
      if (user && user.uid !== post.userId) {
         router.push('/community'); // Redirect if not author
      }
      form.reset({
          title: post.title,
          content: post.content,
      });
    }
  }, [user, post, router, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user || !firestore || !postRef) return;

    const updatedPostData = {
        ...values,
        updatedAt: serverTimestamp(),
    };
    
    updateDoc(postRef, updatedPostData)
      .then(() => {
        toast({
          title: 'Post Updated!',
          description: 'Your post has been successfully updated.',
        });
        router.push('/community');
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: postRef.path,
          operation: 'update',
          requestResourceData: updatedPostData,
        });
        errorEmitter.emit('permission-error', permissionError);
        toast({
          variant: 'destructive',
          title: 'Failed to update post',
          description: 'Please try again.',
        });
      });
  }
  
  const isLoading = user === undefined || postLoading;

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-4 p-4">
        <Card>
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className='space-y-8'>
                <div className='space-y-2'>
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-10 w-full" />
                </div>
                <div className='space-y-2'>
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-40 w-full" />
                </div>
                <div className="flex justify-end">
                    <Skeleton className="h-10 w-28" />
                </div>
            </CardContent>
        </Card>
      </div>
    );
  }

  if (!post) {
    return (
        <div className="text-center py-10">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="text-muted-foreground">This post may have been removed.</p>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Edit Your Post
          </CardTitle>
          <CardDescription>
            Make changes to your post and publish them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="An amazing discovery..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Today I visited..."
                        className="resize-y min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Update Post
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

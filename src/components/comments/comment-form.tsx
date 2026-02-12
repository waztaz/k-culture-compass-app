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
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import type { NewComment } from '@/lib/types';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  text: z.string().min(3, {
    message: 'Comment must be at least 3 characters.',
  }),
});

export function CommentForm({ articleId }: { articleId: string }) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const user = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user || !firestore) return;

    const commentData: NewComment = {
      ...values,
      articleId,
      userId: user.uid,
      author: user.displayName || 'Anonymous',
      createdAt: serverTimestamp(),
    };

    const commentsCollection = collection(
      firestore,
      'articles',
      articleId,
      'comments'
    );

    addDoc(commentsCollection, commentData)
        .then(() => {
            form.reset();
        })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: commentsCollection.path,
          operation: 'create',
          requestResourceData: commentData,
        });
        errorEmitter.emit('permission-error', permissionError);
        toast({
            variant: 'destructive',
            title: 'Failed to post comment',
            description: 'You may not have permission to do this.'
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Leave a comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts..."
                  className="resize-y"
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
            Post Comment
          </Button>
        </div>
      </form>
    </Form>
  );
}

'use client';

import type { UserPost } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { useUser, useFirestore } from '@/firebase';
import { Button } from '../ui/button';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { deleteDoc, doc } from 'firebase/firestore';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Loader2 } from 'lucide-react';

export function UserPostCard({ post }: { post: UserPost }) {
  const user = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const timeAgo = post.createdAt
    ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true })
    : 'just now';

  const isAuthor = user && user.uid === post.userId;

  const handleDelete = async () => {
    if (!firestore || !isAuthor) return;

    setIsDeleting(true);
    const postRef = doc(firestore, 'user-posts', post.id);

    deleteDoc(postRef)
      .then(() => {
        toast({
          title: 'Post deleted',
          description: 'Your post has been successfully removed.',
        });
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: postRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
        toast({
          variant: 'destructive',
          title: 'Failed to delete post',
          description: 'You may not have permission to do this.',
        });
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
        {isAuthor && (
          <AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <span className="sr-only">Open post menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/edit-post/${post.id}`}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </DropdownMenuItem>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your post.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  {isDeleting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 text-sm text-muted-foreground">
        <Avatar className="h-6 w-6 text-xs">
          <AvatarFallback>
            {post.author.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{post.author}</span>
        <span>&middot;</span>
        <span>{timeAgo}</span>
      </CardFooter>
    </Card>
  );
}

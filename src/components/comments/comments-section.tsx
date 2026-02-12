'use client';

import { useMemo } from 'react';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection, useUser } from '@/firebase';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import type { Comment } from '@/lib/types';
import { CommentList } from './comment-list';
import { CommentForm } from './comment-form';

export function CommentsSection({ articleId }: { articleId: string }) {
  const firestore = useFirestore();
  const user = useUser();

  const commentsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles', articleId, 'comments'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, articleId]);

  const { data: comments, loading } = useCollection<Comment>(commentsQuery, {
    deps: [firestore, articleId],
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-headline font-bold">
        Comments ({!loading && comments ? comments.length : 0})
      </h2>

      <Separator />

      {user && <CommentForm articleId={articleId} />}

      {loading && (
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      )}
      {!loading && comments && (
        <CommentList comments={comments} />
      )}
    </div>
  );
}

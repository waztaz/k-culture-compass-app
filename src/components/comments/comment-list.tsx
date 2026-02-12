'use client';

import type { Comment } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

export function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        No comments yet. Be the first to share your thoughts!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <Card key={comment.id} className="bg-muted/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {comment.author.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-sm font-semibold">{comment.author}</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">
                {comment.createdAt
                  ? formatDistanceToNow(comment.createdAt.toDate(), {
                      addSuffix: true,
                    })
                  : ''}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground whitespace-pre-wrap">{comment.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

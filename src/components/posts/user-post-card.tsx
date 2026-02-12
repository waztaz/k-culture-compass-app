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

export function UserPostCard({ post }: { post: UserPost }) {
  const timeAgo = post.createdAt
    ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true })
    : 'just now';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
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

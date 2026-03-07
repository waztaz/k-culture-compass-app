'use client';

import { useMemo } from 'react';
import { collection, query } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import type { UserPost } from '@/lib/types';
import { UserPostCard } from '@/components/posts/user-post-card';

export default function CommunityPage() {
  const firestore = useFirestore();

  const postsQuery = useMemo(() => {
    if (!firestore) return null;
    // Fetch all posts; sorting handled client-side to avoid index permission errors
    return query(collection(firestore, 'user-posts'));
  }, [firestore]);

  const { data: posts, loading } = useCollection<UserPost>(postsQuery, {
    deps: [firestore],
  });

  const sortedPosts = useMemo(() => {
    if (!posts) return [];
    return [...posts].sort((a, b) => {
      const timeA = a.createdAt?.toMillis() || 0;
      const timeB = b.createdAt?.toMillis() || 0;
      return timeB - timeA;
    });
  }, [posts]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-headline font-bold">Community Posts</h1>
        <p className="text-muted-foreground">
          Discover stories and tips from other K-Culture fans.
        </p>
      </div>

      {loading && (
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      )}

      {!loading &&
        (sortedPosts.length > 0 ? (
          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <UserPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No community posts yet. Be the first to create one!
          </p>
        ))}
    </div>
  );
}

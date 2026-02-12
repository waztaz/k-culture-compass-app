'use client';

import { useMemo } from 'react';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import type { UserPost } from '@/lib/types';
import { UserPostCard } from '@/components/posts/user-post-card';

export default function CommunityPage() {
  const firestore = useFirestore();

  const postsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'user-posts'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: posts, loading } = useCollection<UserPost>(postsQuery, {
    deps: [firestore],
  });

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
        posts &&
        (posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
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

'use client';

import { useMemo } from 'react';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { PostCard } from '@/components/posts/post-card';
import { Language, Article } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function TrendsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const firestore = useFirestore();
  const lang = (searchParams?.lang as Language) || 'en';

  const articlesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles'),
      where('category', '==', 'K-Beauty Trend'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: articles, loading } = useCollection<Article>(articlesQuery, {
    deps: [firestore],
  });

  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">K-Beauty Trends</h1>
      {loading && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          articles &&
          articles.map((item) => (
            <PostCard
              key={item.id}
              id={item.id}
              title={item.title[lang] || item.title.en}
              excerpt={item.excerpt[lang] || item.excerpt.en}
              image={item.image}
              link={`/posts/${item.id}?lang=${lang}`}
            />
          ))}
      </div>
    </div>
  );
}

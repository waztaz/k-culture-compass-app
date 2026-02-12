'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { PostCard } from '@/components/posts/post-card';
import { Language, Article } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function TrendsPage() {
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';

  // Query all articles, ordered by date
  const articlesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: allArticles, loading } = useCollection<Article>(articlesQuery, {
    deps: [firestore],
  });

  // Filter articles on the client-side
  const articles = useMemo(() => {
    if (!allArticles) return [];
    return allArticles.filter((article) => article.category === 'K-Beauty Trend');
  }, [allArticles]);

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
         {!loading && articles?.length === 0 && (
           <p className="text-center text-muted-foreground py-8 col-span-full">No K-Beauty Trend articles found.</p>
        )}
      </div>
    </div>
  );
}

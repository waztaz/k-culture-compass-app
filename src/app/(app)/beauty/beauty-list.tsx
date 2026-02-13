'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { PostCard } from '@/components/posts/post-card';
import { Language, Article } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function BeautyList() {
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';

  const articlesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles'),
      orderBy('createdAt', 'asc')
    );
  }, [firestore]);

  const { data: allArticlesFromDb, loading } = useCollection<Article>(articlesQuery, {
    deps: [firestore],
  });

  const allArticles = useMemo(() => {
    if (allArticlesFromDb) {
      return [...allArticlesFromDb].reverse();
    }
    return [];
  }, [allArticlesFromDb]);

  const articles = useMemo(() => {
    if (!allArticles) return [];
    return allArticles.filter((article) => article.category === 'K-Beauty Trend');
  }, [allArticles]);

  if (loading) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
        </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((item) => (
        <PostCard
          key={item.id}
          id={item.id}
          title={item.title[lang] || item.title.en}
          excerpt={item.excerpt[lang] || item.excerpt.en}
          image={item.image}
          link={`/posts/${item.id}?lang=${lang}`}
        />
      ))}
       {articles?.length === 0 && (
         <p className="text-center text-muted-foreground py-8 col-span-full">No beauty articles found.</p>
      )}
    </div>
  );
}

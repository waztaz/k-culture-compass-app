'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { PostCard } from '@/components/posts/post-card';
import { Language, Article } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { seedArticles } from '@/lib/articles-seed-data';

export default function TrendsList() {
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';

  const articlesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: allArticlesFromDb, loading } = useCollection<Article>(articlesQuery, {
    deps: [firestore],
  });

  const allArticles = useMemo(() => {
    if (allArticlesFromDb && allArticlesFromDb.length > 0) {
      return allArticlesFromDb;
    }
    if (!loading && (!allArticlesFromDb || allArticlesFromDb.length === 0)) {
        return seedArticles;
    }
    return [];
  }, [allArticlesFromDb, loading]);

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
         <p className="text-center text-muted-foreground py-8 col-span-full">No K-Beauty Trend articles found.</p>
      )}
    </div>
  );
}

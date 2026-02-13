'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { PostCard } from '@/components/posts/post-card';
import { Language, Article } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { seedArticles } from '@/lib/articles-seed-data';

export default function HomeList() {
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';

  const articlesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'articles'),
      orderBy('createdAt', 'asc'),
      limit(6)
    );
  }, [firestore]);

  const { data: allArticlesFromDb, loading } = useCollection<Article>(articlesQuery, {
    deps: [firestore],
  });

  const articles = useMemo(() => {
    if (allArticlesFromDb && allArticlesFromDb.length > 0) {
      return [...allArticlesFromDb].reverse();
    }
    if (!loading && (!allArticlesFromDb || allArticlesFromDb.length === 0)) {
        return seedArticles.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).slice(0, 6);
    }
    return [];
  }, [allArticlesFromDb, loading]);
  
  if (loading) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
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
         <p className="text-center text-muted-foreground py-8 col-span-full">No articles found.</p>
      )}
    </div>
  );
}

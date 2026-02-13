'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { doc, Timestamp } from 'firebase/firestore';
import { useDoc, useFirestore } from '@/firebase';
import { getLocationById } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ReviewsSection } from '@/components/reviews/reviews-section';
import type { Language, Article, Location } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { CommentsSection } from '@/components/comments/comments-section';
import { seedArticles } from '@/lib/articles-seed-data';

export default function PostPage() {
  const params = useParams();
  const articleId = params.id as string;
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';
  const [location, setLocation] = useState<Location | undefined>(undefined);

  const articleRef = useMemo(() => {
    if (!firestore || !articleId) return null;
    return doc(firestore, 'articles', articleId);
  }, [firestore, articleId]);

  const { data: articleFromDb, loading } = useDoc<Article>(articleRef, {
    deps: [firestore, articleId],
  });

  const article = useMemo(() => {
    if (articleFromDb) return articleFromDb;
    if (!loading && !articleFromDb) {
      const seedArticle = seedArticles.find(a => a.id === articleId);
      return seedArticle ? { ...seedArticle, id: seedArticle.id } : null;
    }
    return null;
  }, [articleFromDb, loading, articleId]);
  

  useEffect(() => {
    if (article) {
      document.title = `${
        article.title[lang] || article.title.en
      } | K-Culture Compass`;
      if (article.locationId) {
        getLocationById(article.locationId).then(setLocation);
      }
    }
  }, [article, lang]);

  if (loading && !article) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <Skeleton className="h-96 w-full" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p className="text-muted-foreground">This article may have been removed.</p>
      </div>
    );
  }

  const postTitle = article.title[lang] || article.title.en;
  const postContent = article.content[lang] || article.content.en;
  
  const getPostDate = () => {
    if (article.createdAt instanceof Timestamp) {
      return article.createdAt.toDate();
    }
    // This handles the case where createdAt might be a Date object from seed data
    return new Date(article.createdAt.seconds * 1000);
  }
  const postDate = getPostDate();

  return (
    <div className="max-w-4xl mx-auto">
      <article className="space-y-8">
        <div className="space-y-4">
          {location && (
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{location.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1.5" />
                <span>{location.name}</span>
              </div>
            </div>
          )}
          <h1 className="text-4xl font-headline font-bold tracking-tight lg:text-5xl">
            {postTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            Posted on{' '}
            {postDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={article.image.url}
            alt={postTitle}
            fill
            className="object-cover"
            priority
            data-ai-hint={article.image.hint}
          />
        </div>

        <p className="text-foreground/90 leading-loose whitespace-pre-wrap">
          {postContent}
        </p>

        <Separator className="my-12" />
        <CommentsSection articleId={articleId} />

        {article.locationId && (
          <>
            <Separator className="my-12" />
            <ReviewsSection locationId={article.locationId} />
          </>
        )}
      </article>
    </div>
  );
}

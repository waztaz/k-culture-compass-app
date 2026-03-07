'use client';

import { CommentsSection } from '@/components/comments/comments-section';
import { ReviewsSection } from '@/components/reviews/reviews-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useDoc, useFirestore } from '@/firebase';
import { getLocationById } from '@/lib/data';
import { getTrackedUrl, trackExternalClick } from '@/lib/tracking';
import type { Article, Language, Location } from '@/lib/types';
import { doc } from 'firebase/firestore';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

function getTranslated(
  field: string | { kr?: string; en?: string; ch?: string; jp?: string; tw?: string } | undefined,
  lang: string
): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return (field as any)[lang] || field.en || '';
}

export default function PostPage() {
  const params = useParams();
  const articleId = params.id as string;
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') as Language) || 'en';
  const [location, setLocation] = useState<Location | undefined>(undefined);

  const articleRef = useMemo(() => {
    if (!firestore || !articleId) return null;
    return doc(firestore, 'articles', articleId) as import('firebase/firestore').DocumentReference<Article>;
  }, [firestore, articleId]);

  const { data: article, loading } = useDoc<Article>(articleRef, {
    deps: [firestore, articleId],
  });


  useEffect(() => {
    if (article) {
      document.title = `${getTranslated(article.title, lang)} | K-Culture Compass`;
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

  const postTitle = getTranslated(article.title, lang);
  const postContent = getTranslated(article.content, lang);
  const postDate = article.createdAt.toDate();

  return (
    <div className="max-w-4xl mx-auto">
      <article className="space-y-8">
        <div className="space-y-4">
          {location && (
            <div className="flex items-center gap-4">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">{location.category}</Badge>
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

        {article.partnerLinks && article.partnerLinks.length > 0 && (
          <div className="mb-8">
            <h3 className="font-headline font-bold text-xl mb-4">Partner Offers</h3>
            <div className="flex flex-col gap-3">
              {article.partnerLinks.map((link, idx) => (
                <Button
                  key={idx}
                  asChild
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 justify-between items-center py-6"
                >
                  <a
                    href={getTrackedUrl(link.url, 'post', 'partner_offers')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalClick(link.url)}
                  >
                    <span className="font-semibold">{link.title}</span>
                    <span className="text-xl">✨</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}

        {article.mapLocations && article.mapLocations.length > 0 && (
          <div className="mb-8">
            <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6">
              <Link href="/map">Open Locations in Map</Link>
            </Button>
          </div>
        )}

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

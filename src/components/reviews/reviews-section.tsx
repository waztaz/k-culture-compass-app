'use client';

import { useMemo } from 'react';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { ReviewsSummary } from './reviews-summary';
import { Separator } from '../ui/separator';
import { ReviewList } from './review-list';
import { ReviewForm } from './review-form';
import { Skeleton } from '../ui/skeleton';
import type { Review } from '@/lib/types';

export function ReviewsSection({ locationId }: { locationId: string }) {
  const firestore = useFirestore();

  const reviewsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'reviews'),
      where('locationId', '==', locationId),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, locationId]);

  const { data: reviews, loading } = useCollection<Review>(reviewsQuery, { deps: [firestore, locationId] });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-headline font-bold">Reviews ({!loading && reviews ? reviews.length : 0})</h2>
      
      {!loading && reviews && <ReviewsSummary locationId={locationId} reviews={reviews} />}

      <Separator />

      {loading && (
          <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
          </div>
      )}
      {!loading && reviews && <ReviewList reviews={reviews} />}

      <Separator />

      <ReviewForm locationId={locationId} />

    </div>
  );
}

'use client';

import { useMemo } from 'react';
import { collection, query, where } from 'firebase/firestore';
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
    // Removed orderBy to avoid requiring composite indexes which often cause permission errors
    return query(
      collection(firestore, 'reviews'),
      where('locationId', '==', locationId)
    );
  }, [firestore, locationId]);

  const { data: reviews, loading } = useCollection<Review>(reviewsQuery, { deps: [firestore, locationId] });
  
  // Sort reviews by date descending in the browser
  const sortedReviews = useMemo(() => {
    if (!reviews) return [];
    return [...reviews].sort((a, b) => {
      const timeA = a.createdAt?.toMillis() || 0;
      const timeB = b.createdAt?.toMillis() || 0;
      return timeB - timeA;
    });
  }, [reviews]);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-headline font-bold">Reviews ({!loading && reviews ? reviews.length : 0})</h2>
      
      {!loading && reviews && reviews.length > 0 && (
        <ReviewsSummary locationId={locationId} reviews={sortedReviews} />
      )}

      <Separator />

      {loading && (
          <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
          </div>
      )}
      {!loading && <ReviewList reviews={sortedReviews} />}

      <Separator />

      <ReviewForm locationId={locationId} />

    </div>
  );
}

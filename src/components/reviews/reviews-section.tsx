import { getReviewsByLocationId } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ReviewsSummary } from './reviews-summary';
import { Separator } from '../ui/separator';
import { ReviewList } from './review-list';
import { ReviewForm } from './review-form';

export async function ReviewsSection({ locationId }: { locationId: string }) {
  const reviews = await getReviewsByLocationId(locationId);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-headline font-bold">Reviews ({reviews.length})</h2>
      
      <ReviewsSummary locationId={locationId} reviews={reviews} />

      <Separator />

      <ReviewList reviews={reviews} />

      <Separator />

      <ReviewForm />

    </div>
  );
}

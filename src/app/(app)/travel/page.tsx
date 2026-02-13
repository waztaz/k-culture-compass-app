import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import TravelList from './travel-list';

function ArticleGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
    </div>
  );
}

export default function TravelPage() {
  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">Travel & Food</h1>
      <Suspense fallback={<ArticleGridSkeleton />}>
        <TravelList />
      </Suspense>
    </div>
  );
}

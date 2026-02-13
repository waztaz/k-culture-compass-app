import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import EntertainmentList from './entertainment-list';

function ArticleGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
    </div>
  );
}

export default function EntertainmentPage() {
  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">Entertainment</h1>
      <Suspense fallback={<ArticleGridSkeleton />}>
        <EntertainmentList />
      </Suspense>
    </div>
  );
}

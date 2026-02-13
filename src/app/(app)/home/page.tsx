import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import HomeList from './home-list';

function ArticleGridSkeleton() {
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

export default function HomePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-headline font-bold">Cover Stories</h1>
        <p className="text-muted-foreground">
          The latest trends and hottest topics, curated for you.
        </p>
      </div>
      <Suspense fallback={<ArticleGridSkeleton />}>
        <HomeList />
      </Suspense>
    </div>
  );
}

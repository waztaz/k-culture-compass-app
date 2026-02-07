import { PostCard } from '@/components/posts/post-card';
import { getTrendsFeed } from '@/lib/data';
import { Language } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K-Beauty Trends | K-Culture Compass',
  description: 'Discover the latest trends, tips, and products in K-Beauty.',
};

export default async function TrendsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const lang = (searchParams?.lang as Language) || 'en';
  const trendItems = await getTrendsFeed(lang);

  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">K-Beauty Trends</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trendItems.map((item) => (
          <PostCard
            key={item.id}
            id={item.id}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
            link={`/posts/${item.id}?lang=${lang}`}
          />
        ))}
      </div>
    </div>
  );
}

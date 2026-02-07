import { PostCard } from '@/components/posts/post-card';
import { getNewsFeed } from '@/lib/data';
import { Language } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K-Pop News | K-Culture Compass',
  description: 'The latest news and updates from the world of K-Pop.',
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const lang = (searchParams?.lang as Language) || 'en';
  const newsItems = await getNewsFeed(lang);

  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">K-Pop News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
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

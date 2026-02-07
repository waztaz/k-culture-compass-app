import { getPostById, getLocationById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ReviewsSection } from '@/components/reviews/reviews-section';
import type { Metadata } from 'next';
import { Language } from '@/lib/types';

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const post = await getPostById(params.id);
  const lang = (searchParams?.lang as Language) || 'en';

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title[lang] || post.title.en} | K-Culture Compass`,
    description: post.excerpt[lang] || post.excerpt.en,
  };
}

export default async function PostPage({ params, searchParams }: Props) {
  const post = await getPostById(params.id);
  const lang = (searchParams?.lang as Language) || 'en';

  if (!post) {
    notFound();
  }

  const location = post.locationId
    ? await getLocationById(post.locationId)
    : undefined;

  const postTitle = post.title[lang] || post.title.en;
  const postContent = post.content[lang] || post.content.en;

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
            Posted on {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
          </p>
        </div>
        
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
                src={post.image.url}
                alt={postTitle}
                fill
                className="object-cover"
                priority
                data-ai-hint={post.image.hint}
            />
        </div>

        <p className="text-foreground/90 leading-loose whitespace-pre-wrap">
          {postContent}
        </p>
        
        {post.locationId && (
          <>
            <Separator className="my-12" />
            <ReviewsSection locationId={post.locationId} />
          </>
        )}
      </article>
    </div>
  );
}

import { getPostById, getLocationById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ReviewsSection } from '@/components/reviews/reviews-section';
import { PostContentClient } from '@/components/posts/post-content-client';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostById(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | K-Culture Compass`,
    description: post.content.substring(0, 150),
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  const location = await getLocationById(post.locationId);

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
            {post.title}
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
                alt={post.title}
                fill
                className="object-cover"
                priority
                data-ai-hint={post.image.hint}
            />
        </div>

        <PostContentClient originalContent={post.content} />
        
        <Separator className="my-12" />

        <ReviewsSection locationId={post.locationId} />
      </article>
    </div>
  );
}

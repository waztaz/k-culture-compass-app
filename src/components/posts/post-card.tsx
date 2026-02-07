import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: {
    url: string;
    hint: string;
  };
  link: string;
}

export function PostCard({ id, title, excerpt, image, link }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <Link href={link} className="block h-full">
        <div className="flex flex-col h-full">
          <CardHeader className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={image.url}
                alt={title}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex flex-col flex-grow">
            <CardTitle className="font-headline text-lg mb-2 line-clamp-2">{title}</CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
              {excerpt}
            </p>
            <div className="flex items-center text-primary font-semibold text-sm mt-auto">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

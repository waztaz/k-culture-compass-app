'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getTrackedUrl, trackExternalClick } from '@/lib/tracking';
import type { Location } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface LocationInfoDialogProps {
  location: Location | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationInfoDialog({
  location,
  isOpen,
  onOpenChange,
}: LocationInfoDialogProps) {
  if (!location) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{location.name}</DialogTitle>
          <DialogDescription>{location.address}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image
              src={location.image.url}
              alt={location.name}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={location.image.hint}
            />
          </div>
          <Badge className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/80">{location.category}</Badge>

          {location.cosmeticPrices && location.cosmeticPrices.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Cosmetic Prices</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {location.cosmeticPrices.map((item) => (
                    <TableRow key={item.item}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell className="text-right">₩{item.price.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {location.postId && (
            <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href={`/posts/${location.postId}`}>View Post / Guide</Link>
            </Button>
          )}

          {location.actionLinks && location.actionLinks.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {location.actionLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  className="w-full justify-center border bg-transparent hover:bg-muted"
                >
                  <a
                    href={getTrackedUrl(link.url, 'map_pin', 'location_info_dialog')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalClick(link.url)}
                  >
                    {link.title} {link.type === 'partner' ? '✨' : ''}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

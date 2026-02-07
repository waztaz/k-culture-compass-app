'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { suggestReviewImprovements } from '@/ai/flows/suggest-review-improvements';
import { Alert, AlertDescription } from '../ui/alert';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import type { NewReview } from '@/lib/types';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';


const formSchema = z.object({
  author: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  rating: z.coerce.number().min(1).max(5),
  text: z.string().min(10, {
    message: 'Review must be at least 10 characters.',
  }),
});

export function ReviewForm({ locationId }: { locationId: string }) {
  const [isImproving, setIsImproving] = useState(false);
  const [improvementError, setImprovementError] = useState('');
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: '',
      rating: 5,
      text: '',
    },
  });
  
  const handleImproveReview = async () => {
    const reviewText = form.getValues('text');
    if (!reviewText) return;

    setIsImproving(true);
    setImprovementError('');
    try {
        const result = await suggestReviewImprovements({ reviewText });
        form.setValue('text', result.improvedReview);
    } catch(e) {
        setImprovementError('Could not improve review. Please try again.');
        console.error(e);
    }
    setIsImproving(false);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) return;

    const reviewData: NewReview = {
        ...values,
        locationId,
        createdAt: serverTimestamp(),
    };

    const reviewsCollection = collection(firestore, 'reviews');
    
    addDoc(reviewsCollection, reviewData)
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
            path: reviewsCollection.path,
            operation: 'create',
            requestResourceData: reviewData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
    
    toast({
        title: 'Review Submitted!',
        description: 'Thank you for your feedback.',
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Leave a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g. Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Rating (1-5)</FormLabel>
                    <FormControl>
                        <Input type="number" min="1" max="5" placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your experience..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {improvementError && <Alert variant="destructive"><AlertDescription>{improvementError}</AlertDescription></Alert>}
            <div className="flex justify-between items-center">
                <Button type="button" variant="ghost" onClick={handleImproveReview} disabled={isImproving}>
                    {isImproving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Improve with AI
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Submit Review</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

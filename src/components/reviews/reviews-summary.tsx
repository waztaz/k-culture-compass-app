'use client';

import { useState, useEffect } from 'react';
import { summarizeReviews } from '@/ai/flows/summarize-reviews';
import type { Review } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface ReviewsSummaryProps {
  locationId: string;
  reviews: Review[];
}

export function ReviewsSummary({ locationId, reviews }: ReviewsSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (reviews.length === 0) {
        setSummary("No reviews available to summarize.");
        return;
    }
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const reviewTexts = reviews.map((r) => r.text);
      const result = await summarizeReviews({ locationId, reviews: reviewTexts });
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between font-headline">
          <span>AI Review Summary</span>
          <Button onClick={handleSummarize} disabled={isLoading} size="sm">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Summarize
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {summary ? (
          <p className="text-sm text-muted-foreground">{summary}</p>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Click "Summarize" to generate an AI summary of all reviews.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

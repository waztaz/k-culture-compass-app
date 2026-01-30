'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { translateInformalContent } from '@/ai/flows/translate-informal-content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Languages } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

type Language = 'EN' | 'CH' | 'JP';

export function PostContentClient({ originalContent }: { originalContent: string }) {
  const [content, setContent] = useState(originalContent);
  const [targetLanguage, setTargetLanguage] = useState<Language>('EN');
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    setIsTranslating(true);
    setError('');
    try {
      if (content === originalContent && targetLanguage === 'EN') {
         // do nothing if translating original English to English
      } else {
        const result = await translateInformalContent({
            text: originalContent,
            targetLanguage,
        });
        setContent(result.translatedText);
      }
    } catch (e) {
      setError('Failed to translate content. Please try again.');
      console.error(e);
    }
    setIsTranslating(false);
  };
  
  const resetTranslation = () => {
    setContent(originalContent);
    setTargetLanguage('EN');
  }

  return (
    <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center rounded-lg border p-4">
            <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Translate</span>
            </div>
            <div className="flex-1 w-full sm:w-auto">
                <Select
                    value={targetLanguage}
                    onValueChange={(value) => setTargetLanguage(value as Language)}
                >
                    <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="EN">English</SelectItem>
                    <SelectItem value="CH">Chinese (Simplified)</SelectItem>
                    <SelectItem value="JP">Japanese</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
                <Button onClick={handleTranslate} disabled={isTranslating} className='flex-1'>
                    {isTranslating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Translate
                </Button>
                 <Button onClick={resetTranslation} variant="outline" className='flex-1'>
                    Reset
                </Button>
            </div>
        </div>

      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

      <p className="text-foreground/90 leading-loose whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}

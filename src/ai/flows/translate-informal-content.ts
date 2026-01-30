'use server';

/**
 * @fileOverview A flow that translates informal content (blog posts, etc.) while preserving connotation and style.
 *
 * - translateInformalContent - A function that translates the content.
 * - TranslateInformalContentInput - The input type for the translateInformalContent function.
 * - TranslateInformalContentOutput - The return type for the translateInformalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateInformalContentInputSchema = z.object({
  text: z.string().describe('The informal text to translate.'),
  targetLanguage: z
    .enum(['EN', 'CH', 'JP'])
    .describe('The target language for the translation (English, Chinese, or Japanese).'),
});
export type TranslateInformalContentInput = z.infer<
  typeof TranslateInformalContentInputSchema
>;

const TranslateInformalContentOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateInformalContentOutput = z.infer<
  typeof TranslateInformalContentOutputSchema
>;

export async function translateInformalContent(
  input: TranslateInformalContentInput
): Promise<TranslateInformalContentOutput> {
  return translateInformalContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateInformalContentPrompt',
  input: {schema: TranslateInformalContentInputSchema},
  output: {schema: TranslateInformalContentOutputSchema},
  prompt: `Translate the following informal text into {{targetLanguage}} while preserving its original connotation and style. The translation should sound natural and maintain the intent of the original text. Respond with only the translated text.\n\nText to translate: {{{text}}}`,
});

const translateInformalContentFlow = ai.defineFlow(
  {
    name: 'translateInformalContentFlow',
    inputSchema: TranslateInformalContentInputSchema,
    outputSchema: TranslateInformalContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

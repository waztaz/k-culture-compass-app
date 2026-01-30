'use server';

/**
 * @fileOverview Suggests improvements to user reviews for clarity and helpfulness.
 *
 * - suggestReviewImprovements - A function that suggests improvements to a user review.
 * - SuggestReviewImprovementsInput - The input type for the suggestReviewImprovements function.
 * - SuggestReviewImprovementsOutput - The return type for the suggestReviewImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestReviewImprovementsInputSchema = z.object({
  reviewText: z
    .string()
    .describe('The text of the user review to be improved.'),
});
export type SuggestReviewImprovementsInput = z.infer<
  typeof SuggestReviewImprovementsInputSchema
>;

const SuggestReviewImprovementsOutputSchema = z.object({
  improvedReview: z
    .string()
    .describe('The improved version of the user review.'),
  explanation: z
    .string()
    .describe('Explanation of the changes made to the review.'),
});
export type SuggestReviewImprovementsOutput = z.infer<
  typeof SuggestReviewImprovementsOutputSchema
>;

export async function suggestReviewImprovements(
  input: SuggestReviewImprovementsInput
): Promise<SuggestReviewImprovementsOutput> {
  return suggestReviewImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestReviewImprovementsPrompt',
  input: {schema: SuggestReviewImprovementsInputSchema},
  output: {schema: SuggestReviewImprovementsOutputSchema},
  prompt: `You are an AI assistant that helps users improve their reviews to be more clear and helpful.

  Given the following user review:
  {{reviewText}}

  Suggest an improved version of the review, and explain the changes you made. The improved review should retain the original sentiment and information, but be more clear, concise, and helpful to other users. Do not make up information that is not provided in the original review.
  Return the response in JSON format.
  `,
});

const suggestReviewImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestReviewImprovementsFlow',
    inputSchema: SuggestReviewImprovementsInputSchema,
    outputSchema: SuggestReviewImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-review-improvements.ts';
import '@/ai/flows/summarize-reviews.ts';
import '@/ai/flows/translate-informal-content.ts';
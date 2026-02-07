'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-review-improvements.ts';
import '@/ai/flows/summarize-reviews.ts';

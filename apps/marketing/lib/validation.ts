import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email(),
  full_name: z.string().min(2),
  company: z.string().min(2),
  role: z.string().min(2),
  use_case: z.enum(["business_docs", "cad_workflow", "mixed", "other"]),
  monthly_volume: z.string().min(1),
  file_types: z.array(z.string()).min(1),
  target_languages: z.array(z.string()).min(1),
  notes: z.string().max(2500).optional(),
  intent: z.enum(["demo", "security_review", "pricing_discussion"]).optional(),
  consent: z.literal(true),
  source_page: z.string().min(1),
  utm: z.record(z.string()).optional()
});

export const contactSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(5).max(3000),
  intent: z.enum(["sales", "support", "partnership"]).optional(),
  consent: z.literal(true)
});

export const waitlistSchema = z.object({
  email: z.string().email(),
  full_name: z.string().min(2).optional(),
  company: z.string().optional(),
  consent: z.literal(true)
});


import { z } from "zod";

export const OptionsSchema = z.object({
  iterations: z.number().min(1).max(100),
  quality: z.number().min(1).max(100),
});

export type Options = z.infer<typeof OptionsSchema>;

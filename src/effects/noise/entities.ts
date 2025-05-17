import { z } from "zod";

export const OptionsSchema = z.object({
  type: z.enum(["gaussian", "perlin"]),
  intensity: z.number().min(0).max(1),
})

export type Options = z.infer<typeof OptionsSchema>;

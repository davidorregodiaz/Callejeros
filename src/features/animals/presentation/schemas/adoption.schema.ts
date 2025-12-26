import z from "zod";

export const adoptionSchema = z.object({
  comment: z.string().max(500),
});

export type AdoptionDto = z.infer<typeof adoptionSchema>;

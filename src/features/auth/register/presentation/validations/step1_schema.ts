import z from "zod";

export const Step1Schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type Step1DTO = z.infer<typeof Step1Schema>;

import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;

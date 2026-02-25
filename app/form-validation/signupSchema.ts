import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Please enter your name"),

  email: z.string().email("Please enter a valid email"),

  password: z
    .string()
    .min(8, "Password should be at least 8 characters (for example: Abc2006)"),

  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password does not match",
  path: ["confirmPassword"],
});
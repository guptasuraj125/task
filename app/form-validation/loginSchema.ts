import { z } from "zod";
 
export const loginSchema = z.object({
    email: z.string().email("invalid email address"),
    password: z.string().min(8, "password must be of 6-8 char")
})
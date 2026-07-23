import { z } from 'zod';

export const contactSchema = z.object({
    email: z.email('Email must be a valid email address'),
    fullName: z.string().min(3, 'Name must be at least 3 characters'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    messages: z.string().min(10, 'Messages must be at least 10 characters'),
})

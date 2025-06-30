import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string().email('Email inválido.'),
    password: z.string().min(8, 'A senha precisa de no mínimo 8 caracteres.'),
});

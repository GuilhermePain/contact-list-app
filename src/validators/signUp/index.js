import { z } from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório.'),
    email: z.string().email('Email inválido.'),
    password: z.string().min(8, 'A senha precisa de no mínimo 8 caracteres.'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword']
});


import { z } from 'zod'

export const AuthCredentialValidators = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be atleast of 8 character"
    })
})

export type TAuthCredentialValidators = z.infer<
typeof AuthCredentialValidators
>

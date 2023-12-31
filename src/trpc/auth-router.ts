import { AuthCredentialValidators } from "../lib/validators/account-credentials-validators";
import { publicProcedure, router } from "./trpc";
import { getPayloadCLient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayLoadUser: publicProcedure
    .input(AuthCredentialValidators)
    .mutation(async ({input})=>{
        const {email, password } = input
        const payload = await getPayloadCLient()

        const {docs:users}= await payload.find({
            collection: "users",
            where:{
                email:{
                    equals: email,
                }
            }
        })
        if(users.length !== 0) throw new TRPCError({code: 'CONFLICT'})

        await payload.create({
            collection: "users",
            data: {
                email,
                password,
                role: 'user'
            }
        })
        return{success:true, sentToEmail: email}
    })
})
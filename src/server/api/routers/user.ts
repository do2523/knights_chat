import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    // usage example: api.user.getById(id);
    getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
        const user = await ctx.db.query.users.findFirst({
            where: (user, { eq }) => eq(user?.id, input),
            with: {
                usersToChats: {
                    with: {
                        chat: true
                    }
                }
            }
        })

        if(user == undefined) {
            return null;
        }

        return user;
    })
});
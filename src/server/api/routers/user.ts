import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { chats, users, usersToChats } from "note/server/db/schema";
import { eq, asc } from "drizzle-orm";

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
            },
        })

        if(user == undefined) {
            return null;
        }

        return user;
    }),

    getChatsById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
        await ctx.db.query.chats.findMany({
            orderBy: (chats, { asc }) => [asc(chats.createdAt)],
            with: {
                usersToChats: {
                    with: {
                        user: true,
                    }
                }
            },
        })

        const join = await ctx.db.select()
            .from(usersToChats)
            .leftJoin(users, eq(usersToChats.userId, users.id))
            .leftJoin(chats, eq(usersToChats.userId, chats.id))
            .where(eq(users.id, input))
            .orderBy(asc(chats.createdAt));
    })
});
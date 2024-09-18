import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { chats, usersToChats } from "note/server/db/schema";
import { getServerAuthSession } from "note/server/auth";

export const chatRouter = createTRPCRouter({
    create: protectedProcedure
        .input(
            z.object({
                name: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const chat = await ctx.db.insert(chats).values({
                name: input.name,
            }).returning({ chatId: chats.id });

            const session = await getServerAuthSession();

            // impossible
            if (chat[0]?.chatId == undefined) return;

            // this can't happen inside a protected procedure
            if (session?.user.id == undefined) return;

            await ctx.db.insert(usersToChats).values({
                chatId: chat[0]?.chatId,
                userId: session?.user.id,
            })
        })
})
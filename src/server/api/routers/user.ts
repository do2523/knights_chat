import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { users } from "note/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
    // usage example: api.user.getById(id);
    getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
        const user = await ctx.db.select().from(users).where(eq(users.id, input));

        // this should never happen
        if (user.length > 1) {
            console.log("Warning: There is more than 1 user with the same id");
        }

        return user[0];
    })
});
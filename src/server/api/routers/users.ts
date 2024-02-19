import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { z } from 'zod';

export const userRouter = createTRPCRouter({
  // Create User Mutation
  create: protectedProcedure
    .input(z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      image: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Directly create the user without simulated delay
      const newUser = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          // Assuming emailVerified is set upon some verification process later
          image: input.image,

          
        },
      });
      return newUser;
    }),

  // Update User Mutation
  update: protectedProcedure
    .input(z.object({
      id: z.string(), // Removed .min(1) as it's redundant for ID validation
      name: z.string().optional(),
      email: z.string().email().optional(),
      image: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const updatedUser = await ctx.db.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
          image: input.image,
        },
      });
      return updatedUser;
    }),

    verifyEmail: protectedProcedure
    .input(z.object({
      userId: z.string(),
      // Add any additional fields required for verification, e.g., a verification token
    }))
    .mutation(async ({ ctx, input }) => {
      // Assuming verification logic is handled here and confirms the email is verified
      return ctx.db.user.update({
        where: { id: input.userId },
        data: { emailVerified: new Date() }, // Update the emailVerified field upon successful verification
      });
    }),
    

});



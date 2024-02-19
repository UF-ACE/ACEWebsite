import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";


// model Sponsor {
//     id        Int      @id @default(autoincrement())
//     name      String
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt

//     createdById String
// }


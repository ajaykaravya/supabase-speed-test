import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as any;

const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function GET() {
  const start = performance.now();

  const users = await prisma.users.findMany({
    take: 50,
  });

  return Response.json({
    region: process.env.VERCEL_REGION,
    rows: users.length,
    time: Math.round(performance.now() - start),
  });
}
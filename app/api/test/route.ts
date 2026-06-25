import { prisma } from "@/lib/prisma";

export async function GET() {
  const start = performance.now();

  const users = await prisma.user.findMany({
    take: 50,
  });

  return Response.json({
    rows: users.length,
    time: Math.round(performance.now() - start),
    users: users
  });
}
import { prisma } from "@/lib/prisma";

export async function GET() {
  const start = performance.now();

  const categories = await prisma.categories.findMany({
    take: 50,
  });

  return Response.json({
    rows: categories.length,
    time: Math.round(performance.now() - start),
    categories: categories
  });
}
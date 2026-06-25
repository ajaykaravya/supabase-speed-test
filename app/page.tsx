"use client";

export default function Home() {

  async function testQuery() {
    const start = performance.now();

    const res = await fetch("/api/test");
    const data = await res.json();

    const end = performance.now();

    console.log("Rows:", data.length);
    console.log("Time:", Math.round(end - start), "ms");
  }

  return (
    <button onClick={testQuery}>
      Test Prisma Query
    </button>
  );
}
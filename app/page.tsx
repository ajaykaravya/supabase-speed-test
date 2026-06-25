"use client";

export default function Home() {

  async function testQuery() {
    const start = performance.now();

    const res = await fetch("/api/test");
    const categories = await fetch("/api/categories")
    const data = await res.json();
    const data2 = await categories.json();

    const end = performance.now();

    console.log("Rows:", data.length);
    console.log("Categories", data2.length)
    console.log("Time:", Math.round(end - start), "ms");
  }

  

  return (
    <button onClick={testQuery}>
      Test Prisma Query
    </button>
  );
}
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [time, setTime] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);

  async function testQuery() {

    const start = performance.now();

    const { data, error } = await supabase.from("User").select("*").limit(50);

    const end = performance.now();

    console.log("Rows:", data?.length);
    console.log("Time:", Math.round(end - start), "ms");
    console.log(error);
  }

  return (
    <main style={{ padding: 20 }}>
      <button onClick={testQuery}>Test Supabase Query</button>

      {time && (
        <div>
          <p>Rows: {count}</p>
          <p>Time: {time} ms</p>
        </div>
      )}
    </main>
  );
}

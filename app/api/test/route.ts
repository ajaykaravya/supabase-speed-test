import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
    const start = performance.now();

    const { data } = await supabase
        .from("users")
        .select("*")
        .limit(50);

    return Response.json({
        region: process.env.VERCEL_REGION,
        rows: data?.length,
        time: Math.round(performance.now() - start),
    });
}
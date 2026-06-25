"use client";

import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [time, setTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  async function categoriesQuery() {
    setLoading(true);

    const start = performance.now();

    const [categoriesRes] = await Promise.all([fetch("/api/categories")]);

    const categoriesData = await categoriesRes.json();

    setCategories(categoriesData.categories);

    const end = performance.now();

    setTime(Math.round(end - start));

    setLoading(false);
  }

  useEffect(() => {
    categoriesQuery();
  }, []);

  return (
    <main className="p-8 space-y-10">
      <button
        onClick={categoriesQuery}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Test Prisma Query"}
      </button>

      {time > 0 && (
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="font-semibold">API Response Time: {time} ms</p>
        </div>
      )}

      {/* Categories Table */}

      <section>
        <h2 className="mb-4 text-xl font-bold">
          Categories ({categories.length})
        </h2>

        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  ID
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Category Name
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm">{category.id}</td>

                  <td className="px-6 py-3 text-sm">{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

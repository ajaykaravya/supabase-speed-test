"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleUserPage = () => router.push("/users");
  const handleCategoriesPage = () => router.push("/categories");
  return (
    <main className="p-8 space-y-10">
      <button
        onClick={handleUserPage}
        className="rounded-lg bg-blue-600 px-5 m-2 cursor-pointer py-2 text-white hover:bg-blue-700"
      >
        Users
      </button>
      <button
        onClick={handleCategoriesPage}
        className="rounded-lg bg-blue-600 px-5 m-2 cursor-pointer py-2 text-white hover:bg-blue-700"
      >
        Categories
      </button>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="w-full bg-gray-300 px-6 py-3 flex items-center justify-between">
      
      <h1 className="text-lg text-black font-bold">Logo</h1>

      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded border text-black w-64"
      />

      <div className="flex items-center gap-3">
        <Link
          href="/pricing"
          className="bg-black cursor-pointer text-white px-4 py-1 rounded"
        >
          Pricing
        </Link>

        <button
          onClick={handleLogout}
          className="bg-orange-500 cursor-pointer text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
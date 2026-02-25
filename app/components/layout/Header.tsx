"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="w-full bg-gray-300 px-4 md:px-6 py-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        <h1 className="text-lg font-bold text-black text-center md:text-left">
          Logo
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded border text-black w-full md:w-64"
        />

        <div className="flex justify-center md:justify-end gap-3">
          <Link
            href="/pricing"
            className="bg-black text-white px-4 py-1 rounded text-sm"
          >
            Pricing
          </Link>

          <button
            onClick={handleLogout}
            className="bg-orange-500 text-white px-4 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
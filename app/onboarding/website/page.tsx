"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WebsitePage() {
  const router = useRouter();
  const [website, setWebsite] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Do you have a website?
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        It will help us give you personalized insights
      </p>

      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Enter your website"
        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500 mb-3"
      />

      <p
        onClick={() => setWebsite("")}
        className="text-sm text-blue-600 cursor-pointer mb-8"
      >
        I don’t have a website
      </p>

      <button
        onClick={() => router.push("/onboarding/marketing")}
        className="w-full bg-[#FF642D] hover:bg-[#e45727] text-white py-3 rounded-md font-medium"
      >
        Continue
      </button>
    </div>
  );
}
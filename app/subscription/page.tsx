"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubscriptionPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("local");

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm border border-gray-200 p-10">

        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          This is your best plan match
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Your ultimate solution for online visibility
        </p>

      
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelected("local")}
            className={`flex-1 border rounded-lg py-3 text-sm font-medium transition
              ${
                selected === "local"
                  ? "border-blue-400 bg-blue-50 text-gray-900"
                  : "border-gray-300 bg-white text-gray-700"
              }`}
          >
            SEO Pro & Local
            <div className="text-xs mt-1">$199.95/mo</div>
          </button>

          <button
            onClick={() => setSelected("pro")}
            className={`flex-1 border rounded-lg py-3 text-sm font-medium transition
              ${
                selected === "pro"
                  ? "border-blue-400 bg-blue-50 text-gray-900"
                  : "border-gray-300 bg-white text-gray-700"
              }`}
          >
            SEO Pro
            <div className="text-xs mt-1">$139.95/mo</div>
          </button>
        </div>

      
        <ul className="space-y-3 text-sm text-gray-700 mb-8">
          <li>✔ 5 websites to monitor</li>
          <li>✔ Keyword tools: find the best keywords</li>
          <li>✔ Competitive research: benchmark and outperform</li>
          <li>✔ Position tracking: track daily rankings</li>
          <li>✔ Site audit: fix issues and boost speed</li>
          <li>✔ Google profile and listings: maximize visibility</li>
          <li>✔ Review management: handle reviews with AI</li>
          <li className="text-gray-500">and more...</li>
        </ul>

        <p className="text-sm text-gray-900 mb-6">
          <span className="font-semibold">7 days free</span>, then $199.95/mo
        </p>

     
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-[#FF642D] hover:bg-[#e45727] text-white py-3 rounded-md font-medium transition"
        >
          Get free trial
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full mt-3 border border-gray-300 text-gray-600 py-3 rounded-md text-sm"
        >
          Skip trial
        </button>

        <p className="text-xs text-gray-500 mt-6 text-center">
          You may cancel the 7-day free trial at any time in accordance with our
          Cancellation Policy.
        </p>

      </div>
    </div>
  );
}
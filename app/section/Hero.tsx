"use client";

import React from "react";

export default function HomeHero() {
  return (
    <section className="w-full bg-[#4B2A8A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Task <span className="text-[#C4B5FD]">Suite</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#E9E5FF] max-w-2xl">
          Win digital visibility with powerful SEO tools and smarter marketing insights.
        </p>

        <div className="mt-10 w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">

            <input
              type="text"
              placeholder="Enter website or URL"
              className="flex-1 px-5 py-4 rounded-md text-sm text-black outline-none border border-[#D6CCFF] focus:ring-2 focus:ring-[#A78BFA]"
            />

            <div className="flex items-center justify-center bg-white text-black rounded-md border border-[#D6CCFF] px-4 py-4 text-sm sm:w-28">
              🇮🇳 IN
            </div>

            <button className="px-8 py-4 bg-[#FF642D] hover:bg-[#e45727] text-white font-semibold rounded-md transition sm:w-auto w-full">
              Get insights
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../section/Sidebar";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6FA]">

      <Header />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:ml-24">

          <div className="w-full max-w-2xl text-center">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10">
              Start optimizing your online presence
            </h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">

              <input
                type="text"
                placeholder="Enter a website"
                className="w-full sm:w-[420px] px-4 py-3 border border-blue-400 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />

              <button className="px-6 py-3 rounded-md text-white font-medium bg-[#5B5BD6] hover:bg-[#4c4cc4] transition w-full sm:w-auto">
                Start now
              </button>

            </div>

          </div>

        </main>

      </div>

      <footer className="px-4 sm:px-10 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>Send feedback</span>
        <span>© 2008 – 2026 Task. All rights reserved.</span>
      </footer>

    </div>
  );
};

export default Page;
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#3F3567] px-4 md:px-6 py-3 flex items-center justify-between relative z-50">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="text-orange-500">●</span>
          Task
        </div>

        <div className="hidden md:flex items-center w-[420px] bg-[#564A85] rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter your task, website, or keyword"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-300 outline-none"
          />
          <button className="bg-[#FF642D] px-4 py-2">
            <Search size={18} className="text-white" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white">
          <button className="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-md text-white font-medium">
            Start free trial
          </button>

          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>

          <Link href="#" className="hover:underline">
            Enterprise
          </Link>

          <Link href="#" className="hover:underline">
            More
          </Link>

          <div className="w-8 h-8 rounded-full bg-[#5E5292] flex items-center justify-center text-xs font-semibold">
            I
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white transform transition-transform duration-300 md:hidden z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button className="bg-[#FF642D] px-4 py-2">
              <Search size={18} className="text-white" />
            </button>
          </div>

          <button className="w-full bg-green-500 py-2 rounded-md text-white font-medium">
            Start free trial
          </button>

          <Link href="/pricing" className="block text-gray-700">
            Pricing
          </Link>

          <Link href="#" className="block text-gray-700">
            Enterprise
          </Link>

          <Link href="#" className="block text-gray-700">
            More
          </Link>
        </div>
      </div>
    </>
  );
}
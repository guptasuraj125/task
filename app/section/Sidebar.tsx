"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Sparkles,
  BarChart3,
  MapPin,
  FileText,
  Heart,
  Megaphone,
  FileBarChart,
  Grid,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { title: "Home", icon: Home },
    { title: "SEO", icon: Search },
    { title: "AI", icon: Sparkles },
    { title: "Traffic & Market", icon: BarChart3 },
    { title: "Local", icon: MapPin },
    { title: "Content", icon: FileText },
    { title: "Social", icon: Heart },
    { title: "Ad", icon: Megaphone },
    { title: "AI PR", icon: Sparkles },
    { title: "Reports", icon: FileBarChart },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <div className="hidden md:flex fixed left-0 top-0 h-screen w-24 bg-[#F4F1FA] flex-col items-center pt-6">
        <div className="flex flex-col items-center gap-8 w-full">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href="#"
                className="flex flex-col items-center text-[#7C6FB0] hover:text-[#5E4EA1] transition"
              >
                <Icon size={20} strokeWidth={1.5} />
                <span className="text-[11px] mt-2 text-center">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="w-10 h-px bg-[#DAD4EE] my-6"></div>

        <Link
          href="#"
          className="flex flex-col items-center text-[#7C6FB0] hover:text-[#5E4EA1] transition"
        >
          <Grid size={20} strokeWidth={1.5} />
          <span className="text-[11px] mt-2">Apps</span>
        </Link>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-6">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
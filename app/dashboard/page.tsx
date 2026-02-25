import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../section/Sidebar";
import Button from "../components/ui/Button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Start optimizing your online presence
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
            <input
              type="text"
              className="px-4 py-2 border rounded w-full"
              placeholder="Enter your website URL"
            />
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-700">
              Start Now
            </button>
          </div>
        </div>
      </div>

      <footer className="px-4 md:px-20 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-center md:text-left">

          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Blog</li>
            <li className="flex items-center">
              English
              <select className="ml-2 border rounded px-2 py-1">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </li>
          </ul>

          <p className="text-gray-600">
            © 2008 – 2026 TAsk. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end">
            <Link href="/pricing">
              <Button text="See plan and pricing" />
            </Link>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Page;
import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../section/Sidebar";
import Button from "../components/ui/Button";
import  Link  from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
     
      <Header />

 
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-8">
            Start optimizing your online presence
          </h1>

          <div className="flex gap-2">
            <input
              type="text"
              className="px-4 py-2 border rounded w-96"
              placeholder="Enter your website URL"
            />
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-700">
              Start Now
            </button>
          </div>
        </div>
      </div>

      
   <footer className=" px-20 py-3 shrink-0">
  <div className="flex items-center justify-between text-sm">

    <ul className="flex gap-6 items-center">
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
      © 2008 – 2026 Semrush. All rights reserved.
    </p>
    <Link href="/pricing">
    
    <Button text="See plan and pricing" />
    </Link>
  </div>
</footer>
    </div>
  );
};

export default Page;
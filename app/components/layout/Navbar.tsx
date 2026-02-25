"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-gray-50 w-full shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 md:px-16">

        <h1 className="text-2xl font-bold text-gray-600">
          Logo
        </h1>

        <ul className="hidden md:flex gap-8 items-center">
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#footer">Footer</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            Contact Us
          </li>
        </ul>

        <div className="hidden md:block">
          <Link href="/login">
            <Button text="Login" />
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#footer" onClick={() => setOpen(false)}>Footer</a>
          <span>Contact Us</span>
          <Link href="/login" onClick={() => setOpen(false)}>
            <Button text="Login" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { forgotPasswordSchema } from "@/app/form-validation/forgetpassword";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email });

    if (!result.success) {
      alert(result.error.issues[0].message);
      return;
    }

    alert("Reset link sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        <div
          onClick={() => router.back()}
          className="cursor-pointer text-2xl mb-4 text-gray-600"
        >
          <FiArrowLeft />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-4 py-3"
          />

          <button type="submit" className="bg-orange-500 text-white py-3 rounded-md">
            Send Reset Link
          </button>

        </form>

      </div>
    </div>
  );
}
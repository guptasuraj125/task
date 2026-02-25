"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginSchema } from "../form-validation/loginSchema";

export default function Page() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
  }>({});

  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(values);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    router.push("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="w-full max-w-md">

        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
          Log in
        </h1>

        <div className="bg-white border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition">
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-black">
            Sign in with Google
          </span>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  passwordRef.current?.focus();
                }
              }}
              placeholder="Enter email"
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500 placeholder-black text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                ref={passwordRef}
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 outline-none focus:border-gray-500 placeholder-black text-sm"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password[0]}
              </p>
            )}
          </div>

          <p
            onClick={() => router.push("/forgot-password")}
            className="text-sm text-right text-blue-600 cursor-pointer"
          >
            Forgot your password?
          </p>

          <button
            type="submit"
            className="w-full bg-[#FF642D] hover:bg-[#e45727] text-white py-3 rounded-md font-medium transition"
          >
            Log in
          </button>

          <p className="text-sm text-center mt-4">
            Don't have a Task account?{" "}
            <span
              onClick={() => router.push("/signup")}
              className="text-blue-600 cursor-pointer"
            >
              Sign up
            </span>
          </p>

          <p className="text-sm text-blue-600 cursor-pointer mt-3 text-center">
            Log in with SAML
          </p>

        </form>
      </div>
    </div>
  );
}
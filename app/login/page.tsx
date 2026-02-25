"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Page() {
  const router = useRouter();

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (passwordFocused) {
      const timer = setTimeout(() => {
        setPasswordFocused(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [passwordFocused]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6]">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          Create Account
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

        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              onFocus={() => setEmailFocused(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  passwordRef.current?.focus();
                }
              }}
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500 placeholder-black"
            />
          </div>

          {emailFocused && (
            <div className="relative">
              <label className="text-sm text-gray-700">Password</label>

              <div className="relative mt-1">
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onFocus={() => setPasswordFocused(true)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 outline-none focus:border-gray-500 placeholder-black"
                />

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>

              {passwordFocused && (
                <div className="absolute left-full ml-6 top-0 w-64 bg-white border border-gray-200 rounded-md p-4 shadow-md">
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    Password must contain:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• At least 8 characters</li>
                    <li>• One uppercase letter</li>
                    <li>• One lowercase letter</li>
                    <li>• One number</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {emailFocused && (
            <>
              <p
                onClick={() => router.push("/forgot-password")}
                className="text-sm text-right text-blue-600 cursor-pointer"
              >
                Forgot your password?
              </p>

              <button
                onClick={() => router.push("/verify")}
                className="w-full bg-[#FF642D] hover:bg-[#e45727] text-white py-3 rounded-md font-medium"
              >
                Create Account
              </button>

              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => router.push("/login")}
                  className="text-blue-600 cursor-pointer"
                >
                  Log in
                </span>
              </p>

              <p className="text-sm text-blue-600 cursor-pointer mt-3">
                Log in with SAML
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
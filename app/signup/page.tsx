"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Mail, Lock } from "lucide-react";

export default function Page() {
  const router = useRouter();

  const [emailFocused, setEmailFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="w-full max-w-md relative">

        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
          Create your account
        </h1>

        <div className="bg-white border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition">
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-black">
            Continue with Google
          </span>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="space-y-5">

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              onFocus={() => setEmailFocused(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  passwordRef.current?.focus();
                }
              }}
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 outline-none focus:border-blue-500 placeholder-gray-500 text-sm bg-white"
            />
          </div>

          {emailFocused && (
            <>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-12 py-3 outline-none focus:border-blue-500 placeholder-gray-500 text-sm bg-white"
                />

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </div>

                {passwordFocused && (
                  <div className="absolute left-[calc(100%+20px)] top-0 w-72 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Secure password tips:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• More than 8 characters</li>
                      <li>• Both lowercase and uppercase letters</li>
                      <li>• At least one numeric character</li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => router.push("/login")}
                className="w-full bg-[#FF642D] hover:bg-[#e45727] text-white py-3 rounded-md font-medium transition"
              >
                Create account
              </button>
            </>
          )}

          <p className="text-sm text-gray-700 leading-relaxed">
            By creating your account, you agree to the{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>

          <p className="text-sm text-gray-800">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-blue-600 cursor-pointer"
            >
              Log in
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
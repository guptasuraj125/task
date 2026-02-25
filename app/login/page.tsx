"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { loginSchema } from "../form-validation/loginSchema";
import useForm from "../hooks/useForm";
import useAuth from "../hooks/useAuth";
import Input from "../components/ui/Input";
import { LoginForm } from "../types/auth";

export default function Page() {
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);

  const { values, handleChange } = useForm<LoginForm>({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(values);
    if (!result.success) return;

    login();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        <div
          onClick={() => router.push("/")}
          className="cursor-pointer text-2xl mb-4 text-gray-600"
        >
          <FiArrowLeft />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={values.email}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                passwordRef.current?.focus();
              }
            }}
          />

          <Input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />

          <p
            onClick={() => router.push("/forgot-password")}
            className="text-sm text-right cursor-pointer text-blue-600"
          >
            Forgot Password?
          </p>

          <p>Didnt have an Account?</p>
          <span
            className="cursor-pointer text-blue-600"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </span>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-md"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
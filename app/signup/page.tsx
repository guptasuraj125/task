"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signupSchema } from "../form-validation/signupSchema";
import useForm from "../hooks/useForm";
import Input from "../components/ui/Input";
import { SignupForm } from "../types/auth";

export default function Page() {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const { values, handleChange } = useForm<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignupForm, string[]>>
  >({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signupSchema.safeParse(values);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md flex flex-col gap-3"
      >
        <h1 className="text-2xl font-semibold text-center">
          Create your account
        </h1>

        <Input
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              emailRef.current?.focus();
            }
          }}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name[0]}</p>
        )}

        <Input
          ref={emailRef}
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
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email[0]}</p>
        )}

        <Input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              confirmRef.current?.focus();
            }
          }}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password[0]}</p>
        )}

        <Input
          ref={confirmRef}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword[0]}
          </p>
        )}

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md mt-2"
        >
          Create account
        </button>
      </form>
    </div>
  );
}
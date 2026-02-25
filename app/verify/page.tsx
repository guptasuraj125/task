"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      router.push("/onboarding/role");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="px-10 py-6">
        <h1 className="text-xl font-bold">
          <span className="text-[#FF642D]">●</span> Task
        </h1>
      </div>

      <div className="flex justify-center mt-24">
        <div className="w-full max-w-md text-center">

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Verify your email
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            Enter a 6-digit code sent to
            <br />
            <span className="font-medium text-gray-900">
              yourmail@gmail.com
            </span>
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:border-gray-500 outline-none"
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-4">
            You can resend the code in 04:41
          </p>

          <p className="text-sm text-gray-600">
            Haven't received an email? Check your spam or contact us at{" "}
            <span className="text-blue-600 cursor-pointer">
              mail@task.com
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
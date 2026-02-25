"use client";

import { usePathname } from "next/navigation";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const steps = [
    "/onboarding/role",
    "/onboarding/website",
    "/onboarding/marketing",
    "/onboarding/experience",
  ];

  const currentStep = steps.indexOf(pathname) + 1;
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="px-10 py-6">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-[#FF642D]">●</span> Task
        </h1>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-full max-w-xl px-6">

          <p className="text-sm text-gray-500 mb-2">
            Let’s customize your experience
          </p>

          <div className="h-[3px] bg-gray-200 rounded-full mb-10">
            <div
              style={{ width: `${progress}%` }}
              className="h-[3px] bg-[#4DA3FF] rounded-full transition-all duration-500"
            />
          </div>

          {children}

        </div>
      </div>
    </div>
  );
}
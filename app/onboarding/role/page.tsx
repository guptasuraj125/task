"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RolePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const roles = [
    "Business owner / Entrepreneur",
    "Consultant / Freelancer",
    "Team member / Specialist",
    "Executive / Manager",
    "Student / Intern",
    "Other",
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        What best describes your role?
      </h2>

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role}
            onClick={() => setSelected(role)}
            className={`flex items-center gap-4 border rounded-lg px-5 py-4 cursor-pointer transition
              ${
                selected === role
                  ? "border-[#FF642D] bg-[#FFF3ED]"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
          >
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  selected === role
                    ? "border-[#FF642D]"
                    : "border-gray-400"
                }`}
            >
              {selected === role && (
                <div className="w-2.5 h-2.5 bg-[#FF642D] rounded-full" />
              )}
            </div>

            <span className="text-gray-800 text-sm">{role}</span>
          </div>
        ))}
      </div>

      <button
        disabled={!selected}
        onClick={() => router.push("/onboarding/website")}
        className={`mt-10 w-full py-3 rounded-md text-white font-medium transition
          ${
            selected
              ? "bg-[#FF642D] hover:bg-[#e45727]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
      >
        Continue
      </button>
    </div>
  );
}
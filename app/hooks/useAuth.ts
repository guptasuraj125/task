"use client";

import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();

  const login = () => {
    router.push("/dashboard");
  };

  const logout = () => {
    router.push("/login");
  };

  return { login, logout };
}
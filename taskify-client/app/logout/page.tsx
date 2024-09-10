"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { PATHS } from "@/lib/paths";

export default function LogoutPage() {
  useEffect(() => {
    signOut({
      callbackUrl: PATHS.login,
    });
  }, []);

  return null;
}

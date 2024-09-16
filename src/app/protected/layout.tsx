// src/app/AuthProvider.tsx

"use client"; // Mark this file as a client component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Protected({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

import "note/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "note/trpc/react";

export const metadata: Metadata = {
  title: "Knights-Chat",
  description: "A Place for Students to Work Together to do Well in Classes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
          <div className="flex-grow relative">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </div>
      </body>
    </html>
  );
}
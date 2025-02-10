import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import FormbricksProvider from "../components/formbricks";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Valentine's Day App",
  description: "Celebrate love with our special Valentine's Day app.",
};

const handlee = localFont({
  src: [
    {
      path: "./handlee.ttf",
      weight: "900",
    },
  ],
  variable: "--font-handlee",
});

const karla = localFont({
  src: [
    {
      path: "./karla.ttf",
      weight: "500",
    },
  ],
  variable: "--font-karla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <FormbricksProvider />
      </Suspense>
      <body className={`bg-svg ${handlee.variable} ${karla.variable}`}>
        <Toaster richColors position="bottom-center" expand={true} />
        {children}
      </body>
    </html>
  );
}

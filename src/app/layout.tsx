import type { Metadata } from "next";
import { Caveat, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Adhy & Diska - The Wedding",
  description: "Undangan Pernikahan Adhy & Diska. 20 Desember 2026.",
  keywords: ["undangan", "pernikahan", "wedding", "Adhy", "Diska"],
  authors: [{ name: "Adhy & Diska" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Adhy & Diska - The Wedding",
    description: "Undangan Pernikahan Adhy & Diska. 20 Desember 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${caveat.variable} ${greatVibes.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

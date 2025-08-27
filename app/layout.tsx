import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samra Portfolio",
  icons: {
    icon: [
      { url: "/rt.png", sizes: "32x32" },
      { url: "/rt.png", type: "image/png", sizes: "192x192" },
      { url: "/rt.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/rt.png", type: "image/png", sizes: "180x180" },
    ],
  },
  description: "Samra's artist portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

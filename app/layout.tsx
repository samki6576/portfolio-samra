import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samra Safdar | Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Samra Safdar, a Full Stack Developer and UI/UX Designer dedicated to engineering digital dreams with clean architecture and bold design.",
  keywords: ["Samra Safdar", "Full Stack Developer", "UI/UX Designer", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Samra Safdar" }],
  openGraph: {
    title: "Samra Safdar | Full Stack Developer & UI/UX Designer",
    description: "Engineering digital dreams with clean architecture and bold design.",
    url: "https://portfolio-samra.vercel.app", // Placeholder, user should update
    siteName: "Samra Safdar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samra Safdar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samra Safdar | Full Stack Developer & UI/UX Designer",
    description: "Engineering digital dreams with clean architecture and bold design.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

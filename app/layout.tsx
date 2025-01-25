import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FEIJI POKER - Premium Poker Experience in Bangkok",
  description: "Join FEIJI POKER for exclusive poker games in Bangkok. Experience safe gaming, private rooms, and professional service. Connect with us on Telegram and Line.",
  keywords: "FEIJI POKER, Bangkok poker, poker games, private poker rooms, safe gaming, professional poker, Thailand poker",
  openGraph: {
    title: "FEIJI POKER - Premium Poker Experience in Bangkok",
    description: "Join FEIJI POKER for exclusive poker games in Bangkok. Experience safe gaming, private rooms, and professional service.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/poker.jpg",
        width: 1200,
        height: 630,
        alt: "FEIJI POKER Bangkok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEIJI POKER - Premium Poker Experience in Bangkok",
    description: "Join FEIJI POKER for exclusive poker games in Bangkok. Experience safe gaming, private rooms, and professional service.",
    images: ["/poker.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // 需要替换为实际的 Google Search Console 验证码
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://feiji-poker.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

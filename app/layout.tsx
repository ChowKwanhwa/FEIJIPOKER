import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHANG POKER Bangkok - Premium Poker Games & Private Rooms",
  description: "Experience Bangkok's premier poker venue. Safe and professional poker games in the heart of Thailand. Private rooms, multiple stakes, and world-class service available.",
  keywords: "Bangkok poker, Thailand poker, poker games Bangkok, private poker rooms Bangkok, safe poker Thailand, CHANG POKER, premium poker Bangkok",
  openGraph: {
    title: "CHANG POKER Bangkok - Premium Poker Games & Private Rooms",
    description: "Experience Bangkok's premier poker venue. Safe and professional poker games in the heart of Thailand.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/poker.jpg",
        width: 1200,
        height: 630,
        alt: "CHANG POKER Bangkok - Premium Poker Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHANG POKER - Premium Poker Experience in Bangkok",
    description: "Join CHANG POKER for exclusive poker games in Bangkok. Experience safe gaming, private rooms, and professional service.",
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
        <link rel="canonical" href="https://CHANG-poker.com" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMRWB9MFXK"
          strategy="afterInteractive"
        />
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16838555818"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMRWB9MFXK');
            gtag('config', 'AW-16838555818');

            // Conversion tracking function
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16838555818/ySUMCK3xkZUaEKrxn90-',
                'value': 1.0,
                'currency': 'HKD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
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

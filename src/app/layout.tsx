import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "../components/BootstrapClient/BootstrapClient.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | BADD - Brothers Against Drug Deaths',
    default: 'BADD - Brothers Against Drug Deaths',
  },
  description: 'Our mission is to advocate for those battling addiction and mental illness, particularly within Black and underserved communities.',
  metadataBase: new URL('https://www.badd-sf.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/badd-assets/graphics/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}

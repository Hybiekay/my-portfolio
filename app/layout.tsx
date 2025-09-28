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
  title: "Ademola Ibukunoluwa | CodeWithHybiekay | Flutter Developer & Fullstack Engineer",
  description:
    "Hi, I'm Ademola Ibukunoluwa (Hybiekay) — Flutter Developer, Fullstack Engineer & Instructor. Learn coding, Flutter, and modern app development with tutorials and real-world projects.",
  keywords:
    "Flutter, Dart, Fullstack Developer, Portfolio, CodeWithHybiekay, Ibukunoluwa Ademola, Coding Tutorials",
  authors: [
    {
      name: "Ibukunoluwa Ademola",
      url: "https://www.linkedin.com/in/ademola-ibukunoluwa-572b77253",
    },
  ],
  openGraph: {
    title: "CodeWithHybiekay | Flutter Developer",
    description: "Learn coding with Hybiekay — Flutter, Node.js, and more.",
    url: "https://ibukunoluwa.ademola.ng",
    type: "website",
    images: [
      {
        url: "https://ibukunoluwa.ademola.ng/preview.jpg",
        alt: "CodeWithHybiekay Preview",
      },
    ],
    siteName: "CodeWithHybiekay",
    emails: ["hybiekay2@gmail.com", "ibukun@eulogia.net",]
  },
  alternates: {
    canonical: "https://ibukunoluwa.ademola.ng",
  },
  metadataBase: new URL("https://ibukunoluwa.ademola.ng"),
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

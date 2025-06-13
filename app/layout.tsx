import React from "react"
import "@/app/globals.css"
import { Providers } from "@/components/providers"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Utkarsh Deoli | Full Stack Developer",
  description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
  keywords: [
    "Utkarsh Deoli",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Utkarsh Deoli" }],
  creator: "Utkarsh Deoli",
  publisher: "Utkarsh Deoli",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshdeoli.in",
    title: "Utkarsh Deoli | Full Stack Developer",
    description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
    siteName: "Utkarsh Deoli Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Deoli - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Deoli | Full Stack Developer",
    description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
    creator: "@utkarshdeoli",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Utkarsh Deoli | Full Stack Developer",
  description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshdeoli.in",
    title: "Utkarsh Deoli | Full Stack Developer",
    description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
    siteName: "Utkarsh Deoli Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Deoli | Full Stack Developer",
    description: "Portfolio of Utkarsh Deoli, a Full Stack Developer specializing in modern web technologies.",
    creator: "@utkarshdeoli",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

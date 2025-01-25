import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AbstractProvider from "@/components/AbstractProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web3 Link Shortener",
  description: "Shorten your links with blockchain technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AbstractProvider>
      <body className={`${inter.className} antialiased bg-background text-foreground min-h-screen`}>{children}</body>
      </AbstractProvider>
    </html>
  )
}


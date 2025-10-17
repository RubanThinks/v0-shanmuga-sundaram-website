import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Star Health Insurance | Mr. Shanmuga Sundaram | 10+ Years of Expertise",
  description:
    "Get the best Star Health Insurance advice from Mr. Shanmuga Sundaram, Senior Sales Manager with 10+ years of experience and 3000+ satisfied clients.",
  keywords:
    "Star Health Insurance, Health Insurance Salem, Best Health Insurance Advisor, Shanmuga Sundaram, Star Insurance Agent",
  openGraph: {
    title: "Star Health Insurance | Mr. Shanmuga Sundaram",
    description: "Expert health insurance guidance with 10+ years of experience and 3000+ satisfied clients",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

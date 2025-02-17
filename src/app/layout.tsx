import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { NavButtons } from "@/components/nav-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kimdev",
  description: "Portfolio of Boniface Kimani, full-stack web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavButtons />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


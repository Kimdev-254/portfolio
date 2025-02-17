import type React from "react"
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#0A0A0A]">{children}</div>
}


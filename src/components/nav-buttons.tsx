"use client"

import { MoveRight } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function NavButtons() {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-gray-900 hover:bg-gray-800 text-white border-gray-800"
      >
        View projects
        <MoveRight className="w-4 h-4" />
      </Link>
      <ModeToggle />
    </div>
  )
}


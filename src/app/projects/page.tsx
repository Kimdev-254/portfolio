"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"

// Project categories for filtering
const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "design", label: "UI/UX Design" },
  { id: "animation", label: "Animations" },
]

// Demo projects data
const projects = [
  {
    id: 1,
    title: "Canvas Particles",
    category: "animation",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-15%2016-27-59-w5dq3Fr7fsx14gFEsllkSm6AWaGnxx.png",
    description: "Interactive particle system with mouse tracking",
  },
  {
    id: 2,
    title: "Pixelated Image Reveal",
    category: "animation",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-15%2016-27-59-w5dq3Fr7fsx14gFEsllkSm6AWaGnxx.png",
    description: "Smooth pixelation transition effect",
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-mono">Popular Demos</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="cursor-pointer hover:bg-[#1A1A1A]"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
          <Toggle
            pressed={autoplayEnabled}
            onPressedChange={setAutoplayEnabled}
            className="bg-[#1A1A1A] data-[state=on]:bg-gray-700"
          >
            Projects
          </Toggle>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#1A1A1A] rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-200">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


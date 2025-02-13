"use client"

import { useState, useEffect } from "react"


export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  // const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    })

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [lastScrollY])

  if (!mounted) return null

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isVisible ? "top-0" : "-top-20"}
        bg-white/95 dark:bg-gray-900/95
        backdrop-blur-sm shadow-md
      `}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center items-center space-x-8">
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["skills", "Skills"],
            ["services", "Services"],
            ["education", "Education"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => {
                  const element = document.getElementById(id)
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
                className={`
                  px-3 py-2 rounded-md transition-colors duration-300
                  ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


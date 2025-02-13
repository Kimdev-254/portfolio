import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "@/components/FloatingNav"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  )
}


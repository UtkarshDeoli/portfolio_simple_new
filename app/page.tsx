"use client"

import { useState, useEffect } from "react"
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import TechStackSection from "@/components/sections/TechStackSection"
import ServicesSection from "@/components/sections/ServicesSection"
import Footer from "@/components/sections/Footer"
import { experiences, projects, techStackWithIcons, services } from "@/lib/data"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <Header />
      
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <HeroSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <TechStackSection techStack={techStackWithIcons} />
        <ServicesSection services={services} />
      </main>

      <Footer />
    </div>
  )
}
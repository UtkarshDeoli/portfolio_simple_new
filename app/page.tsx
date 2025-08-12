"use client"

import { useState, useEffect } from "react"
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection"
import TechStackSection from "@/components/sections/TechStackSection"
import ServicesSection from "@/components/sections/ServicesSection"
import Footer from "@/components/sections/Footer"
import { ContactCards } from "@/components/ContactForm"
import { experiences, projects, featuredProjects, techStackWithIcons, services } from "@/lib/data"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <HeroSection />
          <FeaturedProjectsSection projects={featuredProjects} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <TechStackSection techStack={techStackWithIcons} />
          <ServicesSection services={services} />
          <ContactCards />
        </div>
      </main>

      <Footer />
    </div>
  )
}
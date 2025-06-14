"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Hey, I'm Utkarsh</h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-xl text-left">
          India-based Versatile and high agency developer with extensive experience in building scalable, efficient, and user-centric applications.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <a href="https://github.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <a href="https://linkedin.com/in/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <a href="https://twitter.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <a href="mailto:contact@utkarshdeoli.in">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

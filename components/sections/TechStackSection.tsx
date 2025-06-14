"use client"

import { motion } from "framer-motion"
import { IconType } from "react-icons"

interface TechItem {
  name: string
  icon: IconType
}

interface TechStackSectionProps {
  techStack: TechItem[]
}

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold mb-12 text-white">Tech Stack</h2>
      <div className="grid grid-cols-4 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 gap-5 text-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.1 }}
            className="group relative flex flex-col items-center justify-center py-4 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
          >
            <tech.icon className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors" />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

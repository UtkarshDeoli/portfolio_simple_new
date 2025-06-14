"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

interface Experience {
    role: string
    company: string
    duration: string
    description: string
}

interface ExperienceSectionProps {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {


    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-16"
        >
            <h2 className="text-2xl font-bold mb-12 text-white">Experience</h2>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-6 rounded-lg bg-[#393E46]/30 backdrop-blur-sm">
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Code2 className="h-6 w-6 text-[#00ADB5" />
                            </div>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                                    <p className="text-gray-400">{experience.company}</p>
                                </div>
                                <span className="text-sm text-gray-400 font-mono">{experience.duration}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{experience.description}</p>
                            <div className="absolute bottom-2 right-2 text-xs text-gray-600 font-mono opacity-50">
                                {"// experience.js"}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
           
        </motion.section>
    )
}

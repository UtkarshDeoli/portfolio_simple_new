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

// VS Code One Dark Theme colors
const VSCODE_COLORS = {
    keyword: '#569CD6',    // Blue - for role/title
    string: '#CE9178',     // Orange/Tan - for company name
    comment: '#6A9955',    // Green - for description
    special: '#D7BA7D',    // Amber - for duration
} as const;

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {


    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-16"
        >
            <h2 className="text-2xl font-bold mb-12 text-foreground">Experience</h2>
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
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm border border-border-subtle font-mono">
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Code2 className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 
                                        className="text-lg font-semibold"
                                        style={{ color: VSCODE_COLORS.keyword }}
                                    >
                                        {experience.role}
                                    </h3>
                                    <p 
                                        className="font-medium mt-1"
                                        style={{ color: VSCODE_COLORS.string }}
                                    >
                                        {experience.company}
                                    </p>
                                </div>
                                <span 
                                    className="text-sm"
                                    style={{ color: VSCODE_COLORS.special }}
                                >
                                    {experience.duration}
                                </span>
                            </div>
                            <p 
                                className="leading-relaxed mt-2"
                                style={{ color: VSCODE_COLORS.comment }}
                            >
                                {'// '}{experience.description}
                            </p>
                            <div className="absolute bottom-2 right-2 text-xs text-foreground-subtle font-mono opacity-50">
                                {"// experience.js"}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
           
        </motion.section>
    )
}

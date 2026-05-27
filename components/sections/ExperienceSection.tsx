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

const keywords = [
    { term: "React", color: "text-status-available" },
    { term: "Next.js", color: "text-status-info" },
    { term: "TypeScript", color: "text-status-warning" },
    { term: "Node.js", color: "text-status-available" },
    { term: "Python", color: "text-status-warning" },
    { term: "AI", color: "text-status-busy" },
    { term: "ML", color: "text-status-busy" },
    { term: "AWS", color: "text-status-info" },
    { term: "Docker", color: "text-status-info" },
    { term: "Kubernetes", color: "text-status-info" },
    { term: "Flutter", color: "text-status-available" },
    { term: "Firebase", color: "text-status-warning" },
    { term: "MongoDB", color: "text-status-available" },
    { term: "PostgreSQL", color: "text-status-info" },
    { term: "GraphQL", color: "text-status-busy" },
    { term: "REST", color: "text-status-busy" },
    { term: "Tailwind", color: "text-status-available" },
    { term: "Prisma", color: "text-status-info" },
    { term: "Redis", color: "text-status-warning" },
    { term: "CI/CD", color: "text-status-busy" },
    { term: "Git", color: "text-status-warning" },
]

const highlightKeywords = (text: string) => {
    let result = text
    keywords.forEach(({ term, color }) => {
        const regex = new RegExp(`\\b${term}\\b`, "g")
        result = result.replace(regex, `__${term}__`)
    })
    return result.split(/(__([^_]+)__)/g).map((part, index) => {
        const matched = keywords.find(k => `__${k.term}__` === part)
        if (matched) {
            return <span key={index} className={matched.color}>{matched.term}</span>
        }
        return part
    })
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
            <h2 className="text-2xl font-bold mb-12 text-foreground">Experience</h2>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm opacity-60 group-hover:opacity-100 group-hover:bg-background-tertiary/50 group-hover:border-border-subtle border border-transparent transition-all duration-300">
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Code2 className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
                                    <p className="text-foreground-muted">{experience.company}</p>
                                </div>
                                <span className="text-sm text-foreground-muted font-mono">{experience.duration}</span>
                            </div>
                            <p className="text-foreground-muted leading-relaxed font-mono">
                                {highlightKeywords(experience.description)}
                            </p>
                            <div className="absolute bottom-2 right-2 text-xs text-foreground-subtle font-mono opacity-50">
                                {"// 0" + (index + 1) + "_experience.js"}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
           
        </motion.section>
    )
}

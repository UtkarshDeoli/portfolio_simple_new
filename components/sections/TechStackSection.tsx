"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import * as SiIcons from "react-icons/si"

interface TechItem {
    name: string
    icon: string
}

interface TechStackSectionProps {
    techStack: TechItem[]
}

const MemoizedTechItem = memo(
    ({ tech, index }: { tech: TechItem; index: number }) => {
        const Icon = (SiIcons as any)[tech.icon]
        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative flex flex-col items-center justify-center py-4 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
            >
                {Icon ? (
                    <Icon className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors" />
                ) : (
                    <div className="h-8 w-8" />
                )}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                </div>
            </motion.div>
        )
    }
)

function TechStackSection({ techStack }: TechStackSectionProps) {
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
                    <MemoizedTechItem key={index} tech={tech} index={index} />
                ))}
            </div>
        </motion.section>
    )
}

export default TechStackSection

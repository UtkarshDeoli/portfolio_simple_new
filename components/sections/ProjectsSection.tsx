"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Link, Link2 } from "lucide-react"
import { useState } from "react"

interface Project {
    name: string
    description: string
    technologies: string[]
    demo?: string
    github?: string
}

interface ProjectsSectionProps {
    projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [visibleProjects, setVisibleProjects] = useState(Math.min(4, projects.length));
    const showMore = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-16"
        >
            <h2 className="text-2xl font-bold mb-12 text-white">Projects</h2>
            <div className="space-y-8 ">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="flex justify-between items-start mb-3 ">
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#00ADB5] transition-colors">
                                {project.name}
                            </h3>
                            <div className="flex gap-2">
                                {project.github && (
                                    <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-[#00ADB5]/20 h-8 px-2">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"  className="flex items-center gap-1">
                                            <Github className="h-4 w-4" /> GitHub
                                            
                                        </a>
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-[#00ADB5]/50 h-8 px-2">
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                            <Link className="h-4 w-4" /> View
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="text-xs px-2 py-1 bg-[#393E46]/50 text-gray-400 font-mono rounded-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            {visibleProjects < projects.length && (
                <div className="flex justify-center">
                    <button
                        className="mt-8 px-5 py-2 rounded-md text-white hover:underline hover:text-[#00ADB5] transition-colors duration-700"
                        onClick={showMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </motion.section>
    )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye, Globe, Smartphone, Monitor, Cpu, Brain } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface FeaturedProject {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    appStoreUrl?: string
    playStoreUrl?: string
    featured?: boolean
    status?: 'completed' | 'in-progress' | 'concept'
    type: 'web' | 'mobile' | 'ios' | 'android' | 'desktop' | 'embedded' | 'ai'
}

interface FeaturedProjectsSectionProps {
    projects: FeaturedProject[]
}

const getProjectTypeIcon = (type: string) => {
    switch (type) {
        case 'web':
            return <Globe className="h-3 w-3" />
        case 'mobile':
            return <Smartphone className="h-3 w-3" />
        case 'ios':
            return <Smartphone className="h-3 w-3" />
        case 'android':
            return <Smartphone className="h-3 w-3" />
        case 'desktop':
            return <Monitor className="h-3 w-3" />
        case 'embedded':
            return <Cpu className="h-3 w-3" />
        case 'ai':
            return <Brain className="h-3 w-3" />
        default:
            return <Globe className="h-3 w-3" />
    }
}

const getProjectTypeName = (type: string) => {
    switch (type) {
        case 'web':
            return 'Web App'
        case 'mobile':
            return 'Mobile App'
        case 'ios':
            return 'iOS App'
        case 'android':
            return 'Android App'
        case 'desktop':
            return 'Desktop App'
        case 'embedded':
            return 'Embedded'
        case 'ai':
            return 'AI/ML'
        default:
            return 'Project'
    }
}

const ProjectCard = ({ project, index }: { project: FeaturedProject; index: number }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-2xl bg-[#393E46]/20 border border-[#393E46]/50 hover:border-[#00ADB5]/40 transition-all duration-500 backdrop-blur-sm h-[340px] flex flex-col">
                {/* Project Type Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-[#222831]/90 text-gray-300 border-0 text-[10px] font-medium px-1.5 py-0.5 flex items-center gap-1">
                        {getProjectTypeIcon(project.type)}
                        {getProjectTypeName(project.type)}
                    </Badge>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/2.5] overflow-hidden bg-gradient-to-br from-[#393E46]/30 to-[#222831]/30">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-700 ${
                            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        } ${isHovered ? 'scale-110' : 'scale-100'}`}
                        onLoad={() => setImageLoaded(true)}
                        sizes="(max-width: 768px) 100vw, 288px"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Hover Overlay with Actions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#222831]/80 backdrop-blur-sm flex items-center justify-center gap-2"
                    >
                        {project.liveUrl && (
                            <Button
                                asChild
                                size="sm"
                                className="bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white border-0 shadow-lg text-xs px-3 py-1"
                            >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Eye className="h-3 w-3 mr-1" />
                                    View
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-xs px-3 py-1"
                            >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                </a>
                            </Button>
                        )}
                    </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-3">
                    {/* Title and Description - Fixed height area */}
                    <div className="flex-1 min-h-0">
                        <h3 className="text-base font-semibold text-white group-hover:text-[#00ADB5] transition-colors duration-300 line-clamp-1 mb-1">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 text-[10px] leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {/* Tags - Fixed position */}
                    <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="text-xs px-2 py-0.5 bg-[#393E46]/50 text-gray-300 rounded text-[10px] font-mono transition-colors hover:bg-[#00ADB5]/20 hover:text-[#00ADB5]"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 4 && (
                            <span className="text-xs px-2 py-0.5 text-gray-500 font-mono text-[10px]">
                                +{project.tags.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Action Links - Always at bottom */}
                    <div className="flex items-center gap-1 mt-auto overflow-auto scrollbar-hide">
                        {/* For mobile/iOS/Android apps, show app store links */}
                        {(project.type === 'mobile' || project.type === 'ios' || project.type === 'android') && (
                            <>
                                {project.appStoreUrl && (
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="text-gray-400 hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 p-1 h-auto text-xs flex-shrink-0"
                                    >
                                        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                                            <Smartphone className="h-3 w-3" />
                                            Appstore
                                        </a>
                                    </Button>
                                )}
                                {project.playStoreUrl && (
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="text-gray-400 hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 p-1 h-auto text-xs flex-shrink-0"
                                    >
                                        <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                                            <Smartphone className="h-3 w-3" />
                                            Play Store
                                        </a>
                                    </Button>
                                )}
                            </>
                        )}
                        
                        {/* For web apps and others, show demo link */}
                        {project.type === 'web' && project.liveUrl && (
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 p-1 h-auto text-xs flex-shrink-0"
                            >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3" />
                                    Demo
                                </a>
                            </Button>
                        )}
                        
                        {/* GitHub link for all projects */}
                        {project.githubUrl && (
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-1 h-auto text-xs flex-shrink-0"
                            >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-3 w-3" />
                                    Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="overflow-hidden"
        >
            {/* Section Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-gray-400 text-sm">A showcase of my recent work and side projects</p>
            </div>

            {/* Horizontal Scrollable Container */}
            <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
                    {projects.map((project, index) => (
                        <div key={project.id} className="flex-none w-64">
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Twitter,
  Code2,
  Database,
  Palette,
  Wrench,
  Globe,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300">
      {/* Header */}
      <header className="fixed top-0 z-40 w-full bg-[#0e0e0e]/80 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-2xl mx-auto px-6 flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl text-white"
          >
            Utkarsh Deoli
          </motion.div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-400 hover:text-white"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hey, I'm Utkarsh</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl text-left">
              India-based full-stack developer passionate about crafting exceptional digital experiences. I transform
              complex challenges into elegant, user-centric solutions.
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

        {/* Experience Section */}
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
                <div className="relative p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Code2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                      <p className="text-gray-400">{experience.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono">{experience.duration}</span>
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

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 text-sm"
        >
          <h2 className="text-2xl font-bold mb-12 text-white">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white h-8 px-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white h-8 px-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 font-mono rounded-sm opacity-5 opacity-15 opacity-20 opacity-35 opacity-95">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h2 className="text-2xl font-bold mb-12 text-white">Tech Stack</h2>
          <div className="grid grid-cols-6 md:grid-cols-8 gap-6 text-center">
            {techStackWithIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
              >
                <tech.icon className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 px-[-px] px-0"
        >
          <h2 className="text-2xl font-bold mb-12 text-white">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative p-6 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-300 mx-0">
                  <div className="text-3xl mb-4">{service.emoji}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-4">{service.price}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                        Get Started
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">Let's Work Together</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Tell me about your project and let's create something amazing.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Name
                          </Label>
                          <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-300">
                            Project Details
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell me about your project..."
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        >
                          Send Message
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Code2 className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8">
        <div className="max-w-2xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Utkarsh Deoli. Crafted with ❤️</p>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a href="https://github.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a href="https://linkedin.com/in/utkarshdeoli" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a href="https://twitter.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a href="mailto:contact@utkarshdeoli.in">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Updated data with code leak design elements
const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description:
      "Leading development of enterprise web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "2018 - 2021",
    description:
      "Developed and maintained multiple client websites and web applications. Worked with React, Express, MongoDB, and various APIs.",
  },
  {
    role: "Frontend Developer",
    company: "WebCraft Agency",
    duration: "2016 - 2018",
    description:
      "Created responsive websites for clients across various industries. Specialized in HTML, CSS, JavaScript, and WordPress development.",
  },
]

const projects = [
  {
    name: "oss.now",
    description: "A place to share your open source projects and find new ones.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Payload CMS", "Postgres"],
    demo: "https://ecommerce-demo.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/ecommerce-platform",
  },
  {
    name: "UI Registry",
    description: "A simple UI registry for components and blocks using the shadcn api.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    demo: "https://tasks.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/task-manager",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "Stripe"],
    demo: "https://portfolio-gen.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/portfolio-generator",
  },
]

const techStackWithIcons = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Smartphone },
  { name: "AWS", icon: Database },
  { name: "Docker", icon: Wrench },
  { name: "Git", icon: Wrench },
  { name: "Figma", icon: Palette },
]

const services = [
  {
    name: "Full Stack Apps",
    emoji: "⚡",
    price: "From $3,500",
    features: ["Custom Backend", "Database Design", "API Development", "Authentication", "Real-time Features"],
  },
  {
    name: "Enterprise Solutions",
    emoji: "🎯",
    price: "From $7,500",
    features: [
      "Scalable Architecture",
      "Advanced Security",
      "Performance Optimization",
      "Team Collaboration",
      "Long-term Support",
    ],
  },
]

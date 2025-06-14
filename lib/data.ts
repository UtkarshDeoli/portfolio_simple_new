import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiAmazon,
  SiDocker,
  SiGit,
  SiFigma,
  SiFlutter,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiExpress,
  SiReact as SiReactNative,
} from "react-icons/si"

export const experiences = [
  {
    role: "Software Developer Engineer",
    company: "Crux Sphere",
    duration: "2024 Aug - Present",
    description:
      "Designed and delivered high-performing web and mobile applications. Optimized deployment workflows and automated processes, increasing development speed and reliability by 70%.",
  },
  {
    role: "SDE Intern",
    company: "Crux Sphere",
    duration: "2024 June - 2024 Aug",
    description:
      "Developed and maintained websites and mobile apps, focusing on code quality, performance, and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
{
    role: "Embedded Systems Developer Intern",
    company: "Sakha AI",
    duration: "2024 Jan - 2024 Mar",
    description:
    "Developed a complete voice assistant system using ESP32, integrating speech recognition and synthesis. Implemented real-time audio data processing and communication protocols for IoT applications.",
},
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2019 - 2024",
    description:
      "Worked on Variety of projects, including e-commerce platforms, Embedded Solutions using ESP32, and custom Web and Mobile applications.",
  },
]

export const projects = [
    {
        name: "Survey Application",
        description:
            "A user-facing survey app with role-based access, location tracking, notifications, and chat support.",
        technologies: ["React Native", "Node.js"],
        demo: "https://utkarshdeoli.in",
        github: "https://github.com/utkarshdeoli",
    },
    {
        name: "Fitpick",
        description:
            "A social media app for weekly fitness contests and apparel search powered by Google Vertex AI.",
        technologies: ["React Native", "Firebase", "Google Vertex AI"],
        demo: "https://utkarshdeoli.in",
        github: "https://github.com/utkarshdeoli",
    },
    {
        name: "Business Listing",
        description:
            "A platform to list and discover businesses nearby with real-time search and filtering.",
        technologies: ["Flutter", "Pocketbase"],
        demo: "https://utkarshdeoli.in",
        github: "https://github.com/utkarshdeoli",
    },
    {
        name: "AI Quiz App",
        description:
            "An AI-driven quiz app with auto-generated quizzes, adaptive difficulty, and analytics using Gemini API.",
        technologies: ["Flutter", "Firebase", "Gemini API"],
        demo: "https://utkarshdeoli.in",
        github: "https://github.com/utkarshdeoli",
    },
    {
        name: "Embedded IoT Solutions",
        description:
            "Developed embedded solutions using ESP8266 and ESP32 for various IoT applications.",
        technologies: ["Python", "ESP8266", "ESP32", "MicroPython"],
        demo: "https://utkarshdeoli.in",
        github: "https://github.com/utkarshdeoli",
    }
]


export const techStackWithIcons = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "React Native", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "Firebase", icon: SiFirebase },
    { name: "Python", icon: SiPython },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Figma", icon: SiFigma },
]

export const services = [
  {
    name: "Full-Time Employment",
    emoji: "💼",
    price: "Open to Offers",
    type: "employment",
    description: "Looking for full-time opportunities as a Software Developer",
    features: ["Full-Stack Development", "Mobile Development", "DevOps Engineering", "Team Collaboration"]
  },
  {
    name: "Website Development",
    emoji: "🌐",
    price: "From $800",
    type: "website",
    description: "Custom websites and web applications built with modern technologies",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "CMS Integration"]
  },
  {
    name: "Mobile App Development",
    emoji: "📱",
    price: "From $1,200",
    type: "mobile",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["Flutter", "React Native", "Firebase Integration", "App Store Deploy"]
  },
  {
    name: "Embedded Development",
    emoji: "🔧",
    price: "From $600",
    type: "embedded",
    description: "IoT solutions and embedded systems using ESP32/ESP8266",
    features: ["ESP32/ESP8266", "Sensor Integration", "Real-time Data", "Remote Monitoring"]
  },
  {
    name: "AI Automation",
    emoji: "🤖",
    price: "From $500",
    type: "ai",
    description: "Intelligent automation solutions to streamline your workflows",
    features: ["Process Automation", "Data Analysis", "ML Models", "API Integration"]
  },
  {
    name: "AI Chatbots",
    emoji: "💬",
    price: "From $400",
    type: "chatbot",
    description: "Smart conversational AI powered by modern language models",
    features: ["Natural Language", "24/7 Support", "Multi-platform", "Custom Training"]
  },
  {
    name: "E-commerce Solutions",
    emoji: "🛒",
    price: "From $1,000",
    type: "ecommerce",
    description: "Complete online stores with payment processing and inventory",
    features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Responsive"]
  },
  {
    name: "Technical Consulting",
    emoji: "🎯",
    price: "From $80/hour",
    type: "consulting",
    description: "Expert guidance on architecture, code review, and best practices",
    features: ["Code Review", "Architecture Design", "Performance Optimization", "Team Mentoring"]
  }
]


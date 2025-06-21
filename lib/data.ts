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
} from "react-icons/si";

export const experiences = [
  {
    role: "Software Developer Engineer",
    company: "Crux Sphere",
    duration: "2024 Aug - Present",
    description:
      "Lead the design and delivery of high-performing web and mobile applications. Optimized deployment workflows and automated processes, boosting development speed and reliability by 70%.",
  },
  {
    role: "SDE Intern",
    company: "Crux Sphere",
    duration: "2024 June - 2024 Aug",
    description:
      "Engineered and maintained websites and mobile apps, ensuring code quality, performance, and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    role: "Embedded Systems Developer Intern",
    company: "Sakha AI",
    duration: "2024 Jan - 2024 Mar",
    description:
      "Developed a complete voice assistant system using ESP32, integrating speech recognition and synthesis. Brought down the cost of the project by 70% through efficient hardware and software integration.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2019 - 2024",
    description:
      "Delivered variety of projects, including e-commerce platforms, Embedded Solutions using ESP32, and custom Web and Mobile applications.",
  },
];

export const projects = [
  {
    name: "AI Exam Preparation App",
    description:
      "Developed an AI-driven exam preparation platform with adaptive mock tests, note summarization, answer retrieval, and previous year paper analysis. Leveraged a RAG pipeline integrated with the Gemini API to deliver deep exam insights and prioritize important topics, reducing preparation by ~30% through focused, personalized learning.",
    technologies: ["NextJS", "FastAPI", "Gemini API" , "RAG", "Python"],
    demo: "https://utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli",
    details: [
      "Integrated RAG (Retrieval-Augmented Generation) pipeline for enhanced AI responses",
      "Developed adaptive mock test system that adjusts difficulty based on performance", 
      "Implemented intelligent note summarization using Gemini API",
      "Built previous year paper analysis with trend identification",
      "Created personalized learning paths reducing study time by 30%"
    ]
  },
  {
    name: "Survey Application",
    description:
      "Developed a user-facing survey app with role-based access, location tracking, notifications, and chat support, enhancing data collection and user engagement, Serving more than 30k users and 2 org. with a 99.9% uptime.",
    technologies: ["React Native", "Node.js"],
    demo: "https://utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli",
    details: [
      "Implemented role-based access control for different user types",
      "Added real-time location tracking for field surveys",
      "Built push notification system for survey reminders",
      "Integrated chat support for user assistance",
      "Designed offline data sync for remote areas"
    ]
  },
  {
    name: "Fitpick",
    description:
      "Engineered a social media app for weekly fitness contests and apparel search powered by Google Vertex AI, fostering community engagement and personalized recommendations.",
    technologies: ["React Native", "Firebase", "Google Vertex AI"],
    demo: "https://utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli",
    details: [
      "Built social media platform with weekly fitness challenges",
      "Integrated Google Vertex AI for personalized apparel recommendations",
      "Developed community features including likes, comments, and sharing",
      "Created leaderboards and achievement systems",
      "Implemented real-time chat and group challenges"
    ]
  },
  {
    name: "Business Listing",
    description:
      "Launched a platform to list and discover businesses nearby with real-time search and filtering, driving local commerce and user discovery.",
    technologies: ["Flutter", "Pocketbase"],
    demo: "https://utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli",
    details: [
      "Built comprehensive business directory with advanced search",
      "Implemented geo-location based business discovery",
      "Added real-time filtering by category, rating, and distance",
      "Created business owner dashboard for listing management",
      "Integrated review and rating system"
    ]
  },
  {
    name: "Embedded IoT Solutions",
    description:
      "Designed embedded solutions using ESP8266 and ESP32 for various IoT applications, enabling remote monitoring and automation capabilities.",
    technologies: ["Python", "ESP8266", "ESP32", "MicroPython"],
    demo: "https://utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli",
    details: [
      "Developed IoT sensors for environmental monitoring",
      "Built remote control systems for home automation",
      "Implemented real-time data collection and visualization",
      "Created mobile app interfaces for device control",
      "Designed low-power solutions for battery-operated devices"
    ]
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    demo: "https://ecommerce-demo.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/ecommerce-platform",
    details: [
      "Integrated Stripe payment processing with webhook handling",
      "Built comprehensive admin dashboard with analytics",
      "Implemented inventory management with low-stock alerts",
      "Created responsive design with mobile-first approach",
      "Added advanced search and filtering capabilities"
    ]
  },
  {
    name: "Real-Time Chat Application",
    description:
      "Scalable real-time messaging application with group chats, file sharing, and online presence indicators. Built for high performance and reliability.",
    technologies: ["Socket.io", "React", "MongoDB", "Redis"],
    demo: "https://chat-app.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/realtime-chat",
    details: [
      "Implemented WebSocket connections for real-time messaging",
      "Added group chat functionality with admin controls",
      "Built file sharing with drag-and-drop interface",
      "Created online presence and typing indicators",
      "Integrated message encryption for security"
    ]
  },
  {
    name: "Task Management Dashboard",
    description:
      "Comprehensive project management tool with Kanban boards, team collaboration, and progress tracking. Designed for productivity and team coordination.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
    demo: "https://taskmanager.utkarshdeoli.in",
    github: "https://github.com/utkarshdeoli/task-manager",
    details: [
      "Built drag-and-drop Kanban board interface",
      "Implemented team collaboration with real-time updates",
      "Added project timeline and milestone tracking",
      "Created detailed analytics and progress reports",
      "Integrated notification system for task updates"
    ]
  }
];

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
];

export const services = [
  {
    name: "Full-Time Employment",
    emoji: "💼",
    price: "Open to Offers",
    type: "employment",
    description: "Looking for full-time opportunities as a Software Developer",
    features: [
      "Full Stack AI",
      "Full Stack Web",
      "Mobile Development",
      "DevOps",
    ],
  },
  {
    name: "Website Development",
    emoji: "🌐",
    price: "From $300",
    type: "website",
    description:
      "Custom websites and web applications built with modern technologies",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "CMS Integration",
    ],
  },
  {
    name: "Mobile App Development",
    emoji: "📱",
    price: "From $500",
    type: "mobile",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Flutter",
      "React Native",
      "App Publishing",
      "Payment Integration",
    ],
  },
  {
    name: "Embedded Development",
    emoji: "🔧",
    price: "From $200",
    type: "embedded",
    description:
      "IoT solutions and embedded systems using ESP32/ESP8266, Raspberry Pi and more",
    features: [
      "ESP32/ESP8266",
      "Remote Monitoring",
      "Real-time Data",
      "Automation",
    ],
  },
  {
    name: "AI Automation",
    emoji: "🤖",
    price: "From $500",
    type: "ai",
    description:
      "Intelligent automation solutions to streamline your workflows",
    features: [
      "Workflow Automation",
      "LLM Models",
      "API Integration",
      "Data Analysis",
    ],
  },
  {
    name: "AI Chatbots",
    emoji: "💬",
    price: "From $400",
    type: "chatbot",
    description: "Smart conversational AI powered by modern language models",
    features: [
      "Fully Customized",
      "Multi Lingual",
      "Voice to Voice",
      "Custom Training",
    ],
  },
  {
    name: "E-commerce Solutions",
    emoji: "🛒",
    price: "From $1,000",
    type: "ecommerce",
    description: "Complete online stores with payment processing and inventory",
    features: [
      "Payment Gateway",
      "Inventory Management",
      "Admin Dashboard",
      "Mobile Responsive",
    ],
  },
  {
    name: "App / Website Maintenance",
    emoji: "🎯",
    price: "From $8/hour",
    type: "consulting",
    description:
      "Ongoing support and maintenance for your applications and websites",
    features: [
      "Code Review",
      "SEO",
      "Performance Optimization",
      "Security Audits",
      "Bug Fixes",
    ],
  },
];

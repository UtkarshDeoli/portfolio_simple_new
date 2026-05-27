"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Download, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border-subtle/50">
      <div className="max-w-2xl mx-auto px-6 flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl text-foreground"
        >
          Utkarsh Deoli
        </motion.div>
        <div className="flex items-center gap-3">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground-muted hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
          <Button asChild variant="outline" size="sm" className="border-border text-foreground-muted bg-transparent hover:bg-background-secondary">
            <a href="https://drive.google.com/file/d/1tZvVWMhek2yleZh7_EYjeG20Bk6EA7A3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/50 py-8">
      <div className="max-w-2xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-subtle">© {new Date().getFullYear()} Utkarsh Deoli. Crafted with ❤️</p>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="text-foreground-muted hover:text-foreground">
            <a href="https://github.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground-muted hover:text-foreground">
            <a href="https://linkedin.com/in/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground-muted hover:text-foreground">
            <a href="https://twitter.com/utkarshdeoli" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground-muted hover:text-foreground">
            <a href="mailto:utkarsh.deoli@gmail.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nehal Ganesh Kulloli. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:nehalgk87@gmail.com">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

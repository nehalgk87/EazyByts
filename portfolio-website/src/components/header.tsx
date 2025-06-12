"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Nehal Kulloli</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <ModeToggle />
          <Button asChild>
            <Link href="/admin">Admin</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#about" className="transition-colors hover:text-foreground/80" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild>
              <Link href="/admin" onClick={toggleMenu}>
                Admin
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

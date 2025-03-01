"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Night Owls</span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="nav-link text-sm font-medium">
            Home
          </Link>
          <Link href="#about" className="nav-link text-sm font-medium">
            About
          </Link>
          <Link href="#projects" className="nav-link text-sm font-medium">
            Projects
          </Link>
          <Link href="#gallery" className="nav-link text-sm font-medium">
            Gallery
          </Link>
          <Link href="#contact" className="nav-link text-sm font-medium">
            Contact
          </Link>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary text-primary-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary text-primary-foreground mr-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}
          <button className="p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#gallery" className="text-sm font-medium" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


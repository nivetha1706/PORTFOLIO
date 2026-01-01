"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span>NIVETHA.R</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          <Link href="#skills" className="hover:text-primary transition-colors">
            Infrastructure
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Pipeline
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Connect
          </Link>
        </div>
      </div>
    </nav>
  )
}

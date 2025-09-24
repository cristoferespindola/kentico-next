'use client'

import Link from 'next/link'
import { useScroll } from '../../hooks/useScroll'
import ThemeToggle from '../ThemeToggle'

export default function Header() {
  const isScrolled = useScroll()

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Movies
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-white/90 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/movie" 
                className="text-white/90 hover:text-white transition-colors"
              >
                Movies
              </Link>
              <Link 
                href="/actors" 
                className="text-white/90 hover:text-white transition-colors"
              >
                Actors
              </Link>
              <Link 
                href="/api/preview" 
                className="text-white/90 hover:text-white transition-colors"
              >
                Preview
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

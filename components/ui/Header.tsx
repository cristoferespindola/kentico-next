"use client"

import Link from "next/link"
import { useScroll } from "../../hooks/useScroll"
import ThemeToggle from "../ThemeToggle"

interface Props {
  title: string
  navigation: {
    label: string
    href: string
  }[]
  preview?: boolean
  themeToggle?: boolean
  solid?: boolean
}

const NavigationItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-current/90 hover:text-current transition-colors hover:underline"
    >
      {label}
    </Link>
  )
}

export default function Header({
  title,
  navigation,
  preview,
  themeToggle,
  solid,
}: Props) {
  const isScrolled = useScroll()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[var(--header-height)] ${
        solid
          ? "bg-black/90 backdrop-blur-sm border-b border-gray-800 text-white"
          : isScrolled
            ? "bg-black/90 backdrop-blur-sm border-b border-gray-800 text-white"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 h-full">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-semibold text-current hover:text-current/90 transition-colors"
            >
              {title}
            </Link>
            <div className="flex items-center gap-4">
              {navigation.map((item) => (
                <NavigationItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
              {preview && (
                <NavigationItem href="/api/preview" label="Preview" />
              )}
            </div>
          </div>
          {themeToggle && <ThemeToggle />}
        </nav>
      </div>
    </header>
  )
}

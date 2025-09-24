"use client"

import { createContext, useContext } from "react"
import { useTheme } from "../../../hooks/useTheme"
import { THEME_CONFIG } from "../../../lib/theme-config"

interface ThemeContextType {
  theme: "light" | "dark" | "system"
  resolvedTheme: "light" | "dark"
  toggleTheme: () => void
  setLightTheme: () => void
  setDarkTheme: () => void
  setSystemTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeHook = useTheme()

  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}

export function useResolvedTheme() {
  const { resolvedTheme } = useThemeContext()
  return resolvedTheme
}

export function useThemeClasses() {
  const { resolvedTheme } = useThemeContext()

  return {
    background: resolvedTheme === "dark" ? "bg-background" : "bg-background",
    text:
      resolvedTheme === "dark" ? "text-on-background" : "text-on-background",
    surface: resolvedTheme === "dark" ? "bg-surface" : "bg-surface",
    border: resolvedTheme === "dark" ? "border-outline" : "border-outline",
    transition: `transition-colors duration-${THEME_CONFIG.transitionDuration.replace("ms", "")}`,
  }
}

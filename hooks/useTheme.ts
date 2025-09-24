"use client"

import { useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      setResolvedTheme(systemTheme)
    } else {
      root.classList.add(theme)
      setResolvedTheme(theme)
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        setResolvedTheme(systemTheme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(systemTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      switch (prev) {
        case "light":
          return "dark"
        case "dark":
          return "system"
        case "system":
          return "light"
        default:
          return "light"
      }
    })
  }, [])

  const setLightTheme = useCallback(() => setTheme("light"), [])
  const setDarkTheme = useCallback(() => setTheme("dark"), [])
  const setSystemTheme = useCallback(() => setTheme("system"), [])

  return {
    theme,
    resolvedTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  }
}

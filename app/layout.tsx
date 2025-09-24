import "./globals.css"
import type { ReactNode } from "react"
import Theme from "../components/ui/theme"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

export const metadata = {
  title: "Next 15 + Kontent Boilerplate",
  description: "Starter with Kentico Kontent headless CMS",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const nagivation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies",
    href: "/movies",
  },
  {
    label: "Actors",
    href: "/actors",
  },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-tertiary text-white transition-colors duration-200 w-full min-h-screen flex flex-col">
        <Theme>
          <Header title="Movies" navigation={nagivation} />
          <main className="flex-1">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}

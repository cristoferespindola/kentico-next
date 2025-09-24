import "./globals.css"
import type { ReactNode } from "react"
import Theme from "../components/theme/theme"
import Header from "../components/ui/Header"

export const metadata = {
  title: "Next 15 + Kontent Boilerplate",
  description: "Starter with Kentico Kontent headless CMS",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-black text-white transition-colors duration-200">
        <Theme>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
        </Theme>
      </body>
    </html>
  )
}

import { twMerge } from "tailwind-merge"

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main
      className={twMerge(`max-w-7xl mx-auto px-4 md:px-8 py-8 ${className}`)}
    >
      {children}
    </main>
  )
}

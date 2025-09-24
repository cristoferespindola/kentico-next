import { twMerge } from "tailwind-merge"

export default function Layout({
  children,
  className = "",
  separator = true,
}: {
  children: React.ReactNode
  className?: string
  separator?: boolean
}) {
  return (
    <div
      className={twMerge(
        "px-8 py-8 pt-[var(--header-height)] space-y-2",
        className
      )}
    >
      {separator && <div className="h-px w-full border-t border-white/10" />}
      {children}
    </div>
  )
}

import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

type Variant = "primary" | "secondary"
type Size = "small" | "medium" | "large"
type IconPosition = "left" | "right"
type Role = "button" | "link" | "tab"

type Props = {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactElement
  iconPosition?: IconPosition
  role?: Role
}

const Loading = () => {
  return (
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
  )
}

const ButtonContent = ({
  children,
  icon,
  iconPosition,
  variant,
  size,
  loading,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  iconPosition: IconPosition
  variant: Variant
  size: Size
  loading?: boolean
}) => {
  const iconClassName = twMerge(
    "ui-icon icon-md",
    iconPosition === "left" ? "mr-2" : "ml-2",
    variant === "primary" && "text-black",
    variant === "secondary" && "text-white",
    size === "small" && "icon-sm",
    size === "large" && "icon-xl"
  )

  const Icon = icon ? <span className={iconClassName}>{icon}</span> : null

  return (
    <>
      {iconPosition === "left" && Icon}
      {loading ? <Loading /> : children}
      {iconPosition === "right" && Icon}
    </>
  )
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  disabled,
  loading,
  icon,
  iconPosition = "right",
  role = "button",
}: Props) {
  const className = twMerge(
    "px-5 py-2 rounded-full transition-colors flex items-center cursor-pointer transition-colors",
    "duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap flex-shrink-0",
    variant === "primary" && "bg-white text-black hover:bg-white/80",
    variant === "secondary" &&
      "bg-black/20 text-white border border-white/30 hover:bg-white/90 hover:text-black",
    size === "small" && "px-3 py-1 text-sm",
    size === "large" && "px-8 py-3 text-lg"
  )

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        role={role}
        aria-disabled={disabled}
      >
        <ButtonContent
          children={children}
          icon={icon}
          iconPosition={iconPosition}
          variant={variant}
          size={size}
          loading={loading}
        />
      </Link>
    )
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      role={role}
    >
      <ButtonContent
        children={children}
        icon={icon}
        iconPosition={iconPosition}
        variant={variant}
        size={size}
        loading={loading}
      />
    </button>
  )
}

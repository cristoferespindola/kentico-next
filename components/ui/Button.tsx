import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactElement
  iconPosition?: "left" | "right"
  role?: "button" | "link" | "tab"
}

const ButtonContent = ({
  children,
  icon,
  iconPosition,
  variant,
  size,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  iconPosition: "left" | "right"
  variant: "primary" | "secondary"
  size: "small" | "medium" | "large"
}) => {
  const iconClassName = twMerge(
    'ui-icon icon-md',
    iconPosition === "left" ? "mr-2" : "ml-2",
    variant === "primary" && "text-black",
    variant === "secondary" && "text-white",
    size === "small" && "icon-sm",
    size === "large" && "icon-xl"
  )

  const Icon = icon ? (
    <span className={iconClassName}>
      {icon}
    </span>
  ) : null

  return (
    <>
      {iconPosition === "left" && Icon}
      {children}
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
}: Props) {
  const className = twMerge(
    "px-5 py-2 rounded-full transition-colors flex items-center",
    variant === "primary" && "bg-white text-black hover:bg-gray-200",
    variant === "secondary" &&
      "bg-black/20 text-white border border-white/30 hover:bg-black/30",
    size === "small" && "px-3 py-1 text-sm",
    size === "large" && "px-8 py-3 text-lg"
  )

  if (href) {
    return (
      <Link href={href} className={className}>
        <ButtonContent
          children={children}
          icon={icon}
          iconPosition={iconPosition}
          variant={variant}
          size={size}
        />
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <ButtonContent
        children={children}
        icon={icon}
        iconPosition={iconPosition}
        variant={variant}
        size={size}
      />
    </button>
  )
}

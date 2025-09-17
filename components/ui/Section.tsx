type Props = {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = "" }: Props) {
  return (
    <section className={`space-y-4 ${className}`}>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  )
}
import { Heading } from "./Typography"

type Props = {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = "" }: Props) {
  return (
    <section className={`space-y-4 ${className}`}>
      <Heading weight="semibold" size="xl">
        {title}
      </Heading>
      {children}
    </section>
  )
}

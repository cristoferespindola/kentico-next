import { Paragraph } from "./Typography"
import Container from "./Container"

export default function Footer() {
  return (
    <footer className="bg-tertiary text-primary border-t border-primary/90">
      <Container>
        <Paragraph size="sm" color="text-primary/50">
          &copy; {new Date().getFullYear()} Movies. All rights reserved.
        </Paragraph>
      </Container>
    </footer>
  )
}

import { Paragraph } from "./Typography"
import Container from "./Container"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <Paragraph size="sm" color="text-white/50">
          &copy; {new Date().getFullYear()} Movies. All rights reserved.
        </Paragraph>
      </Container>
    </footer>
  )
}

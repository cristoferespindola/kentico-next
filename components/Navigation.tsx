import Header from "./ui/Header"

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

export default function Navigation({ solid = false }: { solid?: boolean }) {
  return <Header title="Movies" navigation={nagivation} themeToggle={true} solid={solid} />
}

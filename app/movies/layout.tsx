import Layout from "../../components/ui/Layout"

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}

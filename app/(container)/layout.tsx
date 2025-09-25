import Navigation from "../../components/Navigation"
import Layout from "../../components/ui/Layout"

export default function ContainerLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Navigation solid={true} />
    <Layout>{children}</Layout> 
  </>
}
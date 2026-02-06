import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

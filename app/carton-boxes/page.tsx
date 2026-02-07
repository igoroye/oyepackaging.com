import { buildMetadata } from '@/lib/seo'
import { CartonBoxesContent } from './components/CartonBoxesContent'

export const metadata = buildMetadata('carton-boxes')

export default function CartonBoxesPage() {
  return <CartonBoxesContent />
}

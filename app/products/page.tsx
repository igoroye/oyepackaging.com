import { buildMetadata } from '@/lib/seo'
import { ProductsContent } from './components/ProductsContent'

export const metadata = buildMetadata('products')

export default function ProductsPage() {
  return <ProductsContent />
}

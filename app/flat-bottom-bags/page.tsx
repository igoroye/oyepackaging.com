import { buildMetadata } from '@/lib/seo'
import { ProductsContent } from '../products/components/ProductsContent'

export const metadata = buildMetadata('flat-bottom-bags')

export default function FlatBottomBagsPage() {
  return <ProductsContent />
}

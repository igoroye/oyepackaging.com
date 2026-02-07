import type { ProductConfig } from './types'
import { flatBottomBagsConfig } from './flat-bottom-bags'

const configs: Record<string, ProductConfig> = {
  'flat-bottom-bags': flatBottomBagsConfig,
}

export function getProductConfig(slug: string): ProductConfig | null {
  return configs[slug] ?? null
}

export function getAllProductSlugs(): string[] {
  return Object.keys(configs)
}

export type StepId = 'size' | 'material' | 'features' | 'touchAndFeel' | 'design' | 'quantity'
export type AddonId = 'testPrint' | 'photoshoot'
export type ActivePanelId = StepId | AddonId

export interface StepDefinition {
  id: StepId
  label: string
  enabled: boolean
  visible: boolean
}

export interface AddonDefinition {
  id: AddonId
  label: string
  enabled: boolean
  visible: boolean
}

export interface SizeOption {
  id: string
  weight: string
  dimensions: string
  enabled: boolean
}

export interface SeriesConfig {
  id: string
  label: string
  sizes: SizeOption[]
  aboutTitle: string
  aboutText: string
}

export interface CustomSizeConfig {
  enabled: boolean
  label: string
  aboutText: string
  priceText: string
  fields: { id: 'width' | 'height' | 'depth'; label: string; placeholder: string }[]
}

export interface SizeStepConfig {
  series: SeriesConfig[]
  customSize?: CustomSizeConfig
  defaultSeries: string
  defaultSize: string
  infoText: string
}

export interface MaterialOption {
  id: string
  tabLabel: string
  aboutTitle: string
  aboutText: string
  certificates: string[]
  sustainabilityRating: number
}

export interface MaterialStepConfig {
  materials: MaterialOption[]
  defaultMaterial: string
  infoText: string
}

export interface FeatureOption {
  id: string
  label: string
  enabled: boolean
  defaultSelected: boolean
}

export interface FeaturesStepConfig {
  features: FeatureOption[]
  selectionMode: 'multi' | 'single'
  infoText: string
}

export interface TouchAndFeelOption {
  id: string
  label: string
  icon: 'hand' | 'waves' | 'sparkles'
  enabled: boolean
  defaultSelected: boolean
  title: string
  description: string
  sustainabilityRating: number
  maxRating: number
  moqThreshold?: number
  moqWarningText?: string
  showMoqWarning: boolean
}

export interface TouchAndFeelStepConfig {
  options: TouchAndFeelOption[]
  selectionMode: 'single' | 'multi'
  infoText: string
}

export interface DesignColorOption {
  id: string
  label: string
}

export interface DesignTypeConfig {
  id: string
  label: string
  title: string
  description: string
  colorOptions?: DesignColorOption[]
}

export interface DesignStepConfig {
  types: DesignTypeConfig[]
  defaultType: string
  defaultColor: string
  infoText: string
}

export interface QuantityStepConfig {
  options: number[]
  allowCustom: boolean
  moq: number
  defaultQuantity: number
  helperText: string
  infoText: string
}

export interface TestPrintConfig {
  title: string
  description: string
  infoText: string
}

export interface PhotoshootPackage {
  id: string
  label: string
  tagline: string
  bullets: string[]
  whyItWorks: string
  images: string[]
}

export interface PhotoshootConfig {
  packages: PhotoshootPackage[]
  defaultPackage: string
  footnote: string
  infoText: string
}

export interface ProductConfig {
  slug: string
  title: string
  priceRange: { min: number; max: number; currency: string; perUnit: string }
  previewImage: string
  steps: StepDefinition[]
  addons: AddonDefinition[]
  size: SizeStepConfig
  material: MaterialStepConfig
  features: FeaturesStepConfig
  touchAndFeel: TouchAndFeelStepConfig
  design: DesignStepConfig
  quantity: QuantityStepConfig
  testPrint: TestPrintConfig
  photoshoot: PhotoshootConfig
}

export interface ConfiguratorSelections {
  series: string
  size: string
  customWidth: string
  customHeight: string
  customDepth: string
  material: string
  features: string[]
  touchAndFeel: string[]
  designType: string
  designColor: string
  quantity: number
  customQuantity: boolean
  testPrintEnabled: boolean
  testPrintDesigns: string[]
  photoshootEnabled: boolean
  photoshootPackage: string
}

export interface SubmitFormData {
  name: string
  company: string
  country: string
  email: string
  countryCode: string
  phone: string
  consent: boolean
}

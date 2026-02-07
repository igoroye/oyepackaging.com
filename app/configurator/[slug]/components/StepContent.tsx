import { useConfigurator } from '../context/ConfiguratorContext'
import { SizeStep } from './steps/SizeStep'
import { MaterialStep } from './steps/MaterialStep'
import { FeaturesStep } from './steps/FeaturesStep'
import { TouchAndFeelStep } from './steps/TouchAndFeelStep'
import { DesignStep } from './steps/DesignStep'
import { QuantityStep } from './steps/QuantityStep'
import { TestPrintAddon } from './addons/TestPrintAddon'
import { PhotoshootAddon } from './addons/PhotoshootAddon'

const panelComponents: Record<string, React.ComponentType> = {
  size: SizeStep,
  material: MaterialStep,
  features: FeaturesStep,
  touchAndFeel: TouchAndFeelStep,
  design: DesignStep,
  quantity: QuantityStep,
  testPrint: TestPrintAddon,
  photoshoot: PhotoshootAddon,
}

export function StepContent() {
  const { activePanel } = useConfigurator()
  const Component = panelComponents[activePanel]

  if (!Component) return null

  return (
    <div className="w-full">
      <Component />
    </div>
  )
}

'use client'

import { createContext, useContext, useReducer, useMemo, useCallback, type ReactNode } from 'react'
import type { ProductConfig, ConfiguratorSelections, ActivePanelId, StepId } from '../config/types'

interface ConfiguratorState {
  activePanel: ActivePanelId
  selections: ConfiguratorSelections
  visitedPanels: ActivePanelId[]
  modalOpen: boolean
  submitted: boolean
}

type Action =
  | { type: 'SET_ACTIVE_PANEL'; panelId: ActivePanelId }
  | { type: 'SET_SERIES'; series: string }
  | { type: 'SET_SIZE'; size: string }
  | { type: 'SET_CUSTOM_DIMENSION'; field: 'width' | 'height' | 'depth'; value: string }
  | { type: 'CLEAR_CUSTOM_SIZE' }
  | { type: 'SET_MATERIAL'; material: string }
  | { type: 'TOGGLE_FEATURE'; featureId: string }
  | { type: 'SET_TOUCH_AND_FEEL'; optionId: string }
  | { type: 'SET_DESIGN_TYPE'; designType: string }
  | { type: 'SET_DESIGN_COLOR'; color: string }
  | { type: 'SET_QUANTITY'; quantity: number; isCustom: boolean }
  | { type: 'SET_TEST_PRINT_ENABLED'; enabled: boolean }
  | { type: 'SET_PHOTOSHOOT_ENABLED'; enabled: boolean }
  | { type: 'SET_PHOTOSHOOT_PACKAGE'; packageId: string }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'SET_SUBMITTED' }

function addToVisited(visited: ActivePanelId[], panelId: ActivePanelId): ActivePanelId[] {
  return visited.includes(panelId) ? visited : [...visited, panelId]
}

function reducer(state: ConfiguratorState, action: Action): ConfiguratorState {
  switch (action.type) {
    case 'SET_ACTIVE_PANEL': {
      const visited = addToVisited(state.visitedPanels, state.activePanel)
      return { ...state, activePanel: action.panelId, visitedPanels: visited }
    }
    case 'SET_SERIES':
      return { ...state, selections: { ...state.selections, series: action.series } }
    case 'SET_SIZE':
      return { ...state, selections: { ...state.selections, size: action.size } }
    case 'SET_CUSTOM_DIMENSION': {
      const key = `custom${action.field.charAt(0).toUpperCase()}${action.field.slice(1)}` as
        'customWidth' | 'customHeight' | 'customDepth'
      return { ...state, selections: { ...state.selections, [key]: action.value } }
    }
    case 'CLEAR_CUSTOM_SIZE':
      return { ...state, selections: { ...state.selections, customWidth: '', customHeight: '', customDepth: '' } }
    case 'SET_MATERIAL':
      return { ...state, selections: { ...state.selections, material: action.material } }
    case 'TOGGLE_FEATURE': {
      const features = state.selections.features.includes(action.featureId)
        ? state.selections.features.filter(f => f !== action.featureId)
        : [...state.selections.features, action.featureId]
      return { ...state, selections: { ...state.selections, features } }
    }
    case 'SET_TOUCH_AND_FEEL':
      return { ...state, selections: { ...state.selections, touchAndFeel: [action.optionId] } }
    case 'SET_DESIGN_TYPE':
      return { ...state, selections: { ...state.selections, designType: action.designType } }
    case 'SET_DESIGN_COLOR':
      return { ...state, selections: { ...state.selections, designColor: action.color } }
    case 'SET_QUANTITY':
      return { ...state, selections: { ...state.selections, quantity: action.quantity, customQuantity: action.isCustom } }
    case 'SET_TEST_PRINT_ENABLED':
      return { ...state, selections: { ...state.selections, testPrintEnabled: action.enabled } }
    case 'SET_PHOTOSHOOT_ENABLED':
      return { ...state, selections: { ...state.selections, photoshootEnabled: action.enabled } }
    case 'SET_PHOTOSHOOT_PACKAGE':
      return { ...state, selections: { ...state.selections, photoshootPackage: action.packageId } }
    case 'OPEN_MODAL':
      return { ...state, modalOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false }
    case 'SET_SUBMITTED':
      return { ...state, submitted: true, modalOpen: false }
    default:
      return state
  }
}

function buildInitialState(config: ProductConfig): ConfiguratorState {
  const firstStep = config.steps.find(s => s.enabled && s.visible)
  return {
    activePanel: firstStep?.id ?? 'size',
    selections: {
      series: config.size.defaultSeries,
      size: config.size.defaultSize,
      customWidth: '',
      customHeight: '',
      customDepth: '',
      material: config.material.defaultMaterial,
      features: config.features.features.filter(f => f.defaultSelected && f.enabled).map(f => f.id),
      touchAndFeel: config.touchAndFeel.options.filter(o => o.defaultSelected && o.enabled).map(o => o.id),
      designType: config.design.defaultType,
      designColor: config.design.defaultColor,
      quantity: config.quantity.defaultQuantity,
      customQuantity: false,
      testPrintEnabled: false,
      testPrintDesigns: [],
      photoshootEnabled: false,
      photoshootPackage: config.photoshoot.defaultPackage,
    },
    visitedPanels: [],
    modalOpen: false,
    submitted: false,
  }
}

interface ConfiguratorContextValue {
  config: ProductConfig
  state: ConfiguratorState
  dispatch: React.Dispatch<Action>
  activePanel: ActivePanelId
  selections: ConfiguratorSelections
  visitedPanels: ActivePanelId[]
  canGoPrevious: boolean
  canGoNext: boolean
  isLastPanel: boolean
  goPrevious: () => void
  goNext: () => void
  openModal: () => void
  closeModal: () => void
  getStepSubtitle: (stepId: StepId) => string | null
}

const ConfiguratorCtx = createContext<ConfiguratorContextValue | null>(null)

export function useConfigurator() {
  const ctx = useContext(ConfiguratorCtx)
  if (!ctx) throw new Error('useConfigurator must be used within ConfiguratorProvider')
  return ctx
}

function getNavigationOrder(config: ProductConfig): ActivePanelId[] {
  const order: ActivePanelId[] = []
  for (const step of config.steps) {
    if (step.visible && step.enabled) order.push(step.id)
  }
  for (const addon of config.addons) {
    if (addon.visible && addon.enabled) order.push(addon.id)
  }
  return order
}

export function ConfiguratorProvider({ config, children }: { config: ProductConfig; children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, config, buildInitialState)

  const navOrder = useMemo(() => getNavigationOrder(config), [config])
  const currentIndex = navOrder.indexOf(state.activePanel)

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < navOrder.length - 1
  const isLastPanel = currentIndex === navOrder.length - 1

  const goPrevious = useCallback(() => {
    if (currentIndex > 0) dispatch({ type: 'SET_ACTIVE_PANEL', panelId: navOrder[currentIndex - 1] })
  }, [currentIndex, navOrder])

  const goNext = useCallback(() => {
    if (currentIndex < navOrder.length - 1) dispatch({ type: 'SET_ACTIVE_PANEL', panelId: navOrder[currentIndex + 1] })
  }, [currentIndex, navOrder])

  const openModal = useCallback(() => dispatch({ type: 'OPEN_MODAL' }), [])
  const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), [])

  const getStepSubtitle = useCallback((stepId: StepId): string | null => {
    const s = state.selections
    switch (stepId) {
      case 'size': {
        if (s.series === 'custom') {
          const hasDim = s.customWidth || s.customHeight || s.customDepth
          return hasDim ? 'CUSTOM SIZE' : 'CUSTOM SIZE'
        }
        const series = config.size.series.find(sr => sr.id === s.series)
        const size = series?.sizes.find(sz => sz.id === s.size)
        return series && size ? `${series.label} (${size.weight})` : null
      }
      case 'material': {
        const mat = config.material.materials.find(m => m.id === s.material)
        return mat ? mat.aboutTitle.replace('ABOUT ', '') : null
      }
      case 'features': {
        if (s.features.length === 0) return null
        if (s.features.length === 1) {
          const feat = config.features.features.find(f => f.id === s.features[0])
          return feat?.label ?? null
        }
        return 'MULTIPLE CHOICE'
      }
      case 'touchAndFeel': {
        if (s.touchAndFeel.length === 0) return null
        const opt = config.touchAndFeel.options.find(o => o.id === s.touchAndFeel[0])
        return opt?.label ?? null
      }
      case 'design': {
        const dt = config.design.types.find(t => t.id === s.designType)
        return dt?.label ?? null
      }
      case 'quantity':
        return s.quantity > 0 ? String(s.quantity) : null
    }
  }, [state.selections, config])

  const value = useMemo<ConfiguratorContextValue>(() => ({
    config,
    state,
    dispatch,
    activePanel: state.activePanel,
    selections: state.selections,
    visitedPanels: state.visitedPanels,
    canGoPrevious,
    canGoNext,
    isLastPanel,
    goPrevious,
    goNext,
    openModal,
    closeModal,
    getStepSubtitle,
  }), [config, state, canGoPrevious, canGoNext, isLastPanel, goPrevious, goNext, openModal, closeModal, getStepSubtitle])

  return <ConfiguratorCtx.Provider value={value}>{children}</ConfiguratorCtx.Provider>
}

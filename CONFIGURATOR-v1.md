# Configurator System v1 -- Technical Reference

## 1. System Overview

The Configurator is a single-page ordering application embedded within the OYE Packaging Next.js site. It allows customers to configure a packaging product step-by-step, optionally add services, then submit a request form.

**Key principles:**
- All data is hardcoded in TypeScript configuration objects -- no database required
- Every element (step, option, add-on) can be toggled via `enabled` / `visible` flags
- Selections persist across step navigation within a single session
- The final order payload is assembled in memory and logged to console (ready for webhook integration)

**Routes:**

| Route | Purpose |
|---|---|
| `/configurator` | Product selection page -- 4 cards in a grid |
| `/configurator/[slug]` | Product configurator (dynamic route per product) |

Currently only `flat-bottom-bags` has a full configuration. The architecture supports 4 products: `flat-bottom-bags`, `standup-bags`, `drip-bags`, `carton-boxes`.

---

## 2. File Structure

```
app/configurator/
  page.tsx                              # Product selection page (static)
  components/
    ConfiguratorContent.tsx              # Client component for product cards

  [slug]/
    page.tsx                            # Dynamic route entry (SSG via generateStaticParams)
    config/
      types.ts                          # All TypeScript interfaces
      flat-bottom-bags.ts               # Full config for Flat Bottom Bags
      index.ts                          # Registry: slug -> ProductConfig
    context/
      ConfiguratorContext.tsx            # React Context + useReducer state management
    components/
      ConfiguratorShell.tsx             # Root layout: 3-column grid + provider
      Stepper.tsx                       # Left panel: step buttons + add-ons + price
      ProductPreview.tsx                # Middle panel: product image
      StepContent.tsx                   # Right panel: routes activePanel -> component
      NavigationButtons.tsx             # PREVIOUS / NEXT / SUBMIT buttons
      InfoCard.tsx                      # Reusable icon + text card
      SubmitModal.tsx                   # Modal form + validation + success state
      steps/
        SizeStep.tsx
        MaterialStep.tsx
        FeaturesStep.tsx
        TouchAndFeelStep.tsx
        DesignStep.tsx
        QuantityStep.tsx
      addons/
        TestPrintAddon.tsx
        PhotoshootAddon.tsx
```

---

## 3. Architecture

### 3.1 Data Flow

```
ProductConfig (static data)
       |
       v
ConfiguratorProvider (React Context)
       |
       +-- state.activePanel    (which step/addon is visible)
       +-- state.selections     (all user choices)
       +-- state.modalOpen      (submit form visibility)
       +-- state.submitted      (success state)
       |
       v
Components read from context, dispatch actions to update state
```

### 3.2 Page Rendering

```
page.tsx (Server Component)
  |
  +-- getProductConfig(slug)    reads from config registry
  +-- passes config to:
       |
       ConfiguratorShell (Client Component, 'use client')
         |
         +-- ConfiguratorProvider wraps everything
         |
         +-- 3-column layout:
              [Stepper] [ProductPreview] [StepContent]
         |
         +-- SubmitModal (portal-like overlay)
```

### 3.3 Navigation Order

The navigation sequence is built from all enabled+visible steps, then all enabled+visible add-ons:

```
size -> material -> features -> touchAndFeel -> design -> quantity -> testPrint -> photoshoot
```

Disabling or hiding a step/addon removes it from this sequence. The context computes `canGoPrevious`, `canGoNext`, and `isLastPanel` from the current position in this array.

---

## 4. Configuration System (ProductConfig)

Every product configurator is driven by a single `ProductConfig` object. This is the central concept of the entire system.

### 4.1 Top-Level Structure

```typescript
interface ProductConfig {
  slug: string              // URL segment: 'flat-bottom-bags'
  title: string             // Display title: 'FLAT BOTTOM BAGS'
  priceRange: {
    min: number             // 0.45
    max: number             // 0.85
    currency: string        // '€'
    perUnit: string         // 'PER BAG'
  }
  previewImage: string      // Path to product preview image
  steps: StepDefinition[]   // Ordered list of 6 steps
  addons: AddonDefinition[] // Ordered list of add-ons
  size: SizeStepConfig
  material: MaterialStepConfig
  features: FeaturesStepConfig
  touchAndFeel: TouchAndFeelStepConfig
  design: DesignStepConfig
  quantity: QuantityStepConfig
  testPrint: TestPrintConfig
  photoshoot: PhotoshootConfig
}
```

### 4.2 Step/Addon Visibility Control

Every step and add-on has two boolean flags:

```typescript
interface StepDefinition {
  id: StepId        // 'size' | 'material' | 'features' | 'touchAndFeel' | 'design' | 'quantity'
  label: string     // Button text in stepper: 'SIZE', 'MATERIAL', etc.
  enabled: boolean  // true = clickable; false = shown but greyed out
  visible: boolean  // true = rendered; false = hidden entirely
}
```

| `visible` | `enabled` | Result |
|---|---|---|
| `false` | any | Step is completely hidden from stepper and navigation |
| `true` | `false` | Step button shown greyed out, not clickable, skipped in NEXT/PREVIOUS |
| `true` | `true` | Step is fully functional |

The same pattern applies to `AddonDefinition`.

---

## 5. Step Configuration -- Detailed Reference

### 5.1 SIZE Step

**Config interface: `SizeStepConfig`**

```typescript
interface SizeStepConfig {
  series: SeriesConfig[]    // Array of series (e.g., Slim, Medium, Wide)
  defaultSeries: string     // ID of pre-selected series on load
  defaultSize: string       // ID of pre-selected size on load
  infoText: string          // Text shown in the InfoCard at bottom
}
```

**Series structure:**

```typescript
interface SeriesConfig {
  id: string          // Unique key: 'slim', 'medium', 'wide'
  label: string       // Display: 'SLIM SERIES'
  sizes: SizeOption[] // Available sizes within this series
  aboutTitle: string  // Heading: 'ABOUT SLIM SERIES'
  aboutText: string   // Description paragraph
}
```

**Individual size option:**

```typescript
interface SizeOption {
  id: string          // '250g', '500g', etc.
  weight: string      // Display label: '250g'
  dimensions: string  // Display: '11,5 (W) x 23,5 (H) x 6,9 (D) cm'
  enabled: boolean    // false = shown greyed out
}
```

**UI behavior:**
- Radio buttons switch between series; switching series auto-selects the first enabled size
- Size options are a single-select list of pill buttons
- The "About" section dynamically shows content for the active series
- Stepper subtitle format: `SLIM SERIES (250g)`

**Current Flat Bottom Bags data:**
- 3 series: Slim (5 sizes), Medium (3 sizes), Wide (3 sizes)
- Default: Slim series, 250g

---

### 5.2 MATERIAL Step

**Config interface: `MaterialStepConfig`**

```typescript
interface MaterialStepConfig {
  materials: MaterialOption[]  // Array of material types
  defaultMaterial: string      // ID of pre-selected material
  infoText: string             // InfoCard text
}
```

**Material option:**

```typescript
interface MaterialOption {
  id: string                // 'performance', 'barrier'
  tabLabel: string          // Tab button text: 'ABOUT PERFORMANCE SERIES'
  aboutTitle: string        // Heading: 'ABOUT PERFORMANCE SERIES'
  aboutText: string         // Description paragraph
  certificates: string[]   // ['ISO 9001:2015', 'BRC Food Certificate']
  sustainabilityRating: number  // 0-5, shown as leaf icons
}
```

**UI behavior:**
- Tab buttons switch between materials (single-select)
- Certificate badges render as outlined pills
- Sustainability rating renders as 5 leaf icons (filled = rated, empty = unrated)
- Stepper subtitle format: `BARRIER SERIES` (derived from `aboutTitle` minus "ABOUT ")

**Current Flat Bottom Bags data:**
- 2 materials: Performance (rating 3, 1 cert), Barrier (rating 5, 2 certs)
- Default: Barrier

---

### 5.3 FEATURES Step

**Config interface: `FeaturesStepConfig`**

```typescript
interface FeaturesStepConfig {
  features: FeatureOption[]          // Array of feature toggles
  selectionMode: 'multi' | 'single' // Multi-select or single-select
  infoText: string                   // InfoCard text
}
```

**Feature option:**

```typescript
interface FeatureOption {
  id: string              // 'frontZipper', 'tearNotch', etc.
  label: string           // 'FRONT ZIPPER'
  enabled: boolean        // false = shown greyed out, not selectable
  defaultSelected: boolean // true = pre-selected on load (only if also enabled)
}
```

**UI behavior:**
- Chips with checkbox indicators (circle with checkmark when selected)
- Multi-select: clicking toggles on/off via `TOGGLE_FEATURE` action
- Disabled features show muted styling and are not clickable
- Stepper subtitle: single selection shows the label; 2+ selections shows `MULTIPLE CHOICE`

**Current Flat Bottom Bags data:**
- 5 features: TOP OPENING ZIPPER (disabled), FRONT ZIPPER (enabled, default), TEAR NOTCH, COFFEE VALVE, HANDLE (disabled)
- Mode: multi

---

### 5.4 TOUCH AND FEEL Step

**Config interface: `TouchAndFeelStepConfig`**

```typescript
interface TouchAndFeelStepConfig {
  options: TouchAndFeelOption[]       // Array of finish options
  selectionMode: 'single' | 'multi'  // Usually single-select
  aboutTitle: string                  // Heading for description section
  aboutText: string                   // Description paragraph
  infoText: string                    // InfoCard text
}
```

**Option:**

```typescript
interface TouchAndFeelOption {
  id: string
  label: string
  enabled: boolean
  defaultSelected: boolean
}
```

**UI behavior:**
- Pill buttons, single-select (replaces previous selection via `SET_TOUCH_AND_FEEL`)
- Shows "ABOUT {LABEL}" heading + description when an option is selected
- Stepper subtitle: selected option's label

**Current Flat Bottom Bags data:**
- 4 options: SOFT TOUCH (default), MATTE, GLOSS, PAPER FEEL
- Mode: single

---

### 5.5 DESIGN Step

**Config interface: `DesignStepConfig`**

```typescript
interface DesignStepConfig {
  types: DesignTypeConfig[]  // Design type options
  defaultType: string        // Pre-selected type ID
  defaultColor: string       // Pre-selected color ID (for types that have colors)
  infoText: string           // InfoCard text
}
```

**Design type:**

```typescript
interface DesignTypeConfig {
  id: string                          // 'singleColor', 'partiallyPrinted', 'fullyPrinted'
  label: string                       // Tab label: 'SINGLE COLOR'
  title: string                       // Content heading
  description: string                 // Content paragraph
  colorOptions?: DesignColorOption[]  // Optional nested options (only for some types)
}
```

**Color option (nested):**

```typescript
interface DesignColorOption {
  id: string    // 'black', 'white'
  label: string // 'BLACK', 'WHITE'
}
```

**UI behavior:**
- Tab buttons switch between design types (single-select)
- Each type shows its own title + description
- If the active type has `colorOptions`, a radio group "COLOR" appears in a bordered card
- Switching design type updates content; color persists independently
- Stepper subtitle: active type label

**Current Flat Bottom Bags data:**
- 3 types: SINGLE COLOR (with BLACK/WHITE colors), PARTIALLY PRINTED, FULLY PRINTED
- Default: singleColor, black

**Extension point:** The `colorOptions` field is optional per design type. Future types can add their own nested controls by extending `DesignTypeConfig` with additional optional fields and updating `DesignStep.tsx`.

---

### 5.6 QUANTITY Step

**Config interface: `QuantityStepConfig`**

```typescript
interface QuantityStepConfig {
  options: number[]       // Preset quantity buttons: [500, 1500, 2500, ...]
  allowCustom: boolean    // Show "CUSTOM AMOUNT" button
  moq: number             // Minimum order quantity for validation
  defaultQuantity: number // Pre-selected quantity on load
  helperText: string      // Text below buttons; supports {moq} placeholder
  infoText: string        // InfoCard text
}
```

**UI behavior:**
- Grid of preset quantity buttons (single-select)
- "CUSTOM AMOUNT" button toggles a number input + Apply button
- Custom amount validates: must be numeric, positive, >= MOQ
- Error message shown inline below input if validation fails
- `helperText` has `{moq}` replaced with the actual MOQ value at render time
- Stepper subtitle: the selected quantity as string

**Current Flat Bottom Bags data:**
- Presets: 500, 1500, 2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000
- MOQ: 1500
- Default: 20000
- Custom: allowed

---

## 6. Add-On Configuration

Add-ons appear after the 6 main steps in both the stepper and the navigation sequence. They use the same `enabled`/`visible` toggle pattern.

### 6.1 TEST PRINT Add-On

**Config interface: `TestPrintConfig`**

```typescript
interface TestPrintConfig {
  title: string        // Heading: 'SEE IT BEFORE YOU PRINT IT'
  description: string  // Description paragraph
  infoText: string     // InfoCard text
}
```

**UI behavior:**
- Checkbox toggle enables/disables the add-on
- When enabled, shows a design selector (currently hardcoded "Design 1")
- Content (title, description, info card) always visible regardless of toggle state
- Selection stored in `state.selections.testPrintEnabled`

### 6.2 PHOTOSHOOT Add-On

**Config interface: `PhotoshootConfig`**

```typescript
interface PhotoshootConfig {
  packages: PhotoshootPackage[]  // Available packages
  defaultPackage: string          // Pre-selected package ID
  footnote: string                // Footnote text
  infoText: string                // InfoCard text
}
```

**Package:**

```typescript
interface PhotoshootPackage {
  id: string          // 'starter', 'professional', 'socialMedia'
  label: string       // 'STARTER PACKAGE'
  tagline: string     // Italic subtext
  bullets: string[]   // "WHAT YOU GET" list items
  whyItWorks: string  // Text for the InfoCard
  images: string[]    // Thumbnail image URLs (placeholder, currently empty)
}
```

**UI behavior:**
- Package selector buttons (single-select); selecting any package auto-enables the add-on
- Shows tagline, bullet list, and a package-specific InfoCard
- Selection stored in `state.selections.photoshootPackage` and `photoshootEnabled`

**Current Flat Bottom Bags data:**
- 3 packages: Starter (4 bullets), Professional (5 bullets), Social Media (5 bullets)
- Default: starter

---

## 7. State Management

### 7.1 State Shape

```typescript
interface ConfiguratorState {
  activePanel: ActivePanelId      // Which step/addon is currently shown
  selections: ConfiguratorSelections
  modalOpen: boolean
  submitted: boolean
}

interface ConfiguratorSelections {
  series: string            // Selected series ID
  size: string              // Selected size ID
  material: string          // Selected material ID
  features: string[]        // Array of selected feature IDs
  touchAndFeel: string[]    // Array of selected T&F IDs (usually 1)
  designType: string        // Selected design type ID
  designColor: string       // Selected color ID
  quantity: number           // Selected quantity
  customQuantity: boolean   // Whether quantity was custom-entered
  testPrintEnabled: boolean
  testPrintDesigns: string[]
  photoshootEnabled: boolean
  photoshootPackage: string
}
```

### 7.2 Actions (Dispatch Types)

| Action | Fields | Effect |
|---|---|---|
| `SET_ACTIVE_PANEL` | `panelId` | Switch visible step/addon |
| `SET_SERIES` | `series` | Update selected series |
| `SET_SIZE` | `size` | Update selected size |
| `SET_MATERIAL` | `material` | Update selected material |
| `TOGGLE_FEATURE` | `featureId` | Add/remove feature from array |
| `SET_TOUCH_AND_FEEL` | `optionId` | Replace T&F selection (single-select) |
| `SET_DESIGN_TYPE` | `designType` | Update design type |
| `SET_DESIGN_COLOR` | `color` | Update design color |
| `SET_QUANTITY` | `quantity`, `isCustom` | Update quantity + custom flag |
| `SET_TEST_PRINT_ENABLED` | `enabled` | Toggle test print |
| `SET_PHOTOSHOOT_ENABLED` | `enabled` | Toggle photoshoot |
| `SET_PHOTOSHOOT_PACKAGE` | `packageId` | Select photoshoot package |
| `OPEN_MODAL` | -- | Show submit form |
| `CLOSE_MODAL` | -- | Hide submit form |
| `SET_SUBMITTED` | -- | Mark as submitted, close modal |

### 7.3 Initial State

Built from `ProductConfig` defaults:
- `activePanel` = first enabled+visible step
- Each selection field = the corresponding `default*` value from config
- Features/T&F = options where `defaultSelected && enabled`
- Modal closed, not submitted

### 7.4 Context Provided Values

| Value | Type | Description |
|---|---|---|
| `config` | `ProductConfig` | The full product configuration |
| `state` | `ConfiguratorState` | Current state |
| `dispatch` | `Dispatch<Action>` | Reducer dispatch |
| `activePanel` | `ActivePanelId` | Shortcut for `state.activePanel` |
| `selections` | `ConfiguratorSelections` | Shortcut for `state.selections` |
| `canGoPrevious` | `boolean` | Whether PREVIOUS button should show |
| `canGoNext` | `boolean` | Whether there's a next step |
| `isLastPanel` | `boolean` | True on the last step/addon (shows SUBMIT) |
| `goPrevious()` | `() => void` | Navigate to previous step |
| `goNext()` | `() => void` | Navigate to next step |
| `openModal()` | `() => void` | Open submit form |
| `closeModal()` | `() => void` | Close submit form |
| `getStepSubtitle(stepId)` | `(StepId) => string \| null` | Compute subtitle for stepper button |

---

## 8. Stepper Subtitles

The left-panel stepper buttons show a subtitle when the step has a selection. Subtitle logic per step:

| Step | Subtitle Format | Example |
|---|---|---|
| size | `{SERIES LABEL} ({SIZE WEIGHT})` | `SLIM SERIES (250g)` |
| material | `{ABOUT_TITLE minus "ABOUT "}` | `BARRIER SERIES` |
| features | 1 selected: label; 2+: `MULTIPLE CHOICE` | `FRONT ZIPPER` or `MULTIPLE CHOICE` |
| touchAndFeel | Selected option label | `SOFT TOUCH` |
| design | Selected type label | `SINGLE COLOR` |
| quantity | Quantity as string | `20000` |

Subtitles return `null` when no selection exists. The stepper only renders the subtitle span when the step is "filled" (has selection or is active).

---

## 9. Submit Modal

### 9.1 Form Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | Yes | |
| Company | text | No | |
| Country | dropdown | Yes | 20 European countries |
| Email | email | Yes | Regex validated |
| Country Code | dropdown | No | 12 codes (DE, AT, CH, etc.) |
| Phone | tel | No | |
| Consent | checkbox | Yes | Links to /privacy-policy |

### 9.2 Validation

Runs on submit click. Blocks submission if:
- Name empty
- Email empty or invalid format
- Country empty
- Consent unchecked

Errors shown inline below each field.

### 9.3 Payload Structure

On successful validation, the following object is assembled:

```typescript
{
  product: string          // config.slug
  productTitle: string     // config.title
  selections: {            // Full ConfiguratorSelections object
    series, size, material, features, touchAndFeel,
    designType, designColor, quantity, customQuantity,
    testPrintEnabled, testPrintDesigns,
    photoshootEnabled, photoshootPackage
  }
  customer: {              // Form data
    name, company, country, email, countryCode, phone, consent
  }
  submittedAt: string      // ISO timestamp
}
```

Currently logged to `console.log`. Ready for webhook integration (replace the `console.log` + `setTimeout` with a `fetch` call).

### 9.4 States

1. **Form** -- default state, shows inputs
2. **Loading** -- button shows "SENDING...", disabled
3. **Success** -- green checkmark, "REQUEST SENT!" message, CLOSE button

---

## 10. Layout and Responsiveness

### Desktop (lg+)

3-column flex layout:
- Left: Stepper (220-240px fixed width, sticky)
- Middle: ProductPreview (flex-1, max 420px, sticky)
- Right: StepContent (flex-1)

### Mobile/Tablet (<lg)

- Stepper hidden by default; toggleable via dropdown button ("Steps")
- Single column: Preview on top, StepContent below
- Modal becomes near-fullscreen with scrollable content

---

## 11. Adding a New Product

1. Create `app/configurator/[slug]/config/{product-slug}.ts`
2. Export a `ProductConfig` object following the exact same interface
3. Register it in `config/index.ts`:

```typescript
import { newProductConfig } from './{product-slug}'

const configs: Record<string, ProductConfig> = {
  'flat-bottom-bags': flatBottomBagsConfig,
  '{product-slug}': newProductConfig,   // add here
}
```

4. The route `/configurator/{product-slug}` will automatically work via `generateStaticParams`.
5. Add the slug to the product cards in `ConfiguratorContent.tsx` with `enabled: true`.

No component changes needed -- the same step components render all products based on their config.

---

## 12. Admin Toggle Reference

### Hiding an entire step

```typescript
steps: [
  { id: 'features', label: 'FEATURES', enabled: true, visible: false },
  //                                                    ^^^^^^^^^^^^^ hidden
]
```

### Disabling a step (shown but greyed out)

```typescript
steps: [
  { id: 'features', label: 'FEATURES', enabled: false, visible: true },
  //                                    ^^^^^^^^^^^^^^ disabled
]
```

### Disabling individual options within a step

```typescript
features: {
  features: [
    { id: 'handle', label: 'HANDLE', enabled: false, defaultSelected: false },
    //                                ^^^^^^^^^^^^^^ shown greyed out
  ]
}
```

### Hiding an add-on

```typescript
addons: [
  { id: 'photoshoot', label: 'PHOTOSHOOT', enabled: true, visible: false },
]
```

### Changing defaults

```typescript
size: {
  defaultSeries: 'medium',  // Change pre-selected series
  defaultSize: '500g',      // Change pre-selected size
}
```

### Disabling custom quantity

```typescript
quantity: {
  allowCustom: false,  // Hides "CUSTOM AMOUNT" button
}
```

---

## 13. Component Dependency Map

```
ConfiguratorShell
  +-- ConfiguratorProvider (context)
  +-- Stepper             (reads: config, activePanel, selections, getStepSubtitle)
  +-- ProductPreview      (reads: config.previewImage)
  +-- StepContent         (reads: activePanel -> renders matching component)
  |     +-- SizeStep           (reads/dispatches: series, size config)
  |     +-- MaterialStep       (reads/dispatches: material config)
  |     +-- FeaturesStep       (reads/dispatches: features config)
  |     +-- TouchAndFeelStep   (reads/dispatches: touchAndFeel config)
  |     +-- DesignStep         (reads/dispatches: design config)
  |     +-- QuantityStep       (reads/dispatches: quantity config)
  |     +-- TestPrintAddon     (reads/dispatches: testPrint config)
  |     +-- PhotoshootAddon    (reads/dispatches: photoshoot config)
  +-- SubmitModal         (reads: full state + config; dispatches: SET_SUBMITTED)
```

Every step/addon component follows the same pattern:
1. Call `useConfigurator()` to get config + selections + dispatch
2. Render controls from config data
3. Dispatch actions on user interaction
4. Include `<InfoCard>` with step-specific icon + text from config
5. Include `<NavigationButtons>` at the bottom

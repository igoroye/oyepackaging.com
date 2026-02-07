import { useState } from 'react'
import { X } from 'lucide-react'
import { useConfigurator } from '../context/ConfiguratorContext'
import type { SubmitFormData } from '../config/types'

const countries = [
  'Germany', 'Austria', 'Switzerland', 'Netherlands', 'Belgium',
  'France', 'Italy', 'Spain', 'Portugal', 'United Kingdom',
  'Poland', 'Czech Republic', 'Sweden', 'Norway', 'Denmark',
  'Finland', 'Ireland', 'Greece', 'Romania', 'Hungary',
]

const countryCodes = [
  { code: '+49', label: 'DE +49' },
  { code: '+43', label: 'AT +43' },
  { code: '+41', label: 'CH +41' },
  { code: '+31', label: 'NL +31' },
  { code: '+32', label: 'BE +32' },
  { code: '+33', label: 'FR +33' },
  { code: '+39', label: 'IT +39' },
  { code: '+34', label: 'ES +34' },
  { code: '+44', label: 'UK +44' },
  { code: '+48', label: 'PL +48' },
  { code: '+46', label: 'SE +46' },
  { code: '+45', label: 'DK +45' },
]

const initialForm: SubmitFormData = {
  name: '',
  company: '',
  country: 'Germany',
  email: '',
  countryCode: '+49',
  phone: '',
  consent: false,
}

export function SubmitModal() {
  const { state, closeModal, config, selections, dispatch } = useConfigurator()
  const [form, setForm] = useState<SubmitFormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof SubmitFormData, string>>>({})

  if (!state.modalOpen) return null

  const updateField = <K extends keyof SubmitFormData>(key: K, value: SubmitFormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof SubmitFormData, string>> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.country) e.country = 'Country is required'
    if (!form.consent) e.consent = 'You must accept the privacy policy'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)

    const payload = {
      product: config.slug,
      productTitle: config.title,
      selections,
      customer: form,
      submittedAt: new Date().toISOString(),
    }

    console.log('Order payload:', payload)

    await new Promise(r => setTimeout(r, 1000))

    setLoading(false)
    dispatch({ type: 'SET_SUBMITTED' })
  }

  if (state.submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={closeModal}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center" onClick={e => e.stopPropagation()}>
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-xl text-text mb-2">
            REQUEST SENT!
          </h2>
          <p className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280] mb-6">
            Thank you for your request. Our team will review your configuration and get back to you shortly.
          </p>
          <button
            onClick={closeModal}
            className="px-6 py-3 rounded-full bg-[#264eab] text-white [font-family:'Inter',Helvetica] font-medium text-sm hover:bg-[#1d3d8a] transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    )
  }

  const inputClass = (field: keyof SubmitFormData) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-400' : 'border-[#e5e7eb]'} focus:border-[#264eab] focus:outline-none [font-family:'Inter',Helvetica] text-sm`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={closeModal}>
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-xl text-text">
              READY TO TRY?
            </h2>
            <p className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280] mt-1">
              SEND US YOUR REQUEST!
            </p>
          </div>
          <button onClick={closeModal} className="p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors">
            <X className="w-5 h-5 text-[#6b7280]" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div>
            <input type="text" placeholder="Name *" value={form.name} onChange={e => updateField('name', e.target.value)} className={inputClass('name')} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <input type="text" placeholder="Company" value={form.company} onChange={e => updateField('company', e.target.value)} className={inputClass('company')} />

          <div>
            <select value={form.country} onChange={e => updateField('country', e.target.value)} className={inputClass('country')}>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
          </div>

          <div>
            <input type="email" placeholder="Email *" value={form.email} onChange={e => updateField('email', e.target.value)} className={inputClass('email')} />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="flex gap-2">
            <select value={form.countryCode} onChange={e => updateField('countryCode', e.target.value)} className="w-[110px] px-3 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#264eab] focus:outline-none [font-family:'Inter',Helvetica] text-sm">
              {countryCodes.map(cc => <option key={cc.code} value={cc.code}>{cc.label}</option>)}
            </select>
            <input type="tel" placeholder="Phone" value={form.phone} onChange={e => updateField('phone', e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#264eab] focus:outline-none [font-family:'Inter',Helvetica] text-sm" />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={form.consent} onChange={e => updateField('consent', e.target.checked)} className="w-4 h-4 mt-0.5 accent-[#264eab]" />
            <span className="[font-family:'Inter',Helvetica] text-xs text-[#6b7280] leading-relaxed">
              I consent to processing of my personal data in accordance with{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#264eab] underline">
                OYE! Packaging Privacy Policy
              </a>
            </span>
          </label>
          {errors.consent && <p className="text-xs text-red-500 -mt-2">{errors.consent}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-[#264eab] text-white [font-family:'Inter',Helvetica] font-medium text-sm hover:bg-[#1d3d8a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </div>
    </div>
  )
}

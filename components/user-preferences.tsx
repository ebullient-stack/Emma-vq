'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

export function UserPreferences() {
  const [isOpen, setIsOpen] = useState(false)
  const [currency, setCurrency] = useState('UGX (USh)')
  const [location, setLocation] = useState('Uganda')
  const [priceUpdates, setPriceUpdates] = useState('daily')
  const [autoDetect, setAutoDetect] = useState(false)

  // Ref for dropdown
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Map country -> currency
  const countryToCurrency: Record<string, string> = {
    Uganda: 'UGX (USh)',
    Kenya: 'KES (Ksh)',
    Tanzania: 'TZS (TSh)',
    Rwanda: 'RWF (Fr)',
    Ethiopia: 'ETB (Br)',
    'South Sudan': 'SSP (£)'
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Update currency when country changes
  useEffect(() => {
    if (!autoDetect) {
      setCurrency(countryToCurrency[location])
    }
  }, [location])

  // Auto-detect location & currency
  useEffect(() => {
    if (autoDetect) {
      const localeCountry = Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1] || 'UG'
      const countryMap: Record<string, string> = {
        UG: 'Uganda',
        KE: 'Kenya',
        TZ: 'Tanzania',
        RW: 'Rwanda',
        ET: 'Ethiopia',
        SS: 'South Sudan'
      }
      const detectedCountry = countryMap[localeCountry] || 'Uganda'
      setLocation(detectedCountry)
      setCurrency(countryToCurrency[detectedCountry])
    }
  }, [autoDetect])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1"
        title="User Preferences"
      >
        <Settings className="w-5 h-5 text-foreground" />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg p-6 z-50"
        >
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">User Preferences</h3>
              <p className="text-xs text-muted-foreground">Customize your experience</p>
            </div>

            {/* Currency */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {Object.values(countryToCurrency).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {Object.keys(countryToCurrency).map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Market Price Updates */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-3">Market Price Updates</label>
              <div className="space-y-2">
                {['real-time', 'daily', 'weekly', 'never'].map((value) => (
                  <label key={value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="priceUpdates"
                      value={value}
                      checked={priceUpdates === value}
                      onChange={(e) => setPriceUpdates(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-foreground">{value.replace('-', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Auto-detect */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoDetect}
                onChange={(e) => setAutoDetect(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">Auto-detect location & currency</span>
            </label>

            {/* Save Button */}
            <Button
              onClick={() => {
                console.log('[v1] Preferences saved:', { currency, location, priceUpdates, autoDetect })
                setIsOpen(false)
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Preferences
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
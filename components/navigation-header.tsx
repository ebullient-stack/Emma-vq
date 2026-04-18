'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, ChevronDown } from 'lucide-react'
import { UserPreferences } from './user-preferences'

const productCategories = [
  'Flowers',
  'Grains & Cereals',
  'Seeds & Seedlings',
  'Coffee & Tea',
  'Agro Machinery',
  'Maize and Livestock',
  'Fish and Seafood',
  'Processed and Agro Products',
  'Fruits & Vegetables',
  'Herbs & Spices',
  'Fertilizers',
  'Nuts & Seeds',
]

export function NavigationHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Toggle desktop dropdown
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  // Toggle mobile dropdown
  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu)
  }

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            FARM TRIDGE
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6">

            {/* PRODUCTS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className="text-sm font-medium flex items-center gap-1 hover:text-primary"
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === 'products' && (
                <div className="absolute left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4">
                  <h3 className="font-bold mb-3">Browse Products</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {productCategories.map((category) => (
                      <Link
                        key={category}
                        href={`/products?category=${encodeURIComponent(category.toLowerCase())}`}
                        className="text-sm hover:text-primary"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AGRI FINANCE LINK */}
            <Link
              href="/agri-finance-1"
              className="text-sm font-medium hover:text-primary flex items-center gap-1"
            >
              Agri Finance
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-sm font-medium flex items-center gap-1 hover:text-primary"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4">
                  <Link href="/sourcing-solutions-1" className="block text-sm py-1 hover:text-primary">
                    Sourcing Solutions
                  </Link>
                  <Link href="/market-intelligence-1" className="block text-sm py-1 hover:text-primary">
                    Market Intelligence
                  </Link>
                  <Link href="/cross-border-trade-1" className="block text-sm py-1 hover:text-primary">
                    Cross-Border Trade
                  </Link>
                  <Link href="/logistics-1" className="block text-sm py-1 hover:text-primary">
                    Logistics
                  </Link>
                </div>
              )}
            </div>

            <Link href="/suppliers" className="text-sm font-medium hover:text-primary">
              Suppliers
            </Link>
            <Link href="/insights" className="text-sm font-medium hover:text-primary">
              Insights
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <Link href="/post-ad">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Post Ad
            </Button>
          </Link>

          <UserPreferences />

          <Link href="/login">
            <Button variant="ghost">Log In</Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 space-y-3">

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('products')}
              className="w-full flex justify-between items-center text-sm font-medium hover:text-primary"
            >
              Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen === 'products' ? 'rotate-180' : ''}`} />
            </button>
            {mobileDropdownOpen === 'products' && (
              <div className="mt-2 pl-4 space-y-1">
                {productCategories.map((category) => (
                  <Link
                    key={category}
                    href={`/products?category=${encodeURIComponent(category.toLowerCase())}`}
                    className="block text-sm hover:text-primary"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Agri Finance Link */}
          <Link href="/agri-finance-1" className="block text-sm font-medium">
            Agri Finance
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('services')}
              className="w-full flex justify-between items-center text-sm font-medium hover:text-primary"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileDropdownOpen === 'services' && (
              <div className="mt-2 pl-4 space-y-1">
                <Link href="/sourcing-solutions-1" className="block text-sm hover:text-primary">
                  Sourcing Solutions
                </Link>
                <Link href="/market-intelligence-1" className="block text-sm hover:text-primary">
                  Market Intelligence
                </Link>
                <Link href="/cross-border-trade-1" className="block text-sm hover:text-primary">
                  Cross-Border Trade
                </Link>
                <Link href="/logistics-1" className="block text-sm hover:text-primary">
                  Logistics
                </Link>
              </div>
            )}
          </div>

          <Link href="/suppliers" className="block text-sm font-medium">Suppliers</Link>
          <Link href="/insights" className="block text-sm font-medium">Insights</Link>
          <Link href="/about" className="block text-sm font-medium">About</Link>
        </div>
      )}
    </nav>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, User, Home } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">ASTERIC EAST AFRICA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search East African products..."
              className="pl-10 bg-muted/50 border-none"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {/* Home button at the top */}
          <div className="border-b py-4">
            <Link
              href="/"
              className="flex items-center px-4 py-2 text-primary font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
          </div>

          <div className="border-b py-4">
            <h3 className="px-4 text-lg font-medium mb-2">Products</h3>
            <nav className="space-y-1">
              <Link
                href="/products?category=coffee"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Coffee & Tea
              </Link>
              <Link
                href="/products?category=fruits"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Fruits
              </Link>
              <Link
                href="/products?category=vegetables"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Vegetables
              </Link>
              <Link
                href="/products?category=grains"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Grains & Cereals
              </Link>
              <Link
                href="/products?category=livestock"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Livestock & Dairy
              </Link>
              <Link
                href="/products?category=spices"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Spices & Herbs
              </Link>
            </nav>
          </div>

          <div className="border-b py-4">
            <h3 className="px-4 text-lg font-medium mb-2 text-green-700">Agri Finance</h3>
            <nav className="space-y-1">
              <Link
                href="/agri-finance"
                className="block px-4 py-2 text-green-600 font-medium hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                All Finance Options
              </Link>
              <Link
                href="/agri-finance?type=crop-loans"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Crop Loans
              </Link>
              <Link
                href="/agri-finance?type=equipment-finance"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Equipment Finance
              </Link>
              <Link
                href="/agri-finance?type=livestock-loans"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Livestock Loans
              </Link>
              <Link
                href="/agri-finance?type=insurance"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Crop Insurance
              </Link>
              <Link
                href="/agri-finance?type=microfinance"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Microfinance
              </Link>
            </nav>
          </div>

          <div className="border-b py-4">
            <h3 className="px-4 text-lg font-medium mb-2">Hire</h3>
            <nav className="space-y-1">
              <Link
                href="/hire/machinery"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Agro Machinery
              </Link>
              <Link
                href="/hire/tools"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Tools & Equipment
              </Link>
              <Link
                href="/hire/land"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Fields & Land
              </Link>
              <Link
                href="/hire/workers"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Farm Workers
              </Link>
            </nav>
          </div>

          <div className="border-b py-4">
            <h3 className="px-4 text-lg font-medium mb-2">Services</h3>
            <nav className="space-y-1">
              <Link
                href="/services/sourcing"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Sourcing Solutions
              </Link>
              <Link
                href="/services/market-intelligence"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Market Intelligence
              </Link>
              <Link
                href="/cross-border"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Cross-Border Trade
              </Link>
              <Link
                href="/services/logistics"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Logistics
              </Link>
            </nav>
          </div>

          <nav className="space-y-1 py-4">
            <Link
              href="/vendors"
              className="block px-4 py-2 text-muted-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Suppliers
            </Link>
            <Link
              href="/for-suppliers"
              className="block px-4 py-2 text-muted-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              For Suppliers
            </Link>
            <Link
              href="/for-buyers"
              className="block px-4 py-2 text-muted-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              For Buyers
            </Link>
            <Link
              href="/insights"
              className="block px-4 py-2 text-muted-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-muted-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/post-ad"
              className="block px-4 py-2 text-primary font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Post Ad
            </Link>
          </nav>

          <div className="border-t py-4">
            <div className="flex items-center px-4 mb-2">
              <User className="h-5 w-5 mr-2" />
              <h3 className="text-lg font-medium">Account</h3>
            </div>
            <nav className="space-y-1">
              <Link
                href="/login"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-muted-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

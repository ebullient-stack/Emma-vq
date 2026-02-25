"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MobileMenu from "@/components/mobile-menu"
import { UserPreferencesDropdown } from "@/components/user-preferences-dropdown"
import { Search, X } from "lucide-react"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileMenu />

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">ASTERIC</span>
        </Link>

        <div className="hidden md:flex flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/products"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Browse All Products</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our extensive catalog of East African agricultural products.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/products?category=coffee" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Coffee & Tea</NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=fruits" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Fruits</NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=vegetables" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Vegetables</NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=grains" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Grains & Cereals
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=livestock" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Livestock & Dairy
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=spices" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Spices & Herbs</NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Agri Finance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                          href="/agri-finance"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-green-900">Agricultural Finance</div>
                          <p className="text-sm leading-tight text-green-700">
                            Access loans, insurance, and financial solutions tailored for East African farmers and
                            agribusinesses.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/agri-finance?type=crop-loans"
                        >
                          <div className="text-sm font-medium leading-none">Crop Loans</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Seasonal financing for crop production
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/agri-finance?type=equipment-finance"
                        >
                          <div className="text-sm font-medium leading-none">Equipment Finance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Loans for agricultural machinery and tools
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/agri-finance?type=livestock-loans"
                        >
                          <div className="text-sm font-medium leading-none">Livestock Loans</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Financing for livestock and dairy farming
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/agri-finance?type=insurance"
                        >
                          <div className="text-sm font-medium leading-none">Crop Insurance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Protect your crops against weather risks
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/agri-finance?type=microfinance"
                        >
                          <div className="text-sm font-medium leading-none">Microfinance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Small loans for smallholder farmers
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services/sourcing"
                        >
                          <div className="text-sm font-medium leading-none">Sourcing Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Find reliable East African suppliers for your agricultural needs.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services/market-intelligence"
                        >
                          <div className="text-sm font-medium leading-none">Market Intelligence</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Access data-driven insights on East African agricultural markets.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/cross-border"
                        >
                          <div className="text-sm font-medium leading-none">Cross-Border Trade</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Simplified solutions for trading across East African borders.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services/logistics"
                        >
                          <div className="text-sm font-medium leading-none">Logistics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            End-to-end logistics solutions for agricultural products.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/vendors" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Suppliers</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/insights" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Insights</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {showSearch ? (
            <div className="relative flex-1 max-w-sm">
              <Input type="search" placeholder="Search East African products..." className="pr-10" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button size="sm" variant="default" className="hidden md:flex" asChild>
            <Link href="/post-ad">Post Ad</Link>
          </Button>

          <UserPreferencesDropdown />

          <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" className="hidden md:flex" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

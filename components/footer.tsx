import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">ASTERIC</h3>
            <p className="text-muted-foreground mb-4">
              Connecting global buyers and suppliers in the food and agriculture industry.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=fruits" className="text-muted-foreground hover:text-foreground">
                  Fruits & Vegetables
                </Link>
              </li>
              <li>
                <Link href="/products?category=grains" className="text-muted-foreground hover:text-foreground">
                  Grains & Cereals
                </Link>
              </li>
              <li>
                <Link href="/products?category=coffee" className="text-muted-foreground hover:text-foreground">
                  Coffee & Tea
                </Link>
              </li>
              <li>
                <Link href="/products?category=nuts" className="text-muted-foreground hover:text-foreground">
                  Nuts & Seeds
                </Link>
              </li>
              <li>
                <Link href="/products?category=seafood" className="text-muted-foreground hover:text-foreground">
                  Seafood
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/sourcing" className="text-muted-foreground hover:text-foreground">
                  Sourcing Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/market-intelligence" className="text-muted-foreground hover:text-foreground">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/fulfillment" className="text-muted-foreground hover:text-foreground">
                  Fulfillment Services
                </Link>
              </li>
              <li>
                <Link href="/services/quality-control" className="text-muted-foreground hover:text-foreground">
                  Quality Control
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Asteric. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

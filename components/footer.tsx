'use client'

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-background">
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <h4 className="font-bold text-lg text-white">FARM TRIDGE</h4>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Connecting agricultural suppliers and buyers across East Africa and beyond. Your trusted partner in global agricultural trade.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/products" className="hover:text-white transition">Browse Products</a></li>
                <li><a href="/suppliers" className="hover:text-white transition">Find Suppliers</a></li>
                <li><a href="/signup/supplier" className="hover:text-white transition">Become a Supplier</a></li>
                <li><a href="/insights" className="hover:text-white transition">Market Insights</a></li>
                <li><a href="/hire-categories" className="hover:text-white transition">Hire Services</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/sourcing-solutions-1" className="hover:text-white transition">Sourcing Solutions</a></li>
                <li><a href="/logistics-1" className="hover:text-white transition">Logistics</a></li>
                <li><a href="/cross-border-trade-1" className="hover:text-white transition">Cross-border Trade</a></li>
                <li><a href="/agri-finance-1" className="hover:text-white transition">Agri Finance</a></li>
                <li><a href="/market-intelligence-1" className="hover:text-white transition">Market Intelligence</a></li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="font-bold text-white mb-4">Partners</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/become-partner-1" className="hover:text-white transition">Become a Partner</a></li>
                <li><a href="/workers" className="hover:text-white transition">Hire Farm Workers</a></li>
                <li><a href="/signup/worker" className="hover:text-white transition">Register as Worker</a></li>
                <li><a href="/support" className="hover:text-white transition">Support & Contact</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-500" />
                  <span>info@farmtridge.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>+256 753 934 803</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Kampala, Uganda<br />East Africa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-500 text-sm mb-4 md:mb-0">
                <p>&copy; 2026 FARM TRIDGE. All rights reserved.</p>
              </div>

              <div className="flex gap-6 text-slate-500 text-sm">
                <a href="/privacy-policy-1" className="hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition">Terms</a>
                <a href="#" className="hover:text-white transition">Accessibility</a>
                <a href="/support" className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

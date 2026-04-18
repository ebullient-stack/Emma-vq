'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Landmark, DollarSign, TrendingUp, Shield, PiggyBank, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export function FinancingOptionsSection() {
  const loanOptions = [
    {
      icon: DollarSign,
      title: 'Loans & Credit',
      description: 'Access to various loan products and credit facilities for agricultural businesses.',
      options: [
        'AgriBankFarm Loans',
        'Rural Development Credit',
        'Sustainable Farming Credit'
      ]
    },
    {
      icon: Landmark,
      title: 'Government Programs',
      description: 'Government-backed agricultural support and subsidy programs.',
      options: [
        'Agricultural Development Program',
        'Crop Insurance Subsidy',
        'Agricultural Tax Incentives'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investors & Grants',
      description: 'Investment opportunities and grants for agricultural projects.',
      options: [
        'AgriVenture Capital',
        'Sustainable Farming Grant',
        'AgriCrowd Platform'
      ]
    }
  ]

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-border pb-4">
          <button className="text-sm font-medium text-foreground pb-4 border-b-2 border-primary">
            Loans & Credit
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground pb-4">
            Government Programs
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground pb-4">
            Investors & Grants
          </button>
        </div>

        {/* Financing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Loans & Credit */}
          <Card className="border border-border">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <Landmark className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-foreground">AgriBankFarm Loans</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Equity investment for high-growth agricultural businesses</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interest Rate</span>
                  <span className="font-semibold text-foreground">4.5% - 6.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Loan Amount</span>
                  <span className="font-semibold text-foreground">$250k - $5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equity Stake</span>
                  <span className="font-semibold text-foreground">10% - 30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target Business</span>
                  <span className="font-semibold text-foreground">Scaling agribusinesses</span>
                </div>
              </div>
              <Link href="/loan-application">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  Apply Now →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 2 - Government Programs */}
          <Card className="border border-border">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <PiggyBank className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Agricultural Development Program</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Non-Repayable grants for sustainable agricultural practices</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subsidy Rate</span>
                  <span className="font-semibold text-foreground">Up to 65% of premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grant Amount</span>
                  <span className="font-semibold text-foreground">$5k - $50k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coverage</span>
                  <span className="font-semibold text-foreground">Multiple peril coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus Areas</span>
                  <span className="font-semibold text-foreground">Water, soil, biodiversity</span>
                </div>
              </div>
              <Link href="/loan-application">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  Apply for Grant →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 3 - Investors & Grants */}
          <Card className="border border-border">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Government Program Eligibility</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Tax benefits and deductions for qualifying agricultural operations</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Benefit Type</span>
                  <span className="font-semibold text-foreground">Tax deductions & credits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Eligible Expenses</span>
                  <span className="font-semibold text-foreground">Equipment, land, operations</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Filing Period</span>
                  <span className="font-semibold text-foreground">Annual tax season</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Documentation</span>
                  <span className="font-semibold text-foreground">Expense records required</span>
                </div>
              </div>
              <Link href="/loan-application">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  Check Eligibility →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Risk Management Tools Section */}
        <div className="mt-12 p-8 bg-muted rounded-lg border border-border">
          <div className="flex items-start gap-6">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-foreground mb-2">Risk Management Tools</h3>
              <p className="text-muted-foreground mb-4">
                Explore comprehensive risk management tools and strategies to protect your agricultural investment.
              </p>
              <Link href="/loan-application">
                <Button variant="outline" className="text-primary">
                  Explore Tools →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

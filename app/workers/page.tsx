'use client'

import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function WorkersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    country: 'All Countries',
    skills: 'All Skills',
  })

  return (
    <>
      <NavigationHeader />
      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/hire-categories" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back to Hire Categories
          </Link>

          {/* Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Hire Farm Workers</h1>
              <p className="text-lg text-muted-foreground">
                Find and hire skilled farm workers for seasonal or permanent work
              </p>
              <p className="text-sm text-muted-foreground mt-2">0 verified workers available</p>
            </div>
            <Link href="/signup/worker">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Register as Worker
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Search by name or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={filters.country}
              onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="All Countries">All Countries</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
            </select>
            <select
              value={filters.skills}
              onChange={(e) => setFilters(prev => ({ ...prev, skills: e.target.value }))}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="All Skills">All Skills</option>
              <option value="Crop Planting">Crop Planting</option>
              <option value="Livestock">Livestock</option>
              <option value="Equipment">Equipment Operation</option>
            </select>
          </div>

          {/* Empty State */}
          <Card className="border border-border">
            <CardContent className="py-16 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No workers found</h3>
              <p className="text-muted-foreground mb-6">
                No verified farm workers are currently registered
              </p>
              <Link href="/signup/worker">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Register as Farm Worker
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

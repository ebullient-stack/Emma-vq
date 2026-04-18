'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface InsightCardProps {
  title: string
  description: string
  trend: 'up' | 'down'
  percentage: number
  category: string
}

export function InsightCard({ title, description, trend, percentage, category }: InsightCardProps) {
  const isUp = trend === 'up'
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{category}</p>
          </div>
          {isUp ? (
            <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2">
          <span className={`text-lg font-bold ${isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isUp ? '+' : '-'}{percentage}%
          </span>
          <span className="text-xs text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

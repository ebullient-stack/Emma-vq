import { Skeleton } from "@/components/ui/skeleton"

export default function MarketIntelligenceLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-96 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      <div className="mb-8">
        <Skeleton className="h-12 w-full max-w-2xl mx-auto mb-8" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <Skeleton className="h-8 w-8 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <div className="space-y-2 mb-4">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="flex justify-between">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

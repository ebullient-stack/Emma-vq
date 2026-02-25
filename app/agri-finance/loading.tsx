import { Skeleton } from "@/components/ui/skeleton"

export default function AgriFinanceLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-3/4 max-w-xl mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
      </div>

      <div className="w-full max-w-2xl mx-auto mb-8">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <div className="space-y-2 py-4">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="flex justify-between">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>

      <Skeleton className="h-32 w-full rounded-lg mb-16" />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <Skeleton className="h-48 md:h-64 w-full" />
            <div className="p-6 space-y-4 border border-t-0 rounded-b-xl">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-1/2" />
            </div>
          </div>
        ))}
      </div>

      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  )
}

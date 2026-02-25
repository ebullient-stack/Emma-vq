import { Skeleton } from "@/components/ui/skeleton"

export default function TransportHireLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Skeleton className="h-4 w-24" />
      </div>

      <Skeleton className="h-10 w-3/4 max-w-xl mb-2" />
      <Skeleton className="h-6 w-full max-w-2xl mb-8" />

      <div className="lg:hidden mb-6">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="hidden md:block md:col-span-1">
          <div className="bg-white p-6 rounded-lg border">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Skeleton className="h-10 w-full max-w-md" />
            <Skeleton className="h-10 w-full sm:w-[180px]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-6 w-1/4" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-1/4" />
                    <Skeleton className="h-5 w-1/3" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

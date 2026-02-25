"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useUserPreferences, locations } from "@/contexts/user-preferences-context"
import { cn } from "@/lib/utils"

export function LocationSelector() {
  const { location, setLocation, isAutoDetecting } = useUserPreferences()
  const [open, setOpen] = useState(false)

  // Group locations by region
  const groupedLocations = locations.reduce(
    (acc, loc) => {
      if (!acc[loc.region]) {
        acc[loc.region] = []
      }
      acc[loc.region].push(loc)
      return acc
    },
    {} as Record<string, typeof locations>,
  )

  // Sort regions
  const regions = Object.keys(groupedLocations).sort()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            {isAutoDetecting ? "Detecting..." : location.name}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            {regions.map((region) => (
              <CommandGroup key={region} heading={region}>
                {groupedLocations[region].map((item) => (
                  <CommandItem
                    key={item.code}
                    value={`${item.name} ${item.code}`}
                    onSelect={() => {
                      setLocation(item)
                      setOpen(false)
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", location.code === item.code ? "opacity-100" : "opacity-0")} />
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

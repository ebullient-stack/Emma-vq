"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useUserPreferences, currencies } from "@/contexts/user-preferences-context"
import { cn } from "@/lib/utils"

export function CurrencySelector() {
  const { currency, setCurrency, isAutoDetecting } = useUserPreferences()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          <div className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            {isAutoDetecting ? "Detecting..." : `${currency.code} (${currency.symbol})`}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((item) => (
                <CommandItem
                  key={item.code}
                  value={item.code}
                  onSelect={() => {
                    setCurrency(item)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", currency.code === item.code ? "opacity-100" : "opacity-0")} />
                  {item.code} - {item.name} ({item.symbol})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

"use client"

import { useState } from "react"
import { Settings, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CurrencySelector } from "@/components/currency-selector"
import { LocationSelector } from "@/components/location-selector"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUserPreferences } from "@/contexts/user-preferences-context"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function UserPreferencesDropdown() {
  const { autoDetectLocationAndCurrency, isAutoDetecting, marketPriceUpdateFrequency, setMarketPriceUpdateFrequency } =
    useUserPreferences()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">User preferences</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>User Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="p-2">
            <div className="mb-4">
              <Label className="text-sm font-medium mb-1.5 block">Currency</Label>
              <CurrencySelector />
            </div>
            <div className="mb-4">
              <Label className="text-sm font-medium mb-1.5 block">Location</Label>
              <LocationSelector />
            </div>
            <div className="mb-4">
              <Label className="text-sm font-medium mb-1.5 block">Market Price Updates</Label>
              <RadioGroup
                value={marketPriceUpdateFrequency}
                onValueChange={(value) =>
                  setMarketPriceUpdateFrequency(value as "realtime" | "daily" | "weekly" | "never")
                }
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="realtime" id="realtime" />
                  <Label htmlFor="realtime">Real-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="never" id="never" />
                  <Label htmlFor="never">Never</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            autoDetectLocationAndCurrency()
            // Don't close the dropdown immediately so user can see the detection status
            setTimeout(() => {
              if (!isAutoDetecting) setOpen(false)
            }, 500)
          }}
          disabled={isAutoDetecting}
        >
          <Globe className={`mr-2 h-4 w-4 ${isAutoDetecting ? "animate-pulse" : ""}`} />
          <span>{isAutoDetecting ? "Detecting your location..." : "Auto-detect location & currency"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

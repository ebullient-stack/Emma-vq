"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"
import { geolocationService } from "@/services/geolocation-service"

type Currency = {
  code: string
  symbol: string
  name: string
  exchangeRate: number // Relative to USD
  countries: string[] // Associated country codes
}

type Location = {
  code: string
  name: string
  region: string
  currencyCode: string // Associated currency code
}

type UserPreferences = {
  currency: Currency
  location: Location
  setCurrency: (currency: Currency) => void
  setLocation: (location: Location) => void
  isAutoDetecting: boolean
  autoDetectLocationAndCurrency: () => Promise<void>
  marketPriceUpdateFrequency: "realtime" | "daily" | "weekly" | "never"
  setMarketPriceUpdateFrequency: (frequency: "realtime" | "daily" | "weekly" | "never") => void
}

// East African currencies
const currencies: Currency[] = [
  {
    code: "KES",
    symbol: "KSh",
    name: "Kenyan Shilling",
    exchangeRate: 129.5,
    countries: ["KE"],
  },
  {
    code: "TZS",
    symbol: "TSh",
    name: "Tanzanian Shilling",
    exchangeRate: 2520,
    countries: ["TZ"],
  },
  {
    code: "UGX",
    symbol: "USh",
    name: "Ugandan Shilling",
    exchangeRate: 3750,
    countries: ["UG"],
  },
  {
    code: "RWF",
    symbol: "RF",
    name: "Rwandan Franc",
    exchangeRate: 1230,
    countries: ["RW"],
  },
  {
    code: "BIF",
    symbol: "FBu",
    name: "Burundian Franc",
    exchangeRate: 2850,
    countries: ["BI"],
  },
  {
    code: "ETB",
    symbol: "Br",
    name: "Ethiopian Birr",
    exchangeRate: 56.5,
    countries: ["ET"],
  },
  {
    code: "SSP",
    symbol: "£",
    name: "South Sudanese Pound",
    exchangeRate: 980,
    countries: ["SS"],
  },
  {
    code: "SOS",
    symbol: "Sh",
    name: "Somali Shilling",
    exchangeRate: 570,
    countries: ["SO"],
  },
  {
    code: "DJF",
    symbol: "Fdj",
    name: "Djiboutian Franc",
    exchangeRate: 178,
    countries: ["DJ"],
  },
  {
    code: "ERN",
    symbol: "Nfa",
      name: "Eritrean Nakfa",
        exchangeRate: 15.0, // Example rate, adjust as needed
          countries: ["ER"],
          },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    exchangeRate: 1,
    countries: ["US"],
  },
]

// East African locations
const locations: Location[] = [
  { code: "KE", name: "Kenya", region: "East Africa", currencyCode: "KES" },
  { code: "TZ", name: "Tanzania", region: "East Africa", currencyCode: "TZS" },
  { code: "UG", name: "Uganda", region: "East Africa", currencyCode: "UGX" },
  { code: "RW", name: "Rwanda", region: "East Africa", currencyCode: "RWF" },
  { code: "BI", name: "Burundi", region: "East Africa", currencyCode: "BIF" },
  { code: "ET", name: "Ethiopia", region: "East Africa", currencyCode: "ETB" },
  { code: "SS", name: "South Sudan", region: "East Africa", currencyCode: "SSP" },
  { code: "SO", name: "Somalia", region: "East Africa", currencyCode: "SOS" },
  { code: "DJ", name: "Djibouti", region: "East Africa", currencyCode: "DJF" },
  { code: "ER", name: "Eritrea", region: "East Africa", currencyCode: "ERN" },
  { code: "US", name: "United States", region: "North America", currencyCode: "USD" },
]

const defaultPreferences: UserPreferences = {
  currency: currencies[0], // KES
  location: locations[0], // Kenya
  setCurrency: () => {},
  setLocation: () => {},
  isAutoDetecting: false,
  autoDetectLocationAndCurrency: async () => {},
  marketPriceUpdateFrequency: "daily",
  setMarketPriceUpdateFrequency: () => {},
}

const UserPreferencesContext = createContext<UserPreferences>(defaultPreferences)

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast()
  const [currency, setCurrencyState] = useState<Currency>(defaultPreferences.currency)
  const [location, setLocationState] = useState<Location>(defaultPreferences.location)
  const [isAutoDetecting, setIsAutoDetecting] = useState(false)
  const [marketPriceUpdateFrequency, setMarketPriceUpdateFrequencyState] = useState<
    "realtime" | "daily" | "weekly" | "never"
  >("daily")

  // Load preferences from localStorage on mount
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const storedCurrency = localStorage.getItem("userCurrency")
        const storedLocation = localStorage.getItem("userLocation")
        const storedMarketPriceUpdateFrequency = localStorage.getItem("marketPriceUpdateFrequency")

        if (storedCurrency) {
          setCurrencyState(JSON.parse(storedCurrency))
        }

        if (storedLocation) {
          setLocationState(JSON.parse(storedLocation))
        }

        if (storedMarketPriceUpdateFrequency) {
          setMarketPriceUpdateFrequencyState(JSON.parse(storedMarketPriceUpdateFrequency))
        }
      } catch (error) {
        console.error("Error loading preferences from localStorage:", error)
      }
    }

    loadPreferences()
  }, [])

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency)
    localStorage.setItem("userCurrency", JSON.stringify(newCurrency))
    toast({
      title: "Currency updated",
      description: `Your currency has been set to ${newCurrency.name} (${newCurrency.code})`,
    })
  }

  const setLocation = (newLocation: Location) => {
    setLocationState(newLocation)
    localStorage.setItem("userLocation", JSON.stringify(newLocation))

    // Optionally update currency to match location
    const matchingCurrency = currencies.find((c) => c.code === newLocation.currencyCode)
    if (matchingCurrency && matchingCurrency.code !== currency.code) {
      setCurrency(matchingCurrency)
    }

    toast({
      title: "Location updated",
      description: `Your location has been set to ${newLocation.name}`,
    })
  }

  const setMarketPriceUpdateFrequency = (frequency: "realtime" | "daily" | "weekly" | "never") => {
    setMarketPriceUpdateFrequencyState(frequency)
    localStorage.setItem("marketPriceUpdateFrequency", JSON.stringify(frequency))
    toast({
      title: "Market price updates",
      description: `Market price updates set to ${frequency}`,
    })
  }

  // Function to auto-detect location and set appropriate currency using IPinfo
  const autoDetectLocationAndCurrency = async () => {
    setIsAutoDetecting(true)

    try {
      // Use IPinfo service for accurate location detection
      const locationData = await geolocationService.getCurrentLocation()

      if (locationData) {
        // Check if user is using VPN
        if (locationData.isVPN) {
          toast({
            title: "VPN Detected",
            description: "We detected you're using a VPN. Location may not be accurate.",
            variant: "default",
          })
        }

        // Find matching location in our East African locations
        const detectedLocation = locations.find((loc) => loc.code === locationData.country)

        if (detectedLocation) {
          setLocation(detectedLocation)

          // Find matching currency
          const detectedCurrency = currencies.find((curr) => curr.code === detectedLocation.currencyCode)
          if (detectedCurrency) {
            setCurrency(detectedCurrency)
          }

          toast({
            title: "Location detected",
            description: `Your location has been set to ${detectedLocation.name} (${locationData.city}, ${locationData.region})`,
          })
        } else {
          // If user is not in East Africa, check if they're in Africa
          if (locationData.continent === "Africa") {
            // Default to Kenya for other African countries
            setLocation(locations[0]) // Kenya
            setCurrency(currencies[0]) // KES

            toast({
              title: "Welcome to East African Market",
              description: `We've set your location to Kenya as you're accessing from ${locationData.countryName}. You can change this in preferences.`,
            })
          } else {
            // For non-African users, still default to Kenya but with different message
            setLocation(locations[0]) // Kenya
            setCurrency(currencies[0]) // KES

            toast({
              title: "East African Market Access",
              description: `Welcome! We've set your location to Kenya for East African market access. Detected location: ${locationData.countryName}`,
            })
          }
        }
      } else {
        // Fallback if IPinfo fails
        setLocation(locations[0]) // Default to Kenya
        setCurrency(currencies[0]) // Default to KES

        toast({
          title: "Location detection failed",
          description: "We couldn't detect your location. Default settings applied for Kenya.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error auto-detecting location:", error)

      // Set default values when detection fails
      setLocation(locations[0]) // Default to Kenya
      setCurrency(currencies[0]) // Default to KES

      toast({
        title: "Location detection failed",
        description: "We couldn't detect your location. Default settings applied.",
        variant: "destructive",
      })
    } finally {
      setIsAutoDetecting(false)
    }
  }

  return (
    <UserPreferencesContext.Provider
      value={{
        currency,
        location,
        setCurrency,
        setLocation,
        isAutoDetecting,
        autoDetectLocationAndCurrency,
        marketPriceUpdateFrequency,
        setMarketPriceUpdateFrequency,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  )
}

export function useUserPreferences() {
  return useContext(UserPreferencesContext)
}

export function useCurrencyConverter() {
  const { currency } = useUserPreferences()

  const convertPrice = (priceInUSD: number): string => {
    const convertedPrice = priceInUSD * currency.exchangeRate
    return `${currency.symbol} ${convertedPrice.toFixed(2)}`
  }

  const convertPriceString = (priceString: string): string => {
    // Extract numeric value from price string (e.g., "$100.00/kg" -> 100.00)
    const numericMatch = priceString.match(/[\d,.]+/)
    if (!numericMatch) return priceString

    const numericValue = Number.parseFloat(numericMatch[0].replace(/,/g, ""))
    if (isNaN(numericValue)) return priceString

    // Extract unit from price string (e.g., "$100.00/kg" -> "/kg")
    const unitMatch = priceString.match(/\/[a-zA-Z]+/)
    const unit = unitMatch ? unitMatch[0] : ""

    // Convert the price
    const convertedPrice = numericValue * currency.exchangeRate
    return `${currency.symbol} ${convertedPrice.toFixed(2)}${unit}`
  }

  return { convertPrice, convertPriceString }
}

export { currencies, locations }

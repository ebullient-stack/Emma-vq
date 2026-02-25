import type { Product, ProductFilters, ProductsResponse, Vendor, VendorResponse } from "@/types/product"

// Mock vendor data
const vendors: Vendor[] = [
  {
    id: 1,
    name: "Global Harvest Co.",
    logo: "/placeholder.svg?height=100&width=100&text=GH",
    description:
      "Leading supplier of premium fruits and vegetables from the United States, with a focus on sustainable farming practices.",
    country: "United States",
    joinedDate: "2020-03-15T00:00:00Z",
    rating: 4.8,
    verificationStatus: "verified",
    contactEmail: "contact@globalharvest.com",
    contactPhone: "+1 555-123-4567",
    website: "https://www.globalharvest.com",
    storeUrl: "global-harvest",
    productsCount: 24,
    featuredVendor: true,
  },
  {
    id: 2,
    name: "Tropical Exports Ltd.",
    logo: "/placeholder.svg?height=100&width=100&text=TE",
    description: "Specialized in tropical fruits and organic products from Mexico and Central America.",
    country: "Mexico",
    joinedDate: "2021-01-10T00:00:00Z",
    rating: 4.6,
    verificationStatus: "verified",
    contactEmail: "info@tropicalexports.com",
    contactPhone: "+52 555-987-6543",
    website: "https://www.tropicalexports.com",
    storeUrl: "tropical-exports",
    productsCount: 18,
    featuredVendor: true,
  },
  {
    id: 3,
    name: "Asian Agro Solutions",
    logo: "/placeholder.svg?height=100&width=100&text=AAS",
    description: "Premier supplier of rice, spices, and other agricultural products from across Asia.",
    country: "Thailand",
    joinedDate: "2019-08-22T00:00:00Z",
    rating: 4.7,
    verificationStatus: "verified",
    contactEmail: "sales@asianagro.com",
    contactPhone: "+66 2-123-4567",
    website: "https://www.asianagrosolutions.com",
    storeUrl: "asian-agro",
    productsCount: 32,
    featuredVendor: false,
  },
  {
    id: 4,
    name: "European Grain Collective",
    logo: "/placeholder.svg?height=100&width=100&text=EGC",
    description: "Cooperative of European grain farmers offering high-quality cereals and grains.",
    country: "France",
    joinedDate: "2020-05-18T00:00:00Z",
    rating: 4.5,
    verificationStatus: "verified",
    contactEmail: "info@europeangrain.com",
    contactPhone: "+33 1-23-45-67-89",
    website: "https://www.europeangrain.com",
    storeUrl: "european-grain",
    productsCount: 15,
    featuredVendor: false,
  },
  {
    id: 5,
    name: "African Coffee Traders",
    logo: "/placeholder.svg?height=100&width=100&text=ACT",
    description: "Direct source of premium coffee beans from Ethiopia, Kenya, and other African countries.",
    country: "Ethiopia",
    joinedDate: "2021-03-05T00:00:00Z",
    rating: 4.9,
    verificationStatus: "verified",
    contactEmail: "trade@africancoffee.com",
    contactPhone: "+251 11-123-4567",
    website: "https://www.africancoffeetraders.com",
    storeUrl: "african-coffee",
    productsCount: 12,
    featuredVendor: true,
  },
  {
    id: 6,
    name: "FarmTech Solutions",
    logo: "/placeholder.svg?height=100&width=100&text=FTS",
    description: "Leading provider of agricultural machinery, tools, and technology solutions for modern farming.",
    country: "Germany",
    joinedDate: "2019-11-12T00:00:00Z",
    rating: 4.7,
    verificationStatus: "verified",
    contactEmail: "sales@farmtechsolutions.com",
    contactPhone: "+49 30-123-45678",
    website: "https://www.farmtechsolutions.com",
    storeUrl: "farmtech-solutions",
    productsCount: 28,
    featuredVendor: true,
  },
  {
    id: 7,
    name: "Green Fields Investment",
    logo: "/placeholder.svg?height=100&width=100&text=GFI",
    description: "Specializing in agricultural land sales, leasing, and development opportunities worldwide.",
    country: "United Kingdom",
    joinedDate: "2020-07-20T00:00:00Z",
    rating: 4.6,
    verificationStatus: "verified",
    contactEmail: "invest@greenfields.com",
    contactPhone: "+44 20-1234-5678",
    website: "https://www.greenfieldsgroup.com",
    storeUrl: "green-fields",
    productsCount: 15,
    featuredVendor: false,
  },
  {
    id: 8,
    name: "Premium Livestock Traders",
    logo: "/placeholder.svg?height=100&width=100&text=PLT",
    description: "Specialized in high-quality livestock and breeding animals from across Europe and North America.",
    country: "Ireland",
    joinedDate: "2020-04-15T00:00:00Z",
    rating: 4.8,
    verificationStatus: "verified",
    contactEmail: "info@premiumlivestock.com",
    contactPhone: "+353 1-234-5678",
    website: "https://www.premiumlivestock.com",
    storeUrl: "premium-livestock",
    productsCount: 22,
    featuredVendor: true,
  },
]

// Mock product data with vendor information and new categories
const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    description:
      "Premium fresh apples from the orchards of Washington state. Known for their crisp texture and sweet flavor.",
    category: "Fruits & Vegetables",
    subcategory: "Pome Fruits",
    origin: "United States",
    price: "$1.20/kg",
    numericPrice: 1.2,
    currency: "USD",
    unit: "kg",
    minOrder: "500 kg",
    leadTime: "1-2 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-01-15T00:00:00Z",
    updatedAt: "2023-04-20T00:00:00Z",
    specifications: [
      { name: "Variety", value: "Honeycrisp" },
      { name: "Size", value: "Medium to Large" },
      { name: "Color", value: "Red with Yellow Patches" },
      { name: "Taste", value: "Sweet with Slight Tartness" },
      { name: "Shelf Life", value: "2-3 weeks refrigerated" },
    ],
    tags: ["organic", "fresh", "premium"],
    vendorId: 1,
    listingType: "sell", // Only for sale
  },
  {
    id: 2,
    name: "Organic Avocados",
    description:
      "Organic Hass avocados grown in the fertile soils of Mexico. Rich, creamy texture perfect for guacamole or toast.",
    category: "Fruits & Vegetables",
    subcategory: "Tropical Fruits",
    origin: "Mexico",
    price: "$2.50/kg",
    numericPrice: 2.5,
    currency: "USD",
    unit: "kg",
    minOrder: "300 kg",
    leadTime: "1-2 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-02-10T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z",
    specifications: [
      { name: "Variety", value: "Hass" },
      { name: "Size", value: "Medium" },
      { name: "Color", value: "Dark Green to Black" },
      { name: "Taste", value: "Buttery, Nutty" },
      { name: "Shelf Life", value: "4-5 days at room temperature" },
    ],
    tags: ["organic", "fresh", "premium"],
    vendorId: 2,
    listingType: "sell", // Only for sale
  },
  {
    id: 3,
    name: "Arabica Coffee Beans",
    description:
      "Premium Arabica coffee beans sourced from the highlands of Colombia. Medium roast with notes of chocolate and caramel.",
    category: "Coffee & Tea",
    subcategory: "Coffee Beans",
    origin: "Colombia",
    price: "$8.75/kg",
    numericPrice: 8.75,
    currency: "USD",
    unit: "kg",
    minOrder: "500 kg",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-01-05T00:00:00Z",
    updatedAt: "2023-06-10T00:00:00Z",
    specifications: [
      { name: "Variety", value: "Arabica" },
      { name: "Processing", value: "Washed" },
      { name: "Altitude", value: "1,200-1,800 meters" },
      { name: "Cupping Score", value: "84+" },
      { name: "Moisture Content", value: "10-12%" },
    ],
    tags: ["premium", "specialty", "medium-roast"],
    vendorId: 5,
    listingType: "sell", // Only for sale
  },
  {
    id: 4,
    name: "Basmati Rice",
    description:
      "Premium long-grain Basmati rice from the foothills of the Himalayas. Known for its distinctive aroma and fluffy texture when cooked.",
    category: "Grains & Cereals",
    subcategory: "Rice",
    origin: "India",
    price: "$3.40/kg",
    numericPrice: 3.4,
    currency: "USD",
    unit: "kg",
    minOrder: "1000 kg",
    leadTime: "3-4 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-03-20T00:00:00Z",
    updatedAt: "2023-05-25T00:00:00Z",
    specifications: [
      { name: "Variety", value: "Basmati" },
      { name: "Grain Length", value: "Long" },
      { name: "Aging", value: "12 months" },
      { name: "Broken Percentage", value: "<5%" },
      { name: "Packaging", value: "25kg bags" },
    ],
    tags: ["premium", "long-grain", "aromatic"],
    vendorId: 3,
    listingType: "sell", // Only for sale
  },
  {
    id: 5,
    name: "Frozen Shrimp",
    description:
      "Premium quality frozen white shrimp sourced from sustainable farms in Vietnam. Peeled and deveined for convenience.",
    category: "Seafood",
    subcategory: "Shellfish",
    origin: "Vietnam",
    price: "$12.00/kg",
    numericPrice: 12.0,
    currency: "USD",
    unit: "kg",
    minOrder: "300 kg",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-15T00:00:00Z",
    updatedAt: "2023-04-30T00:00:00Z",
    specifications: [
      { name: "Species", value: "Litopenaeus vannamei" },
      { name: "Size", value: "16/20 count per pound" },
      { name: "Processing", value: "Peeled & Deveined" },
      { name: "Preservation", value: "IQF (Individually Quick Frozen)" },
      { name: "Packaging", value: "10kg cartons" },
    ],
    tags: ["seafood", "frozen", "premium"],
    vendorId: 3,
    listingType: "sell", // Only for sale
  },
  {
    id: 6,
    name: "Cashew Nuts",
    description:
      "Premium whole cashew nuts from Brazil. Carefully processed to maintain quality and flavor. Perfect for snacking or cooking.",
    category: "Nuts & Seeds",
    subcategory: "Tree Nuts",
    origin: "Brazil",
    price: "$9.80/kg",
    numericPrice: 9.8,
    currency: "USD",
    unit: "kg",
    minOrder: "500 kg",
    leadTime: "3-4 weeks",
    image: "/placeholder.svg?height=200&width=200",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-01-25T00:00:00Z",
    updatedAt: "2023-06-05T00:00:00Z",
    specifications: [
      { name: "Grade", value: "W320" },
      { name: "Color", value: "White" },
      { name: "Moisture", value: "<5%" },
      { name: "Broken Percentage", value: "<10%" },
      { name: "Packaging", value: "25kg vacuum-sealed bags" },
    ],
    tags: ["nuts", "premium", "whole"],
    vendorId: 2,
    listingType: "sell", // Only for sale
  },
  // Adding new products for the new categories
  {
    id: 16,
    name: "John Deere 8R Tractor",
    description:
      "Versatile compact tractor ideal for small to medium farms. Powerful engine with excellent fuel efficiency.",
    category: "Agro Machinery",
    subcategory: "Tractors",
    origin: "Germany",
    price: "$15,500.00/unit",
    numericPrice: 15500.0,
    currency: "USD",
    unit: "unit",
    minOrder: "1 unit",
    leadTime: "4-6 weeks",
    image: "/placeholder.svg?height=400&width=600&text=John+Deere+8R",
    images: [
      "/placeholder.svg?height=600&width=800&text=John+Deere+8R+Front",
      "/placeholder.svg?height=600&width=800&text=John+Deere+8R+Side",
      "/placeholder.svg?height=600&width=800&text=John+Deere+8R+Cabin",
      "/placeholder.svg?height=600&width=800&text=John+Deere+8R+Engine",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-02-10T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z",
    specifications: [
      { name: "Engine Power", value: "45 HP" },
      { name: "Transmission", value: "12 Forward, 12 Reverse" },
      { name: "Lift Capacity", value: "1,500 kg" },
      { name: "Fuel Type", value: "Diesel" },
      { name: "Warranty", value: "3 years or 2,000 hours" },
    ],
    tags: ["machinery", "tractor", "farm-equipment"],
    vendorId: 6,
    listingType: "both", // Available for both sale and hire
    hirePrice: "$250.00",
    hireNumericPrice: 250.0,
    hirePriceUnit: "day",
    hireAvailability: {
      availableNow: true,
    },
    hireTerms: "Minimum hire period of 3 days. Security deposit required.",
    includesOperator: true,
  },
  {
    id: 17,
    name: "Irrigation System",
    description:
      "Complete drip irrigation system for efficient water usage. Suitable for various crops and field sizes.",
    category: "Agro Machinery",
    subcategory: "Irrigation",
    origin: "Israel",
    price: "$2,800.00/hectare",
    numericPrice: 2800.0,
    currency: "USD",
    unit: "hectare",
    minOrder: "5 hectares",
    leadTime: "3-4 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Drip+Irrigation+System",
    images: [
      "/placeholder.svg?height=600&width=800&text=Irrigation+System+Overview",
      "/placeholder.svg?height=600&width=800&text=Irrigation+Drippers",
      "/placeholder.svg?height=600&width=800&text=Irrigation+Control+Panel",
      "/placeholder.svg?height=600&width=800&text=Irrigation+Installation",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-03-05T00:00:00Z",
    updatedAt: "2023-06-10T00:00:00Z",
    specifications: [
      { name: "Type", value: "Drip Irrigation" },
      { name: "Flow Rate", value: "2-8 liters/hour" },
      { name: "Material", value: "UV-resistant polyethylene" },
      { name: "Control System", value: "Automated with weather sensors" },
      { name: "Installation", value: "Professional installation included" },
    ],
    tags: ["irrigation", "water-saving", "sustainable"],
    vendorId: 6,
    listingType: "both", // Available for both sale and hire
    hirePrice: "$150.00",
    hireNumericPrice: 150.0,
    hirePriceUnit: "week",
    hireAvailability: {
      availableNow: true,
    },
    hireTerms: "Installation and removal included in hire price.",
    includesOperator: false,
  },
  {
    id: 18,
    name: "Agricultural Land - 50 Hectares",
    description:
      "Prime agricultural land with fertile soil and good water access. Suitable for various crops including grains and vegetables.",
    category: "Fields & Land",
    subcategory: "Farmland",
    origin: "Ukraine",
    price: "$5,000.00/hectare",
    numericPrice: 5000.0,
    currency: "USD",
    unit: "hectare",
    minOrder: "50 hectares",
    leadTime: "Immediate",
    image: "/placeholder.svg?height=400&width=600&text=Agricultural+Land",
    images: [
      "/placeholder.svg?height=600&width=800&text=Farmland+Aerial+View",
      "/placeholder.svg?height=600&width=800&text=Farmland+Soil+Sample",
      "/placeholder.svg?height=600&width=800&text=Farmland+Water+Source",
      "/placeholder.svg?height=600&width=800&text=Farmland+Access+Road",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-01-15T00:00:00Z",
    updatedAt: "2023-04-20T00:00:00Z",
    specifications: [
      { name: "Total Area", value: "50 hectares" },
      { name: "Soil Type", value: "Chernozem (Black Earth)" },
      { name: "Water Source", value: "River access and wells" },
      { name: "Previous Crops", value: "Wheat, Corn, Sunflower" },
      { name: "Infrastructure", value: "Access roads, electricity" },
    ],
    tags: ["land", "investment", "agriculture"],
    vendorId: 7,
    listingType: "both", // Available for both sale and hire
    hirePrice: "$200.00",
    hireNumericPrice: 200.0,
    hirePriceUnit: "month",
    hireAvailability: {
      availableNow: true,
    },
    hireTerms: "Minimum lease period of 6 months. Tenant responsible for land maintenance.",
    includesOperator: false,
  },
  {
    id: 19,
    name: "Vineyard Estate",
    description:
      "Established vineyard with mature vines and wine production facilities. Excellent terroir and climate for premium wine grapes.",
    category: "Fields & Land",
    subcategory: "Vineyards",
    origin: "France",
    price: "$1,200,000.00/estate",
    numericPrice: 1200000.0,
    currency: "USD",
    unit: "estate",
    minOrder: "1 estate",
    leadTime: "Immediate",
    image: "/placeholder.svg?height=200&width=200&text=Vineyard",
    images: [
      "/placeholder.svg?height=600&width=600&text=Vineyard+1",
      "/placeholder.svg?height=600&width=600&text=Vineyard+2",
      "/placeholder.svg?height=600&width=600&text=Vineyard+3",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-20T00:00:00Z",
    updatedAt: "2023-05-25T00:00:00Z",
    specifications: [
      { name: "Total Area", value: "15 hectares" },
      { name: "Grape Varieties", value: "Cabernet Sauvignon, Merlot, Chardonnay" },
      { name: "Vine Age", value: "8-25 years" },
      { name: "Production Capacity", value: "80,000 bottles annually" },
      { name: "Facilities", value: "Winery, cellar, tasting room, residence" },
    ],
    tags: ["vineyard", "wine", "estate", "investment"],
    vendorId: 7,
    listingType: "both", // Available for both sale and hire
    hirePrice: "$8,000.00",
    hireNumericPrice: 8000.0,
    hirePriceUnit: "month",
    hireAvailability: {
      availableNow: false,
      startDate: "2023-09-01T00:00:00Z",
      endDate: "2024-08-31T00:00:00Z",
    },
    hireTerms: "Minimum lease period of 12 months. Includes access to production facilities.",
    includesOperator: false,
  },
  {
    id: 20,
    name: "Premium NPK Fertilizer",
    description: "Balanced NPK fertilizer for optimal plant growth. Slow-release formula for sustained nutrition.",
    category: "Agro Input",
    subcategory: "Fertilizers",
    origin: "Germany",
    price: "$450.00/ton",
    numericPrice: 450.0,
    currency: "USD",
    unit: "ton",
    minOrder: "5 tons",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=200&width=200&text=Fertilizer",
    images: [
      "/placeholder.svg?height=600&width=600&text=Fertilizer+1",
      "/placeholder.svg?height=600&width=600&text=Fertilizer+2",
      "/placeholder.svg?height=600&width=600&text=Fertilizer+3",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-03-10T00:00:00Z",
    updatedAt: "2023-06-15T00:00:00Z",
    specifications: [
      { name: "NPK Ratio", value: "15-15-15" },
      { name: "Form", value: "Granular" },
      { name: "Release Type", value: "Slow-release" },
      { name: "Application Rate", value: "300-500 kg/hectare" },
      { name: "Packaging", value: "25kg bags or 1-ton bulk bags" },
    ],
    tags: ["fertilizer", "crop-nutrition", "agriculture"],
    vendorId: 6,
    listingType: "sell", // Only for sale
  },
  {
    id: 21,
    name: "Organic Seeds Collection",
    description:
      "Premium certified organic seeds for various vegetables. High germination rate and disease resistance.",
    category: "Agro Input",
    subcategory: "Seeds",
    origin: "Netherlands",
    price: "$85.00/kg",
    numericPrice: 85.0,
    currency: "USD",
    unit: "kg",
    minOrder: "10 kg",
    leadTime: "1-2 weeks",
    image: "/placeholder.svg?height=200&width=200&text=Seeds",
    images: [
      "/placeholder.svg?height=600&width=600&text=Seeds+1",
      "/placeholder.svg?height=600&width=600&text=Seeds+2",
      "/placeholder.svg?height=600&width=600&text=Seeds+3",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-01-30T00:00:00Z",
    updatedAt: "2023-04-25T00:00:00Z",
    specifications: [
      { name: "Varieties", value: "Tomato, Cucumber, Lettuce, Carrot, Pepper" },
      { name: "Certification", value: "USDA Organic, EU Organic" },
      { name: "Germination Rate", value: ">95%" },
      { name: "Treatment", value: "None (Organic)" },
      { name: "Storage Life", value: "2 years when properly stored" },
    ],
    tags: ["organic", "seeds", "vegetables", "sustainable"],
    vendorId: 1,
    listingType: "sell", // Only for sale
  },
  {
    id: 22,
    name: "Pruning Shears Set",
    description:
      "Professional-grade pruning shears for vineyard and orchard maintenance. Ergonomic design for reduced hand fatigue.",
    category: "Tools & Spare Parts",
    subcategory: "Hand Tools",
    origin: "Switzerland",
    price: "$120.00/set",
    numericPrice: 120.0,
    currency: "USD",
    unit: "set",
    minOrder: "10 sets",
    leadTime: "1-2 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Pruning+Shears+Set",
    images: [
      "/placeholder.svg?height=600&width=800&text=Pruning+Shears+Complete+Set",
      "/placeholder.svg?height=600&width=800&text=Pruning+Shears+In+Use",
      "/placeholder.svg?height=600&width=800&text=Pruning+Shears+Close+Up",
      "/placeholder.svg?height=600&width=800&text=Pruning+Shears+Maintenance+Kit",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-05T00:00:00Z",
    updatedAt: "2023-05-10T00:00:00Z",
    specifications: [
      { name: "Material", value: "High-carbon steel blades, aluminum handles" },
      { name: "Cutting Capacity", value: "Up to 25mm diameter" },
      { name: "Handle Type", value: "Ergonomic with non-slip grip" },
      { name: "Weight", value: "250g per shear" },
      { name: "Includes", value: "3 different shears, maintenance kit, carrying case" },
    ],
    tags: ["tools", "pruning", "orchard", "vineyard"],
    vendorId: 6,
    listingType: "both", // Available for both sale and hire
    hirePrice: "$15.00",
    hireNumericPrice: 15.0,
    hirePriceUnit: "week",
    hireAvailability: {
      availableNow: true,
    },
    hireTerms: "Security deposit required. Tools must be returned in good condition.",
    includesOperator: false,
  },
  {
    id: 23,
    name: "Tractor Spare Parts Kit",
    description:
      "Comprehensive kit of essential spare parts for common tractor models. Includes filters, belts, and basic maintenance parts.",
    category: "Tools & Spare Parts",
    subcategory: "Machinery Parts",
    origin: "United States",
    price: "$350.00/kit",
    numericPrice: 350.0,
    currency: "USD",
    unit: "kit",
    minOrder: "5 kits",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=200&width=200&text=Tractor+Parts",
    images: [
      "/placeholder.svg?height=600&width=600&text=Tractor+Parts+1",
      "/placeholder.svg?height=600&width=600&text=Tractor+Parts+2",
      "/placeholder.svg?height=600&width=600&text=Tractor+Parts+3",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-03-15T00:00:00Z",
    updatedAt: "2023-06-20T00:00:00Z",
    specifications: [
      { name: "Compatibility", value: "Major tractor brands (John Deere, New Holland, Massey Ferguson)" },
      { name: "Contents", value: "Air filters, oil filters, fuel filters, fan belts, hydraulic hoses" },
      { name: "Quality", value: "OEM equivalent or better" },
      { name: "Warranty", value: "1 year against manufacturing defects" },
      { name: "Packaging", value: "Heavy-duty storage case" },
    ],
    tags: ["spare-parts", "tractor", "maintenance", "repair"],
    vendorId: 6,
    listingType: "sell", // Only for sale
  },
  // Adding new livestock products
  {
    id: 24,
    name: "Holstein Dairy Cows",
    description:
      "High-yielding Holstein dairy cows known for excellent milk production. Healthy, vaccinated, and from quality genetic lines.",
    category: "Live Stock & Animals",
    subcategory: "Dairy Cattle",
    origin: "Netherlands",
    price: "$1,800.00/head",
    numericPrice: 1800.0,
    currency: "USD",
    unit: "head",
    minOrder: "5 head",
    leadTime: "2-4 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Holstein+Dairy+Cow",
    images: [
      "/placeholder.svg?height=600&width=800&text=Holstein+Cow+Side+View",
      "/placeholder.svg?height=600&width=800&text=Holstein+Cow+Front+View",
      "/placeholder.svg?height=600&width=800&text=Holstein+Herd",
      "/placeholder.svg?height=600&width=800&text=Holstein+Cow+Details",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-01-18T00:00:00Z",
    updatedAt: "2023-05-12T00:00:00Z",
    specifications: [
      { name: "Breed", value: "Holstein Friesian" },
      { name: "Age", value: "2-4 years" },
      { name: "Average Milk Yield", value: "8,000-10,000 liters per lactation" },
      { name: "Weight", value: "550-650 kg" },
      { name: "Health Status", value: "Vaccinated, parasite-free, health certificates provided" },
    ],
    tags: ["dairy", "cattle", "livestock", "milk-production"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 25,
    name: "Angus Beef Cattle",
    description:
      "Premium Black Angus beef cattle from top genetic lines. Known for excellent meat quality, marbling, and feed efficiency.",
    category: "Live Stock & Animals",
    subcategory: "Beef Cattle",
    origin: "United States",
    price: "$2,200.00/head",
    numericPrice: 2200.0,
    currency: "USD",
    unit: "head",
    minOrder: "10 head",
    leadTime: "3-5 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Angus+Beef+Cattle",
    images: [
      "/placeholder.svg?height=600&width=800&text=Angus+Cattle+Grazing",
      "/placeholder.svg?height=600&width=800&text=Angus+Bull",
      "/placeholder.svg?height=600&width=800&text=Angus+Herd",
      "/placeholder.svg?height=600&width=800&text=Angus+Cattle+Close+Up",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-22T00:00:00Z",
    updatedAt: "2023-06-05T00:00:00Z",
    specifications: [
      { name: "Breed", value: "Black Angus" },
      { name: "Age", value: "12-18 months" },
      { name: "Average Weight", value: "450-550 kg" },
      { name: "Feed Conversion", value: "Excellent" },
      { name: "Health Status", value: "Vaccinated, health certificates provided" },
    ],
    tags: ["beef", "cattle", "livestock", "meat-production"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 26,
    name: "Merino Sheep",
    description:
      "High-quality Merino sheep known for premium wool production. Adaptable to various climates with excellent fleece characteristics.",
    category: "Live Stock & Animals",
    subcategory: "Sheep",
    origin: "Australia",
    price: "$350.00/head",
    numericPrice: 350.0,
    currency: "USD",
    unit: "head",
    minOrder: "20 head",
    leadTime: "4-6 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Merino+Sheep",
    images: [
      "/placeholder.svg?height=600&width=800&text=Merino+Sheep+Grazing",
      "/placeholder.svg?height=600&width=800&text=Merino+Flock",
      "/placeholder.svg?height=600&width=800&text=Merino+Wool+Close+Up",
      "/placeholder.svg?height=600&width=800&text=Merino+Ram",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-03-10T00:00:00Z",
    updatedAt: "2023-05-28T00:00:00Z",
    specifications: [
      { name: "Breed", value: "Merino" },
      { name: "Age", value: "1-3 years" },
      { name: "Wool Quality", value: "18-20 micron" },
      { name: "Average Weight", value: "70-90 kg (rams), 40-60 kg (ewes)" },
      { name: "Health Status", value: "Vaccinated, parasite control program, health certificates provided" },
    ],
    tags: ["sheep", "wool", "livestock", "merino"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 27,
    name: "Duroc Breeding Pigs",
    description:
      "Premium Duroc breeding pigs known for excellent growth rates, meat quality, and hardiness. Ideal for crossbreeding programs.",
    category: "Live Stock & Animals",
    subcategory: "Pigs",
    origin: "Denmark",
    price: "$450.00/head",
    numericPrice: 450.0,
    currency: "USD",
    unit: "head",
    minOrder: "5 head",
    leadTime: "2-4 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Duroc+Pig",
    images: [
      "/placeholder.svg?height=600&width=800&text=Duroc+Sow",
      "/placeholder.svg?height=600&width=800&text=Duroc+Boar",
      "/placeholder.svg?height=600&width=800&text=Duroc+Piglets",
      "/placeholder.svg?height=600&width=800&text=Duroc+Side+View",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-01-25T00:00:00Z",
    updatedAt: "2023-04-18T00:00:00Z",
    specifications: [
      { name: "Breed", value: "Duroc" },
      { name: "Age", value: "6-10 months" },
      { name: "Average Weight", value: "100-150 kg" },
      { name: "Litter Size", value: "10-12 piglets" },
      { name: "Health Status", value: "Vaccinated, health certificates provided" },
    ],
    tags: ["pigs", "pork", "livestock", "breeding"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 28,
    name: "Leghorn Laying Hens",
    description:
      "Productive White Leghorn laying hens known for high egg production. Efficient feed conversion and excellent egg quality.",
    category: "Live Stock & Animals",
    subcategory: "Poultry",
    origin: "Italy",
    price: "$12.00/bird",
    numericPrice: 12.0,
    currency: "USD",
    unit: "bird",
    minOrder: "50 birds",
    leadTime: "1-2 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Leghorn+Hen",
    images: [
      "/placeholder.svg?height=600&width=800&text=Leghorn+Hen+Side+View",
      "/placeholder.svg?height=600&width=800&text=Leghorn+Flock",
      "/placeholder.svg?height=600&width=800&text=Leghorn+Eggs",
      "/placeholder.svg?height=600&width=800&text=Leghorn+Close+Up",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-15T00:00:00Z",
    updatedAt: "2023-05-20T00:00:00Z",
    specifications: [
      { name: "Breed", value: "White Leghorn" },
      { name: "Age", value: "16-20 weeks (point of lay)" },
      { name: "Egg Production", value: "280-320 eggs per year" },
      { name: "Egg Color", value: "White" },
      { name: "Health Status", value: "Vaccinated, health certificates provided" },
    ],
    tags: ["poultry", "eggs", "chickens", "layers"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 29,
    name: "Nubian Dairy Goats",
    description:
      "High-quality Nubian dairy goats known for rich milk production. Excellent for cheese making with high butterfat content.",
    category: "Live Stock & Animals",
    subcategory: "Goats",
    origin: "France",
    price: "$280.00/head",
    numericPrice: 280.0,
    currency: "USD",
    unit: "head",
    minOrder: "5 head",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Nubian+Goat",
    images: [
      "/placeholder.svg?height=600&width=800&text=Nubian+Goat+Side+View",
      "/placeholder.svg?height=600&width=800&text=Nubian+Goat+Herd",
      "/placeholder.svg?height=600&width=800&text=Nubian+Goat+Milking",
      "/placeholder.svg?height=600&width=800&text=Nubian+Kid+Goats",
    ],
    inStock: true,
    featured: true,
    createdAt: "2023-03-05T00:00:00Z",
    updatedAt: "2023-06-10T00:00:00Z",
    specifications: [
      { name: "Breed", value: "Nubian" },
      { name: "Age", value: "1-3 years" },
      { name: "Milk Production", value: "1-2 liters per day" },
      { name: "Butterfat Content", value: "4-5%" },
      { name: "Health Status", value: "Vaccinated, parasite-free, health certificates provided" },
    ],
    tags: ["goats", "dairy", "livestock", "milk-production"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
  {
    id: 30,
    name: "Beehives with Colonies",
    description:
      "Established beehives with healthy colonies of Italian honey bees. Productive queens and strong worker populations.",
    category: "Live Stock & Animals",
    subcategory: "Bees",
    origin: "Italy",
    price: "$250.00/hive",
    numericPrice: 250.0,
    currency: "USD",
    unit: "hive",
    minOrder: "5 hives",
    leadTime: "2-3 weeks",
    image: "/placeholder.svg?height=400&width=600&text=Beehive",
    images: [
      "/placeholder.svg?height=600&width=800&text=Beehive+External",
      "/placeholder.svg?height=600&width=800&text=Honeycomb+Frame",
      "/placeholder.svg?height=600&width=800&text=Bee+Colony",
      "/placeholder.svg?height=600&width=800&text=Queen+Bee+Marked",
    ],
    inStock: true,
    featured: false,
    createdAt: "2023-02-28T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z",
    specifications: [
      { name: "Bee Type", value: "Italian Honey Bee (Apis mellifera ligustica)" },
      { name: "Hive Type", value: "Langstroth 10-frame" },
      { name: "Colony Strength", value: "8-10 frames of bees" },
      { name: "Queen Age", value: "Less than 1 year" },
      { name: "Health Status", value: "Inspected, disease-free, health certificates provided" },
    ],
    tags: ["bees", "honey", "pollinators", "beekeeping"],
    vendorId: 8,
    listingType: "sell", // Only for sale
  },
]

// Function to filter and search products
export function filterProducts(filters: ProductFilters): ProductsResponse {
  let filteredProducts = [...products]

  // Apply search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.origin.toLowerCase().includes(searchLower) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchLower))),
    )
  }

  // Apply category filter
  if (filters.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === filters.category!.toLowerCase(),
    )
  }

  // Apply subcategory filter
  if (filters.subcategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.subcategory?.toLowerCase() === filters.subcategory!.toLowerCase(),
    )
  }

  // Apply origin filter
  if (filters.origin) {
    filteredProducts = filteredProducts.filter(
      (product) => product.origin.toLowerCase() === filters.origin!.toLowerCase(),
    )
  }

  // Apply vendor filter
  if (filters.vendorId !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.vendorId === filters.vendorId)
  }

  // Apply listing type filter
  if (filters.listingType) {
    filteredProducts = filteredProducts.filter(
      (product) => product.listingType === filters.listingType || product.listingType === "both",
    )
  }

  // Apply price range filter
  if (filters.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.numericPrice >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.numericPrice <= filters.maxPrice!)
  }

  // Apply in-stock filter
  if (filters.inStock !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.inStock === filters.inStock)
  }

  // Apply featured filter
  if (filters.featured !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.featured === filters.featured)
  }

  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.numericPrice - b.numericPrice)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.numericPrice - a.numericPrice)
        break
      case "newest":
        filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case "popular":
        // For demo purposes, we'll just use featured as a proxy for popularity
        filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }
  }

  // Calculate pagination
  const total = filteredProducts.length
  const page = filters.page || 1
  const limit = filters.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(total / limit)

  return {
    products: paginatedProducts,
    total,
    page,
    limit,
    totalPages,
  }
}

// Function to get products available for hire
export function getHireProducts(filters: ProductFilters = {}): ProductsResponse {
  return filterProducts({
    ...filters,
    listingType: "hire",
  })
}

// Function to get a single product by ID
export function getProductById(id: number): Product | null {
  return products.find((product) => product.id === id) || null
}

// Function to get related products
export function getRelatedProducts(productId: number, limit = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return []

  // Find products in the same category, excluding the current product
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== productId).slice(0, limit)

  // If we don't have enough related products, add some from other categories
  if (relatedProducts.length < limit) {
    const additionalProducts = products
      .filter((p) => p.category !== product.category && p.id !== productId)
      .slice(0, limit - relatedProducts.length)

    return [...relatedProducts, ...additionalProducts]
  }

  return relatedProducts
}

// Function to get unique categories
export function getCategories(): string[] {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories)
}

// Function to get unique origins
export function getOrigins(): string[] {
  const origins = new Set(products.map((product) => product.origin))
  return Array.from(origins)
}

// Function to get price range
export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((product) => product.numericPrice)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}

// Function to get a vendor by ID
export function getVendorById(id: number): Vendor | null {
  return vendors.find((vendor) => vendor.id === id) || null
}

// Function to get a vendor by store URL
export function getVendorByStoreUrl(storeUrl: string): Vendor | null {
  return vendors.find((vendor) => vendor.storeUrl === storeUrl) || null
}

// Function to get vendor products
export function getVendorProducts(vendorId: number, filters: ProductFilters = {}): VendorResponse {
  const vendor = getVendorById(vendorId)
  if (!vendor) {
    return {
      vendor: {} as Vendor,
      products: [],
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  }

  // Apply vendor filter and other filters
  const result = filterProducts({ ...filters, vendorId })

  return {
    vendor,
    ...result,
  }
}

// Function to get featured vendors
export function getFeaturedVendors(limit = 4): Vendor[] {
  return vendors.filter((vendor) => vendor.featuredVendor).slice(0, limit)
}

// Function to get all vendors with pagination
export function getVendors(
  page = 1,
  limit = 10,
): { vendors: Vendor[]; total: number; page: number; limit: number; totalPages: number } {
  const total = vendors.length
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedVendors = vendors.slice(startIndex, endIndex)
  const totalPages = Math.ceil(total / limit)

  return {
    vendors: paginatedVendors,
    total,
    page,
    limit,
    totalPages,
  }
}

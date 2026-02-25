export interface Vendor {
  id: number;
    name: string;
      logo: string;
        description: string;
          country: string;
            joinedDate: string;
              rating: number;
                verificationStatus: "verified" | "pending" | "unverified";
                  contactEmail: string;
                    contactPhone?: string;
                      website?: string;
                        storeUrl: string;
                          productsCount: number;
                            featuredVendor?: boolean;
                            }

                            export interface Product {
                              id: number;
                                name: string;
                                  description: string;
                                    category: string;
                                      subcategory?: string;
                                        origin: string;
                                          price: string;
                                            numericPrice: number; // For sorting and filtering
                                              currency: string;
                                                unit: string;
                                                  minOrder: string;
                                                    leadTime: string;
                                                      image: string;
                                                        images?: string[];
                                                          inStock: boolean;
                                                            featured?: boolean;
                                                              createdAt: string;
                                                                updatedAt: string;
                                                                  specifications?: Array<{
                                                                      name: string;
                                                                          value: string;
                                                                            }>;
                                                                              tags?: string[];
                                                                                vendorId: number; // Link product to vendor
                                                                                  listingType: "sell" | "hire" | "both"; // Product sale or hire options
                                                                                    hirePrice?: string; // Price for hiring
                                                                                      hireNumericPrice?: number; // Numeric hire price for sorting/filtering
                                                                                        hirePriceUnit?: "hour" | "day" | "week" | "month"; // Unit for hire price
                                                                                          hireAvailability?: {
                                                                                              startDate?: string;
                                                                                                  endDate?: string;
                                                                                                      availableNow: boolean;
                                                                                                        };
                                                                                                          hireTerms?: string; // Additional terms for hire
                                                                                                            includesOperator?: boolean; // For machinery - operator included or not
                                                                                                            }

                                                                                                            export interface ProductsResponse {
                                                                                                              products: Product[];
                                                                                                                total: number;
                                                                                                                  page: number;
                                                                                                                    limit: number;
                                                                                                                      totalPages: number;
                                                                                                                      }

                                                                                                                      export interface ProductFilters {
                                                                                                                        search?: string;
                                                                                                                          category?: string;
                                                                                                                            subcategory?: string;
                                                                                                                              origin?: string;
                                                                                                                                minPrice?: number;
                                                                                                                                  maxPrice?: number;
                                                                                                                                    inStock?: boolean;
                                                                                                                                      featured?: boolean;
                                                                                                                                        vendorId?: number;
                                                                                                                                          listingType?: "sell" | "hire" | "both";
                                                                                                                                            sortBy?: "price-asc" | "price-desc" | "newest" | "popular";
                                                                                                                                              page?: number;
                                                                                                                                                limit?: number;
                                                                                                                                                }

                                                                                                                                                export interface VendorResponse {
                                                                                                                                                  vendor: Vendor;
                                                                                                                                                    products: Product[];
                                                                                                                                                      total: number;
                                                                                                                                                        page: number;
                                                                                                                                                          limit: number;
                                                                                                                                                            totalPages: number;
                                                                                                                                                            }

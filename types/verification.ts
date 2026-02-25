export interface VerificationRequest {
  id: string;
    vendorId: number;
      status: "pending" | "approved" | "rejected";
        submittedAt: string;
          reviewedAt?: string;
            documents: VerificationDocument[];
              notes?: string;
              }

              export interface VerificationDocument {
                id: string;
                  type: "business_license" | "identity" | "certification" | "tax" | "other";
                    name: string;
                      url: string;
                        uploadedAt: string;
                          verified: boolean;
                          }

                          export interface VerificationCriteria {
                            id: string;
                              name: string;
                                description: string;
                                  required: boolean;
                                    documentTypes: string[]; // Fixed property name here
                                    }

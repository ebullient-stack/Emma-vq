'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Data for government programs
const governmentPrograms = [
  {
    id: 1,
    title: 'Agricultural Development Program',
    description: 'Government-backed loans for farm development and modernization',
    details: [
      { label: 'Interest Rate', value: '2.5% - 4.0%' },
      { label: 'Funding Amount', value: '$50,000 - $2,000,000' },
      { label: 'Term Length', value: '5 - 25 years' },
      { label: 'Application Deadline', value: 'Quarterly cycles' },
    ],
    buttonText: 'Check Eligibility',
    buttonLink: '/loan-application',
    type: 'high-approval',
  },
  {
    id: 2,
    title: 'Crop Insurance Subsidy',
    description: 'Government program to subsidize crop insurance premiums',
    details: [
      { label: 'Subsidy Rate', value: 'Up to 65% of premium' },
      { label: 'Coverage', value: 'Multiple peril coverage' },
      { label: 'Eligible Crops', value: 'Most major crops' },
      { label: 'Application Period', value: 'Before planting season' },
    ],
    buttonText: 'Apply for Subsidy',
    buttonLink: '/loan-application',
    type: 'subsidized',
  },
  {
    id: 3,
    title: 'Agricultural Tax Incentives',
    description: 'Tax benefits and deductions for qualifying farm operations',
    details: [
      { label: 'Benefit Type', value: 'Tax deductions & credits' },
      { label: 'Eligible Expenses', value: 'Equipment, land, operations' },
      { label: 'Filing Period', value: 'Annual tax season' },
      { label: 'Documentation', value: 'Expense records required' },
    ],
    buttonText: 'Learn More',
    buttonLink: '/loan-application',
    type: 'tax-relief',
  },
]

// Data for advisory services
const advisoryServices = [
  {
    id: 1,
    title: 'One-on-One Consultations',
    description: 'Meet with our finance experts to discuss your specific agricultural financing needs and get personalized recommendations.',
    points: [
      'Assess your financing needs and goals',
      'Compare loan options and terms',
      'Prepare application documents',
    ],
    buttonText: 'Book Consultation',
    buttonLink: '/support',
  },
  {
    id: 2,
    title: 'Business Planning Support',
    description: 'Get help developing a comprehensive business plan that demonstrates your agricultural operation’s viability to lenders.',
    points: [
      'Financial projections and analysis',
      'Risk assessment and mitigation',
      'Market and competitive analysis',
    ],
    buttonText: 'Learn More',
    buttonLink: '/support',
  },
]

// Card component for government programs
function ProgramCard({ program }) {
  const typeStyles = {
    'high-approval': 'bg-green-50 border-green-300',
    'subsidized': 'bg-yellow-50 border-yellow-300',
    'tax-relief': 'bg-blue-50 border-blue-300',
  }

  return (
    <div className={`rounded-lg border p-6 flex flex-col justify-between ${typeStyles[program.type]}`}>
      <div>
        <h4 className="text-xl font-semibold mb-2">{program.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
        <ul className="text-sm mb-4 space-y-1">
          {program.details.map((detail, idx) => (
            <li key={idx} className="flex justify-between border-b border-gray-200 pb-1">
              <span className="font-medium">{detail.label}</span>
              <span>{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href={program.buttonLink}>
        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
          {program.buttonText}
        </Button>
      </Link>
    </div>
  )
}

// Card component for advisory services
function AdvisoryCard({ service }) {
  return (
    <div className="bg-card rounded-lg border border-border p-8 flex flex-col justify-between">
      <div>
        <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
          {service.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href={service.buttonLink}>
        <Button variant="outline">{service.buttonText}</Button>
      </Link>
    </div>
  )
}

// Main Page Component
export default function AgriFinancePage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Personalized Financial Guidance?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Our team of agricultural finance specialists can help you navigate the complex world of farm financing and find the right solution for your business.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/support">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium">
                  Contact an Advisor
                </Button>
              </Link>

            </div>
          </div>

          {/* Government Programs Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Government Programs & Tax Incentives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {governmentPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </section>

          {/* Advisory Services Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Advisory Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advisoryServices.map((service) => (
                <AdvisoryCard key={service.id} service={service} />
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/agri-finance-1">
              <Button variant="outline">← Previous</Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 3</span>
            <Link href="/agri-finance-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Next →</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
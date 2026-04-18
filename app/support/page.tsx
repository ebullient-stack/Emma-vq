'use client'

import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Support form submitted:', formData)
  }

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Support & Contact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Get in touch with our support team through any of these channels.
            </p>
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Email Support */}
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    support@farmtridge.com
                  </p>
                  <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Support */}
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    +256 753 934 803
                  </p>
                  <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM EAT</p>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Available on our website
                  </p>
                  <p className="text-xs text-muted-foreground">Instant support</p>
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Kampala, Uganda<br />East Africa
                  </p>
                  <p className="text-xs text-muted-foreground">By appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border border-border">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and our support team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+256 700 000 000"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us more about your issue or question..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Submit Support Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What are your business hours?', a: 'We operate Monday to Friday, 9:00 AM to 6:00 PM East African Time (EAT).' },
                { q: 'How long does it take to get a response?', a: 'Email inquiries typically receive a response within 24 hours. Phone support is available during business hours.' },
                { q: 'Do you offer technical support?', a: 'Yes, our technical support team is available to help with any platform-related issues.' },
                { q: 'Can I request a demo or consultation?', a: 'Absolutely! Contact our team to schedule a demo or consultation at your convenience.' },
              ].map((item, idx) => (
                <Card key={idx} className="border border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

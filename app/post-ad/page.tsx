'use client'

import { useState, useRef, DragEvent, useEffect } from 'react'
import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, Check, Trash2 } from 'lucide-react'

const productCategories = [
  'Fruits & Vegetables',
  'Coffee & Tea',
  'Grains & Cereals',
  'Spices & Herbs',
  'Nuts & Seeds',
  'Livestock',
  'Agricultural Machinery',
  'Seeds & Seedlings',
  'Fertilizers',
  'Processed Products',
]

interface AdFormData {
  title: string
  category: string
  description: string
  price: string
  quantity: string
  location: string
  contact: string
  email: string
  phone: string
}

export default function PostAdPage() {
  const [step, setStep] = useState<'type' | 'details' | 'images' | 'submit'>('type')
  const [userType, setUserType] = useState<'supplier' | 'worker' | null>(null)
  const [formData, setFormData] = useState<AdFormData>({
    title: '',
    category: '',
    description: '',
    price: '',
    quantity: '',
    location: '',
    contact: '',
    email: '',
    phone: '',
  })
  const [images, setImages] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // --- Persist form data and step in localStorage ---
  useEffect(() => {
    const savedForm = localStorage.getItem('adFormData')
    const savedImages = localStorage.getItem('adFormImages')
    const savedStep = localStorage.getItem('adFormStep')
    const savedUserType = localStorage.getItem('adFormUserType')

    if (savedForm) setFormData(JSON.parse(savedForm))
    if (savedImages) {
      const imageFiles = JSON.parse(savedImages) as string[]
      // Cannot restore File objects from strings; user will need to re-upload
      setImages([])
    }
    if (savedStep) setStep(savedStep as 'type' | 'details' | 'images' | 'submit')
    if (savedUserType) setUserType(savedUserType as 'supplier' | 'worker')
  }, [])

  useEffect(() => {
    localStorage.setItem('adFormData', JSON.stringify(formData))
    localStorage.setItem('adFormStep', step)
    if (userType) localStorage.setItem('adFormUserType', userType)
    // Only store image names, cannot persist File objects
    if (images.length > 0) localStorage.setItem('adFormImages', JSON.stringify(images.map(i => i.name)))
  }, [formData, step, images, userType])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'))
    setImages(prev => [...prev, ...validFiles])
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files)
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    // Simulate production-ready submission (replace with real API call)
    const payload = { userType, ...formData, images: images.map(f => f.name) }
    console.log('Submitting ad to backend...', payload)
    setIsSubmitted(true)

    // Clear localStorage after submission
    localStorage.removeItem('adFormData')
    localStorage.removeItem('adFormImages')
    localStorage.removeItem('adFormStep')
    localStorage.removeItem('adFormUserType')
  }

  if (isSubmitted) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="max-w-md mx-auto px-4 py-12">
            <Card className="border border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Ad Posted Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Your ad has been posted and is now visible to buyers and partners. You can manage your ads from your account dashboard.
                </p>
                <div className="space-y-3">
                  <Link href="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Back to Home
                    </Button>
                  </Link>
                  <Link href="/post-ad">
                    <Button variant="outline" className="w-full">
                      Post Another Ad
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Your Agricultural Ad</h1>
            <p className="text-lg text-muted-foreground">
              Reach thousands of buyers and partners by posting your products or services
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex gap-4 mb-12 justify-center">
            {['Type', 'Details', 'Images', 'Submit'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === ['type', 'details', 'images', 'submit'][index]
                      ? 'bg-blue-600 text-white'
                      : ['type', 'details', 'images', 'submit'].indexOf(step) > index
                        ? 'bg-green-600 text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                >
                  {['type', 'details', 'images', 'submit'].indexOf(step) > index ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="ml-2 text-sm font-medium text-foreground">{label}</span>
                {index < 3 && <div className="w-12 h-1 bg-muted mx-2" />}
              </div>
            ))}
          </div>

          {/* Step 1: User Type */}
          {step === 'type' && (
            <Card className="border border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">What are you posting?</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setUserType('supplier')
                      setStep('details')
                    }}
                    className="w-full p-6 border-2 border-border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all text-left"
                  >
                    <h3 className="font-bold text-foreground mb-2 text-lg">Agricultural Products or Services</h3>
                    <p className="text-muted-foreground text-sm">
                      Post products for sale or services you offer (supplies, machinery, livestock, etc.)
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setUserType('worker')
                      setStep('details')
                    }}
                    className="w-full p-6 border-2 border-border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all text-left"
                  >
                    <h3 className="font-bold text-foreground mb-2 text-lg">Farm Labor or Expertise</h3>
                    <p className="text-muted-foreground text-sm">
                      Post your skills and services as a farm worker, technician, or agricultural professional
                    </p>
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Ad Details */}
          {step === 'details' && (
            <Card className="border border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Your Ad Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ad Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Fresh Organic Coffee Beans"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a category</option>
                    {productCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your product or service in detail..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Price and Quantity */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., $15.50/kg"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 100 kg"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, Country"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1234567890"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button variant="outline" onClick={() => setStep('type')} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep('images')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!formData.title || !formData.category || !formData.description}
                  >
                    Next: Add Images
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Images */}
          {step === 'images' && (
            <Card className="border border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Add Product Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-border'
                    }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current?.click()}
                >
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-foreground font-medium mb-2">Upload Images</p>
                  <p className="text-muted-foreground text-sm mb-4">Drag and drop images or click to browse</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    ref={inputRef}
                  />
                  <Button as="span" variant="outline">
                    Choose Images
                  </Button>
                </div>

                {images.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">{images.length} images selected</p>
                    <div className="grid grid-cols-3 gap-3">
                      {images.map((img, i) => {
                        const url = URL.createObjectURL(img)
                        return (
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                            <img src={url} alt={img.name} className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              className="absolute top-1 right-1 bg-red-500 p-1 rounded-full text-white hover:bg-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-6">
                  <Button variant="outline" onClick={() => setStep('details')} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep('submit')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Review & Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Submit */}
          {step === 'submit' && (
            <Card className="border border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Review Your Ad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 bg-muted p-6 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Title</p>
                    <p className="font-medium text-foreground">{formData.title}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground">{formData.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Price</p>
                      <p className="font-medium text-foreground">{formData.price}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Description</p>
                    <p className="text-sm text-foreground">{formData.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm text-foreground">{formData.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Images</p>
                      <p className="text-sm text-foreground">{images.length} images</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    By posting this ad, you agree to our terms and conditions. Your ad will be visible to buyers and partners immediately.
                  </p>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button variant="outline" onClick={() => setStep('images')} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    Post Ad Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
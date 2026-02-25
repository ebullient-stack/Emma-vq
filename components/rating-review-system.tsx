"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ThumbsUp, ThumbsDown, User, Calendar } from "lucide-react"

interface RatingReviewProps {
  isOpen: boolean
  onClose: () => void
  itemName: string
  itemType: string
  ownerName: string
  bookingId: string
  onReviewSubmit: (review: ReviewData) => void
}

interface ReviewData {
  rating: number
  title: string
  comment: string
  wouldRecommend: boolean
  categories: {
    condition: number
    communication: number
    value: number
    overall: number
  }
}

interface ExistingReview {
  id: string
  reviewerName: string
  rating: number
  title: string
  comment: string
  date: Date
  verified: boolean
  helpful: number
}

export function RatingReviewSystem({
  isOpen,
  onClose,
  itemName,
  itemType,
  ownerName,
  bookingId,
  onReviewSubmit,
}: RatingReviewProps) {
  const [step, setStep] = useState<"rate" | "review" | "success">("rate")
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [categories, setCategories] = useState({
    condition: 0,
    communication: 0,
    value: 0,
    overall: 0,
  })
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewComment, setReviewComment] = useState("")
  const [wouldRecommend, setWouldRecommend] = useState<boolean | null>(null)

  // Mock existing reviews
  const existingReviews: ExistingReview[] = [
    {
      id: "1",
      reviewerName: "John K.",
      rating: 5,
      title: "Excellent equipment, great service",
      comment: "The machinery was in perfect condition and the owner was very helpful. Would definitely rent again!",
      date: new Date("2024-01-15"),
      verified: true,
      helpful: 12,
    },
    {
      id: "2",
      reviewerName: "Sarah M.",
      rating: 4,
      title: "Good value for money",
      comment: "Equipment worked well for our farming needs. Minor issue with delivery timing but overall satisfied.",
      date: new Date("2024-01-10"),
      verified: true,
      helpful: 8,
    },
  ]

  const handleStarClick = (value: number, category?: keyof typeof categories) => {
    if (category) {
      setCategories({ ...categories, [category]: value })
    } else {
      setRating(value)
    }
  }

  const handleSubmitReview = () => {
    const reviewData: ReviewData = {
      rating,
      title: reviewTitle,
      comment: reviewComment,
      wouldRecommend: wouldRecommend || false,
      categories,
    }
    onReviewSubmit(reviewData)
    setStep("success")
  }

  const renderStars = (
    currentRating: number,
    onStarClick: (value: number) => void,
    onStarHover?: (value: number) => void,
    size: "sm" | "md" | "lg" = "md",
  ) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    }

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} cursor-pointer transition-colors ${
              star <= (hoverRating || currentRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => onStarClick(star)}
            onMouseEnter={() => onStarHover && onStarHover(star)}
            onMouseLeave={() => onStarHover && onStarHover(0)}
            aria-label={`Rate ${star} out of 5 stars`}
          />
        ))}
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            {step === "rate" && "Rate Your Experience"}
            {step === "review" && "Write a Review"}
            {step === "success" && "Review Submitted"}
          </DialogTitle>
        </DialogHeader>

        {step === "rate" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-1">{itemName}</h3>
              <p className="text-sm text-muted-foreground">Rented from {ownerName}</p>
              <p className="text-xs text-muted-foreground">Booking ID: {bookingId}</p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">How was your overall experience?</h3>
                <div className="flex justify-center mb-2">
                  {renderStars(rating, (value) => handleStarClick(value), setHoverRating, "lg")}
                </div>
                <p className="text-sm text-muted-foreground">
                  {rating === 0 && "Click to rate"}
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Rate specific aspects:</h4>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Equipment Condition</span>
                    {renderStars(categories.condition, (value) => handleStarClick(value, "condition"))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Owner Communication</span>
                    {renderStars(categories.communication, (value) => handleStarClick(value, "communication"))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Value for Money</span>
                    {renderStars(categories.value, (value) => handleStarClick(value, "value"))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Overall Experience</span>
                    {renderStars(categories.overall, (value) => handleStarClick(value, "overall"))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm mb-3">Would you recommend this {itemType} to others?</p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant={wouldRecommend === true ? "default" : "outline"}
                    onClick={() => setWouldRecommend(true)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Yes
                  </Button>
                  <Button
                    variant={wouldRecommend === false ? "default" : "outline"}
                    onClick={() => setWouldRecommend(false)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    No
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Skip Review
              </Button>
              <Button onClick={() => setStep("review")} disabled={rating === 0 || wouldRecommend === null}>
                Continue to Review
              </Button>
            </div>
          </div>
        )}

        {step === "review" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Your Rating:</span>
                {renderStars(rating, () => {}, undefined, "sm")}
                <span className="text-sm">({rating}/5)</span>
              </div>
              <p className="text-sm text-muted-foreground">Would recommend: {wouldRecommend ? "Yes" : "No"}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="reviewTitle">Review Title</Label>
                <input
                  id="reviewTitle"
                  className="w-full p-2 border rounded-md"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  placeholder="Summarize your experience in a few words"
                  aria-describedby="review-title-desc"
                />
                <div id="review-title-desc" className="sr-only">
                  Enter a brief title for your review
                </div>
              </div>

              <div>
                <Label htmlFor="reviewComment">Your Review</Label>
                <Textarea
                  id="reviewComment"
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="Share details about your experience with this equipment and owner..."
                  rows={4}
                  aria-describedby="review-comment-desc"
                />
                <div id="review-comment-desc" className="sr-only">
                  Share detailed feedback about your experience
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("rate")}>
                Back to Rating
              </Button>
              <Button onClick={handleSubmitReview} disabled={!reviewTitle.trim() || !reviewComment.trim()}>
                Submit Review
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="h-8 w-8 text-green-600" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Thank you for your review!</h3>
              <p className="text-muted-foreground">
                Your feedback helps other users make informed decisions and helps owners improve their service.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-left">
              <h4 className="font-medium mb-2">Your Review Summary:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span>Rating:</span>
                  {renderStars(rating, () => {}, undefined, "sm")}
                  <span>({rating}/5)</span>
                </div>
                <p>
                  <span className="text-muted-foreground">Title:</span> {reviewTitle}
                </p>
                <p>
                  <span className="text-muted-foreground">Recommendation:</span> {wouldRecommend ? "Yes" : "No"}
                </p>
              </div>
            </div>

            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        )}

        {/* Show existing reviews */}
        {step === "rate" && existingReviews.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <h4 className="font-medium mb-4">Recent Reviews</h4>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {existingReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{review.reviewerName}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating, () => {}, undefined, "sm")}
                      </div>
                    </div>
                    <h5 className="font-medium text-sm mb-1">{review.title}</h5>
                    <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {review.date.toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {review.helpful} helpful
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

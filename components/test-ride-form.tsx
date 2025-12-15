"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin } from "lucide-react"
import { format } from "date-fns"

export function TestRideForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    location: "",
    bikeModel: "",
    roadType: "city",
    date: null,
    timeSlot: "",
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the form data
    console.log("Form submitted:", formData)
    setStep(4) // Move to confirmation step
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Book Your Test Ride</h2>
        <p className="mt-2 text-muted-foreground">Complete the form below to schedule your test ride experience</p>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="mb-8">
          <div className="flex justify-between">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-red-600 text-white" : "border border-muted-foreground/30 text-muted-foreground"}`}
            >
              1
            </div>
            <div
              className={`flex-1 border-t border-muted-foreground/30 self-center ${step >= 2 ? "border-red-600/50" : ""}`}
            ></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-red-600 text-white" : "border border-muted-foreground/30 text-muted-foreground"}`}
            >
              2
            </div>
            <div
              className={`flex-1 border-t border-muted-foreground/30 self-center ${step >= 3 ? "border-red-600/50" : ""}`}
            ></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-red-600 text-white" : "border border-muted-foreground/30 text-muted-foreground"}`}
            >
              3
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter your city or zip code"
                  className="pl-10"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bike-model">Select Bike Model</Label>
              <Select
                value={formData.bikeModel}
                onValueChange={(value) => setFormData({ ...formData, bikeModel: value })}
              >
                <SelectTrigger id="bike-model">
                  <SelectValue placeholder="Choose a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phantom-x">Phantom X</SelectItem>
                  <SelectItem value="stealth-r">Stealth R</SelectItem>
                  <SelectItem value="vortex-gt">Vortex GT</SelectItem>
                  <SelectItem value="horizon-adv">Horizon ADV</SelectItem>
                  <SelectItem value="urban-s">Urban S</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Road Type</Label>
              <RadioGroup
                defaultValue="city"
                value={formData.roadType}
                onValueChange={(value) => setFormData({ ...formData, roadType: value })}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="city" id="city" />
                    <Label htmlFor="city">City Roads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mountain" id="mountain" />
                    <Label htmlFor="mountain">Mountain Roads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="track" id="track" />
                    <Label htmlFor="track">Track Experience</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleNext} className="w-full bg-red-600 text-white hover:bg-red-700">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time-slot">Select Time Slot</Label>
              <Select
                value={formData.timeSlot}
                onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}
              >
                <SelectTrigger id="time-slot">
                  <SelectValue placeholder="Choose a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                  <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={handlePrevious} className="w-full">
                Back
              </Button>
              <Button onClick={handleNext} className="w-full bg-red-600 text-white hover:bg-red-700">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="license">Motorcycle License Number</Label>
              <Input id="license" placeholder="Enter your license number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Riding Experience</Label>
              <Select defaultValue="intermediate">
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                  <SelectItem value="advanced">Advanced/Track Rider</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={handlePrevious} className="w-full">
                Back
              </Button>
              <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
                Book Test Ride
              </Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-green-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Test Ride Booked!</h3>
            <p className="text-muted-foreground">
              Your test ride has been successfully booked. We've sent a confirmation email with all the details.
            </p>
            <Button onClick={() => setStep(1)} variant="outline" className="w-full">
              Book Another Test Ride
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

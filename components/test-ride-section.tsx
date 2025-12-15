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

export function TestRideSection() {
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
    console.log("Form submitted:", formData)
    setStep(4)
  }

  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Book a Test Ride
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Experience the thrill of our superbikes firsthand. Book a test ride at your nearest location.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* LEFT: FORM */}
          <div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              {/* Steps Indicator */}
              <div className="mb-8">
                <div className="flex justify-between">
                  {[1, 2, 3].map((s, idx) => (
                    <div key={s} className="flex flex-1 items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          step >= s
                            ? "bg-red-600 text-white"
                            : "border border-muted-foreground/30 text-muted-foreground"
                        }`}
                      >
                        {s}
                      </div>
                      {idx < 2 && (
                        <div
                          className={`flex-1 border-t self-center ${
                            step > s ? "border-red-600/50" : "border-muted-foreground/30"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 1 */}
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
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Bike Model</Label>
                    <Select
                      value={formData.bikeModel}
                      onValueChange={(value) =>
                        setFormData({ ...formData, bikeModel: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phantom-x">Phantom X</SelectItem>
                        <SelectItem value="stealth-r">Stealth R</SelectItem>
                        <SelectItem value="vortex-gt">Vortex GT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Road Type</Label>
                    <RadioGroup
                      value={formData.roadType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, roadType: value })
                      }
                    >
                      <div className="space-y-2">
                        {["city", "mountain", "track"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={type} />
                            <Label htmlFor={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1)} Roads
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <Button onClick={handleNext} className="w-full bg-red-600 hover:bg-red-700">
                    Continue
                  </Button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time Slot</Label>
                    <Select
                      value={formData.timeSlot}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeSlot: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9–12)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1–4)</SelectItem>
                        <SelectItem value="evening">Evening (5–7)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={handlePrevious} className="w-full">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="w-full bg-red-600 hover:bg-red-700">
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input required />
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={handlePrevious} className="w-full">
                      Back
                    </Button>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Book Test Ride
                    </Button>
                  </div>
                </form>
              )}

              {/* CONFIRMATION */}
              {step === 4 && (
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-green-600">Test Ride Booked!</h3>
                  <p className="text-muted-foreground">
                    A confirmation email has been sent to you.
                  </p>
                  <Button onClick={() => setStep(1)} variant="outline">
                    Book Another
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: INFO PANEL */}
          <div className="flex flex-col justify-center rounded-xl border bg-card p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Why Book a <span className="text-red-600">Test Ride?</span>
            </h3>

            <p className="mb-6 text-muted-foreground">
              Feel the power, comfort, and precision before you decide.
            </p>

            <ul className="space-y-4">
              {[
                "Real road & track experience",
                "Guided by certified experts",
                "No pressure or obligation",
                "Safety-first ride protocols",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-red-600/10 p-4 text-sm font-medium text-red-600">
              ⚡ Limited slots available — book early!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

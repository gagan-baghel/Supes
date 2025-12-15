"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function TestRideFAQ() {
  const faqs = [
    {
      question: "How long does a typical test ride last?",
      answer:
        "Our standard test rides last approximately 30 minutes for street experiences, 45 minutes for mountain road experiences, and full-day sessions for track experiences. This gives you enough time to get a feel for the bike's performance and handling characteristics.",
    },
    {
      question: "Can I test ride more than one bike?",
      answer:
        "Yes, you can test ride multiple bikes in a single day, subject to availability. We recommend booking in advance if you'd like to try several models, as our popular bikes tend to be reserved quickly, especially on weekends.",
    },
    {
      question: "What happens if I damage the bike during a test ride?",
      answer:
        "All test riders are required to sign a liability waiver before the test ride. You may be responsible for damages caused during your test ride, which is why we require all riders to have experience appropriate for the bike they're testing. We recommend checking your personal insurance coverage before your test ride.",
    },
    {
      question: "Do you provide helmets and gear for test rides?",
      answer:
        "We provide helmets for test rides if you don't have your own, but we strongly recommend using your own properly fitted helmet. For other protective gear (jacket, gloves, boots), you must bring your own. We require all riders to wear appropriate protective gear for safety reasons.",
    },
    {
      question: "Can I bring a passenger on my test ride?",
      answer:
        "For safety reasons, passengers are not allowed on standard test rides. Our test rides are designed to give you the opportunity to evaluate the bike's performance and handling, which is best done without a passenger.",
    },
    {
      question: "What if the weather is bad on my scheduled test ride day?",
      answer:
        "In case of inclement weather (heavy rain, snow, or extreme temperatures), we may reschedule your test ride for safety reasons. We'll contact you as soon as possible if weather conditions require rescheduling, and we'll work with you to find a suitable alternative date.",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-2 text-muted-foreground">Find answers to common questions about our test ride program</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

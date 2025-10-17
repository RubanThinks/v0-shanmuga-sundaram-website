"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ExecutiveSection from "@/components/executive-section"
import PoliciesSection from "@/components/policies-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <ExecutiveSection />
      <PoliciesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

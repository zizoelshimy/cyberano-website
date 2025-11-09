"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <Header />
      <HeroSection isLoaded={isLoaded} />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

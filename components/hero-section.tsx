"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleExploreClick = () => {
    const servicesSection = document.querySelector("#services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.15), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div
          className={`mb-8 inline-block transform transition-all duration-1000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="w-32 h-32 mx-auto relative">
            <Image
              src="/cyberano-logo.png"
              alt="Cyberano Logo"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(217,119,6,0.4)]"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent animate-pulse">
            Cyberano
          </span>
        </h1>

        {/* Slogan */}
        <p
          className={`text-2xl md:text-3xl bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-light mb-12 transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Empowering Tomorrow's Minds
        </p>

        {/* Subtitle */}
        <p
          className={`text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto transform transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Master cybersecurity from fundamentals to expertise with hands-on learning and real-world application.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={handleExploreClick}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </button>
          <button className="px-8 py-4 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

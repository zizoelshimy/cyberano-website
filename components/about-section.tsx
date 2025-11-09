"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-4 border-t border-amber-900/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Our Vision
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 rounded-2xl blur-xl" />

            <div className="relative bg-black/40 border border-amber-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  "Where innovation meets action — we blend learning with real-world application to turn knowledge into
                  impact.
                </p>
                <p className="text-xl md:text-2xl mb-8">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-semibold">
                    Our vision is to empower learners to build, create, and lead through hands-on, future-focused
                    experiences."
                  </span>
                </p>
              </blockquote>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

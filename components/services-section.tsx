"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, BookOpen, Award } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    tagline: "Empowering businesses with end-to-end protection and proactive defense.",
    points: [
      "Penetration Testing & Vulnerability Assessment",
      "Corporate Cybersecurity Training",
      "Network & Cloud Security Setup",
      "SOC & 24/7 Threat Monitoring",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    tagline: "From fundamentals to mastery — learn by doing.",
    points: [
      "Structured learning paths: Beginner → Intermediate → Advanced",
      "Specialized focus areas: Red Team, Blue Team, Cloud Security",
      "Real-world labs, guided practice, and live workshops",
    ],
    cta: {
      text: "Browse Courses",
      href: "/courses",
    },
  },
  {
    icon: Award,
    title: "Get Certified",
    tagline: "Master the world's top cybersecurity certifications with hands-on preparation.",
    points: [
      "Global programs: CompTIA Security+, CEH, CISSP, CISM, AWS Security",
      "Advanced offensive certifications: OSCP, eJPT, PenTest+, eCPPT",
      "Comprehensive study materials, mock exams, and personalized roadmaps",
    ],
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-24 px-4 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive solutions for your cybersecurity needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card content */}
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-amber-500/20 group-hover:border-amber-500/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 backdrop-blur-sm">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-600/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] transition-all duration-300">
                        <Icon className="w-8 h-8 text-amber-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-amber-300/80 text-sm mb-6 font-light">{service.tagline}</p>

                    {/* Points */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {service.cta && (
                      <Link
                        href={service.cta.href}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                      >
                        {service.cta.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

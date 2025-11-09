"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const courses = [
  {
    id: "pentest-pro",
    title: "PenTest Pro",
    description:
      "A hands-on, end-to-end penetration testing course that takes you from fundamentals to professional red-team techniques. You'll learn reconnaissance, vulnerability assessment, exploitation, privilege escalation, pivoting, and reporting — with labs mapped to CEH, CompTIA Security+, eJPT and OSCP skills so you leave with practical experience and portfolio-ready projects.",
    highlights: [
      "Reconnaissance & Information Gathering",
      "Vulnerability Assessment & Exploitation",
      "Privilege Escalation & Pivoting",
      "Post-Exploitation & Reporting",
      "Real-world labs & OSCP-aligned projects",
    ],
  },
  {
    id: "network-foundations",
    title: "Network Foundations & Security",
    description:
      "A practical networking course designed for cybersecurity practitioners: OSI/TCP-IP, IP addressing & subnetting, VLANs, routing, core protocols (ARP/DNS/DHCP/ICMP), packet analysis with Wireshark, and defensive controls (firewalls, IDS/IPS, segmentation). Includes labs and a capstone to design, attack, and harden a complete virtual network.",
    highlights: [
      "OSI Model & TCP/IP Stack",
      "IP Addressing & Subnetting",
      "Routing & Network Protocols",
      "Packet Analysis with Wireshark",
      "Defensive Controls & Firewalls",
      "Virtual Network Design Capstone",
    ],
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    description:
      "A clear, beginner-friendly overview of cybersecurity principles: threat types, malware, social engineering, basic cryptography, device & data protection, and organizational controls. Ideal for newcomers and staff awareness — focuses on practical safeguards, policy basics, and hands-on exercises to build a security mindset.",
    highlights: [
      "Threat Types & Malware Analysis",
      "Social Engineering & Phishing",
      "Cryptography Basics",
      "Device & Data Protection",
      "Organizational Security Controls",
      "Practical Security Mindset Building",
    ],
  },
  {
    id: "socx",
    title: "SOCX",
    description:
      "SOCX is a 100% hands-on SOC (Security Operations Center) training designed to turn you into a real-world security analyst. You'll learn how to monitor, detect, investigate, and respond to cyber threats using tools like SIEM, EDR, and threat-hunting frameworks. From log analysis to real incident response, SOCX builds your skills through practical labs and real attack simulations.",
    highlights: [
      "SIEM & Log Analysis",
      "EDR (Endpoint Detection & Response)",
      "Threat Hunting & Investigation",
      "Incident Response Procedures",
      "Real Attack Simulations",
      "Security Alert Triage & Analysis",
    ],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <Header />

      <main className="relative py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 hover:border-amber-500/80 text-amber-400 font-semibold rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Main Page
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Our Courses
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Master cybersecurity through comprehensive, hands-on training programs
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 hover:border-amber-500/60 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
              >
                <h2 className="text-3xl font-bold text-amber-400 mb-4">{course.title}</h2>

                <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-amber-500 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

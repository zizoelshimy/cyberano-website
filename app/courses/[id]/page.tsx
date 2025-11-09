"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const courseDetails = {
  "pentest-pro": {
    title: "PenTest Pro",
    subtitle: "End-to-End Penetration Testing Mastery",
    description:
      "A hands-on, end-to-end penetration testing course that takes you from fundamentals to professional red-team techniques. You'll learn reconnaissance, vulnerability assessment, exploitation, privilege escalation, pivoting, and reporting — with labs mapped to CEH, CompTIA Security+, eJPT and OSCP skills so you leave with practical experience and portfolio-ready projects.",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    certifications: ["CEH", "CompTIA Security+", "eJPT", "OSCP"],
    modules: [
      {
        name: "Module 1: Reconnaissance & Information Gathering",
        topics: ["Passive reconnaissance", "Active scanning", "OSINT techniques", "Target enumeration"],
      },
      {
        name: "Module 2: Vulnerability Assessment",
        topics: ["Vulnerability scanning", "Manual testing", "Exploitation techniques", "Severity assessment"],
      },
      {
        name: "Module 3: Exploitation & Post-Exploitation",
        topics: ["Payload generation", "Privilege escalation", "Pivoting", "Persistence mechanisms"],
      },
      {
        name: "Module 4: Reporting & Real-World Projects",
        topics: ["Professional reporting", "Portfolio projects", "Case studies", "Red-team operations"],
      },
    ],
  },
  "network-foundations": {
    title: "Network Foundations & Security",
    subtitle: "Networking for Cybersecurity Practitioners",
    description:
      "A practical networking course designed for cybersecurity practitioners: OSI/TCP-IP, IP addressing & subnetting, VLANs, routing, core protocols (ARP/DNS/DHCP/ICMP), packet analysis with Wireshark, and defensive controls (firewalls, IDS/IPS, segmentation). Includes labs and a capstone to design, attack, and harden a complete virtual network.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    certifications: ["CompTIA Network+", "Cisco CCNA"],
    modules: [
      {
        name: "Module 1: OSI Model & TCP/IP",
        topics: ["OSI layers", "TCP/IP stack", "Protocol hierarchy", "Data encapsulation"],
      },
      {
        name: "Module 2: IP Addressing & Subnetting",
        topics: ["IPv4 fundamentals", "CIDR notation", "Subnetting strategies", "IPv6 basics"],
      },
      {
        name: "Module 3: Routing & Core Protocols",
        topics: ["Static routing", "Dynamic routing", "DNS/DHCP/ARP", "ICMP & troubleshooting"],
      },
      {
        name: "Module 4: Security & Capstone",
        topics: ["Firewalls", "IDS/IPS", "Network segmentation", "Virtual network design project"],
      },
    ],
  },
  "cybersecurity-essentials": {
    title: "Cybersecurity Essentials",
    subtitle: "Foundational Security Knowledge for Everyone",
    description:
      "A clear, beginner-friendly overview of cybersecurity principles: threat types, malware, social engineering, basic cryptography, device & data protection, and organizational controls. Ideal for newcomers and staff awareness — focuses on practical safeguards, policy basics, and hands-on exercises to build a security mindset.",
    duration: "6 weeks",
    level: "Beginner",
    certifications: ["CompTIA Security+", "GIAC Security Essentials (GSEC)"],
    modules: [
      {
        name: "Module 1: Threat Landscape & Malware",
        topics: ["Threat types", "Malware categories", "Attack vectors", "Risk assessment"],
      },
      {
        name: "Module 2: Social Engineering & Human Factor",
        topics: ["Phishing attacks", "Pretexting", "Baiting", "User awareness training"],
      },
      {
        name: "Module 3: Cryptography & Data Protection",
        topics: ["Encryption basics", "Hashing", "Digital signatures", "Data classification"],
      },
      {
        name: "Module 4: Organizational Security",
        topics: ["Security policies", "Access controls", "Compliance frameworks", "Incident reporting"],
      },
    ],
  },
  socx: {
    title: "SOCX",
    subtitle: "Security Operations Center & Incident Response",
    description:
      "SOCX is a 100% hands-on SOC (Security Operations Center) training designed to turn you into a real-world security analyst. You'll learn how to monitor, detect, investigate, and respond to cyber threats using tools like SIEM, EDR, and threat-hunting frameworks. From log analysis to real incident response, SOCX builds your skills through practical labs and real attack simulations.",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    certifications: ["GIAC Security Operations Certified (GSOC)", "CompTIA CySA+"],
    modules: [
      {
        name: "Module 1: SIEM & Log Analysis",
        topics: ["SIEM fundamentals", "Log collection", "Correlation rules", "Alert tuning"],
      },
      {
        name: "Module 2: Threat Detection & Hunting",
        topics: ["EDR tools", "Threat hunting", "Behavior analysis", "Indicator of compromise"],
      },
      {
        name: "Module 3: Incident Investigation",
        topics: ["Incident triage", "Timeline analysis", "Forensic artifacts", "Root cause analysis"],
      },
      {
        name: "Module 4: Incident Response & Real Simulations",
        topics: ["Response procedures", "Containment strategies", "Recovery planning", "Attack simulations"],
      },
    ],
  },
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courseDetails[params.id as keyof typeof courseDetails]

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-amber-400 hover:text-amber-300">
            Back to Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <Header />

      <main className="relative py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Courses
          </Link>

          {/* Course Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                {course.title}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">{course.subtitle}</p>

            {/* Course Meta */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Duration</p>
                <p className="text-lg font-semibold text-amber-400">{course.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Level</p>
                <p className="text-lg font-semibold text-amber-400">{course.level}</p>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">{course.description}</p>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Aligned Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.certifications.map((cert, idx) => (
                <div key={idx} className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4 text-center">
                  <p className="text-amber-300 font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-8">Course Modules</h2>
            <div className="space-y-6">
              {course.modules.map((module, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{module.name}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {module.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href={`mailto:cyberano11@gmail.com?subject=Interest in ${course.title} Course`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/40"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

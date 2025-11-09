"use client"

import Link from "next/link"

const courses = [
  {
    id: "pentest-pro",
    title: "PenTest Pro",
    shortDesc: "End-to-end penetration testing from fundamentals to professional red-team techniques.",
    icon: "🔓",
  },
  {
    id: "network-foundations",
    title: "Network Foundations & Security",
    shortDesc: "Practical networking course for cybersecurity practitioners with hands-on labs.",
    icon: "🌐",
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    shortDesc: "Beginner-friendly overview of cybersecurity principles and practical safeguards.",
    icon: "🛡️",
  },
  {
    id: "socx",
    title: "SOCX",
    shortDesc: "100% hands-on SOC training to become a real-world security analyst.",
    icon: "👁️",
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="relative py-20 px-4 md:px-8">
      {/* Section background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Our Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Master cybersecurity through structured, hands-on learning</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{course.icon}</div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">{course.shortDesc}</p>

                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 group/btn"
                >
                  Browse Course
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useInView } from 'react-intersection-observer'
import { Trophy, Users, Globe, Star } from 'lucide-react'

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "150+",
      label: "Awards Won",
      subtitle: "Making us a globally recognized studio"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "97%",
      label: "Client Satisfaction",
      subtitle: "Clients trust us for their next project"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "10x",
      label: "Traffic Boost",
      subtitle: "Average increase in client engagement"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "200+",
      label: "Projects Delivered",
      subtitle: "Universes created across industries"
    }
  ]

  const achievements = [
    "SOTD x 13",
    "Developer Awards x 7", 
    "Honorable Mention x 60",
    "Studio of the Year (nomination) x 7",
    "FOTD x 6",
    "2 x Honoree",
    "3 x Nominee"
  ]

  return (
    <section className="section-padding bg-dark-100">
      <div className="container mx-auto px-6">
        {/* Main Stats */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 150} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-center mb-4 text-accent">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-dark-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-dark-600">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Great ideas make happy clients{' '}
            <span className="gradient-text">- and win awards too</span>
          </h2>
          
          <p className="text-dark-600 text-lg mb-12 max-w-3xl mx-auto">
            Awards aren&apos;t everything—but hey, we love when the talent, creativity, 
            and collaboration behind each project get recognized.
          </p>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-dark-200 border border-dark-300 hover:border-accent transition-colors duration-300"
              >
                <div className="text-accent font-medium text-sm">
                  {achievement}
                </div>
              </div>
            ))}
          </div>

          <button className="btn-secondary">
            Check Out the Trophy Shelf
          </button>
        </div>
      </div>
    </section>
  )
}

export default Stats 
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Award } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filters = ['all', 'branding', 'digital', 'innovation']
  
  const projects = [
    {
      id: 1,
      title: 'TechFlow Platform',
      category: 'digital',
      tags: ['Web Development', 'UX/UI', 'React'],
      description: 'A revolutionary platform connecting technology innovators with forward-thinking companies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      awards: ['Site of the Day', 'Best UX'],
    },
    {
      id: 2,
      title: 'Verde Wellness',
      category: 'branding',
      tags: ['Brand Identity', 'Logo Design', 'Visual Identity'],
      description: 'Complete brand transformation for a sustainable wellness company.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      awards: ['Design Excellence'],
    },
    {
      id: 3,
      title: 'Future Commerce',
      category: 'innovation',
      tags: ['E-commerce', 'AI Integration', 'Mobile App'],
      description: 'Next-generation shopping experience with AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      awards: ['Innovation Award', 'Best Mobile'],
    },
    {
      id: 4,
      title: 'Artisan Collective',
      category: 'digital',
      tags: ['Portfolio', 'WebGL', 'Interactive'],
      description: 'Immersive digital gallery showcasing contemporary artisan works.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
      awards: ['FWA Winner'],
    },
    {
      id: 5,
      title: 'Quantum Labs',
      category: 'branding',
      tags: ['Tech Branding', 'Corporate Identity'],
      description: 'Cutting-edge identity for a quantum computing research laboratory.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      awards: ['Brand of the Year'],
    },
    {
      id: 6,
      title: 'EcoSphere App',
      category: 'innovation',
      tags: ['Sustainability', 'Mobile', 'IoT'],
      description: 'Smart environmental monitoring app connecting urban communities.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
      awards: ['Green Tech Award'],
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="work" className="section-padding bg-dark-200">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm uppercase tracking-wider mb-4 block">
            Our Work
          </span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
            For crafting bold{' '}
            <span className="gradient-text">digital realities</span>,{' '}
            creativity knows no limits
          </h2>
          <p className="text-dark-600 text-xl max-w-3xl mx-auto mb-12">
            Every project is an opportunity to explore, innovate, and create meaningful connections.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-dark-100'
                    : 'bg-dark-300 text-dark-600 hover:bg-dark-400'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group cursor-pointer transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="btn-secondary w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-dark-300 text-dark-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Awards */}
                {project.awards.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-xs text-accent">
                      {project.awards.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio 
'use client'

import { useEffect, useRef } from 'react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Left content animation
        gsap.fromTo(leftContentRef.current, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Right content animation
        gsap.fromTo(rightContentRef.current, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: rightContentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Values section animation
        gsap.fromTo(valuesRef.current?.children || [], 
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

      } catch (error) {
        console.error('Error loading GSAP:', error)
        // Fallback to CSS animations
        if (leftContentRef.current) leftContentRef.current.classList.add('animate-fade-in-up')
        if (rightContentRef.current) rightContentRef.current.classList.add('animate-fade-in-up')
        if (valuesRef.current) valuesRef.current.classList.add('animate-fade-in-up')
      }
    }

    initAnimations()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={leftContentRef}>
            <div className="mb-6">
              <span className="text-accent font-mono text-sm uppercase tracking-wider">
                About gojitech
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 lg:mb-8 leading-tight">
              <span className="block sm:inline">Innovating </span>
              <span 
                className="block sm:inline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #0ea5e9, #3B82F6, #06B6D4, #00ff88)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'aurora 4s ease-in-out infinite'
                }}
              >
                Healthcare
              </span>{' '}
              <span className="block sm:inline">Through </span>
              <span 
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #0ea5e9, #3B82F6, #06B6D4, #00ff88)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'aurora 4s ease-in-out infinite'
                }}
              >
                AI
              </span>
            </h2>
            
            <div className="text-dark-600 text-base lg:text-lg leading-relaxed space-y-4">
              <p>
                gojitech is at the forefront of healthcare innovation, leveraging artificial intelligence 
                to streamline processes and improve patient outcomes. Our comprehensive suite of solutions 
                addresses the most pressing challenges in modern healthcare.
              </p>
              <p>
                From intelligent claims processing to personalized wellness guidance, we're building 
                the future of healthcare technology with a focus on efficiency, accuracy, and accessibility.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef}>
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-primary-500/10 border border-accent/20">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-dark-600 leading-relaxed mb-6 text-sm lg:text-base">
                To revolutionize healthcare management by creating intelligent, user-friendly solutions 
                that enhance efficiency and improve patient care through cutting-edge AI technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-dark-100 border border-dark-300">
                  <div className="text-xl lg:text-2xl font-bold gradient-text mb-2">AI-Powered</div>
                  <div className="text-dark-600 text-sm">Solutions</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-dark-100 border border-dark-300">
                  <div className="text-xl lg:text-2xl font-bold gradient-text mb-2">Healthcare</div>
                  <div className="text-dark-600 text-sm">Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16 lg:mt-20 pt-16 lg:pt-20 border-t border-dark-300">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Our Core Values
            </h3>
            <p className="text-dark-600 max-w-2xl mx-auto text-base lg:text-lg px-4">
              The principles that guide our innovation and drive our commitment to healthcare excellence.
            </p>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pushing the boundaries of what\'s possible in healthcare technology through continuous research and development.'
              },
              {
                title: 'Accuracy',
                description: 'Ensuring precision in every solution we develop, because healthcare decisions matter and accuracy saves lives.'
              },
              {
                title: 'Accessibility',
                description: 'Making advanced healthcare technology accessible to all, breaking down barriers to quality care.'
              },
              {
                title: 'Security',
                description: 'Protecting sensitive healthcare data with enterprise-grade security measures and compliance standards.'
              },
              {
                title: 'Efficiency',
                description: 'Streamlining healthcare processes to reduce costs and improve outcomes for providers and patients.'
              },
              {
                title: 'Trust',
                description: 'Building lasting relationships with healthcare providers through reliable, transparent, and effective solutions.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 lg:p-8 rounded-2xl bg-transparent border border-dark-300/30 hover:border-accent/50 transition-all duration-300"
              >
                <h4 className="text-lg lg:text-xl font-bold mb-4 text-accent">
                  {value.title}
                </h4>
                <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
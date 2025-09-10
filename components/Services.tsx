'use client'

import { useEffect, useRef } from 'react'
import { Brain, FileText, Leaf, Smartphone, Target, Store, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const servicesGridRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Brain,
      title: 'claimRx 2.0',
      subtitle: 'AI-Powered Claims Processing',
      description: (
        <>
          Cannabinoid-based wellness deserves the same digital infrastructure as any other therapeutic service. ClaimRx is Canada's first intelligent claims platform for covered cannabinoid therapies.
        </>
      ),
      features: ['Automated Review', 'Error Detection', 'Fast Processing', 'Compliance Check'],
      image: '/images/gojiRx.png',
      link: '/gojirx'
    },
    {
      icon: Leaf,
      title: 'guideRx',
      subtitle: 'Wellness Platform',
      description: (
        <>
          GuideRx is a navigation tool to consolidate the scientific body-of-knowledge on cannabinoids in the user’s finger tips.  It empowers wellness seekers, patients, healthcare professionals, and educators alike with research summaries, links to the literature and studies, and personalized product formulations. The Cannabis Wellness Navigator is a plain-language version of GuideRx that can be white-labelled by retailers and used by their wellness seekers.
        </>
      ),
      features: ['Clinical Research', 'Product Formulations', 'Safety Alerts', 'Wellness Guidance'],
      image: '/images/search3.png',
      link: '/guiderx'
    },
    {
      icon: Target,
      title: 'selectRx',
      subtitle: 'Intelligent Product Selection',
      description: (
        <>
          SelectRx is a retail catalogue management system that eliminates the confusion in selecting products from large catalogues or formularies that wellness seekers typically find overwhelming.  Product formulations and wellness seekers’ purchase preferences instantly filter out the catalogue or formulary to provide a concise list of products that meet the wellness seeker’s needs.
        </>
      ),
      features: ['Product Discovery', 'AI Matching', 'Real-time Analytics', 'Quality Assurance'],
      image: '/images/guideRx2.png',
      link: '/selectrx'
    },
    {
      icon: Store,
      title: 'Pharmacy Network',
      subtitle: 'Pharmacy-Led Circle of Care',
      description: (
        <>
          Licenced sellers (LSs) are connected to an innovative program delivering a pharmacy-led circle of care where the physician issues the medical document to the pharmacist who manages the cannabis therapy within the broader medication profile.  The LS simply received the registration, medical document and subsequent orders. The program reach is over 85% of pharmacies in British Columbia and 65% or pharmacies in English Canada. <br /><br />
          <span className="text-accent font-medium">Powered by 36Eight Technologies</span>
        </>
      ),
      features: ['Circle of Care', 'Physician Engagement', 'Pharmacy Management', 'Wide Network Reach'],
      image: '/images/middle.png',
      link: '/pharmacy-network'
    },
    {
      icon: BookOpen,
      title: 'Formulary',
      subtitle: 'AI-Maintained Formulary (Coming Soon)',
      description: (
        <>
          
          An AI-maintained formulary driven by the GuideRx knowledge base and reviewed by an independent advisory group.  Ingested into the SelectRx catalogue management system, the formulary standard will provide the platform for insurers to expand cannabinoid therapy beyond health spending accounts as economic study demonstrate the business case for such therapies; all expanding market size and reach for Licensed Sellers.
        </>
      ),
      features: ['AI-Maintained', 'Knowledge Base Driven', 'Independent Review', 'Insurance Integration'],
      image: '/images/coming-soon3.jpg',
      link: '/formulary'
    }
  ]

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Header animation
        gsap.fromTo(headerRef.current, 
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
              trigger: headerRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Services cards animation
        gsap.fromTo(servicesGridRef.current?.children || [], 
          {
            y: 60,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: servicesGridRef.current,
              start: 'top 75%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

      } catch (error) {
        console.error('Error loading GSAP:', error)
        // Fallback to CSS animations
        if (headerRef.current) headerRef.current.classList.add('animate-fade-in-up')
        if (servicesGridRef.current) servicesGridRef.current.classList.add('animate-fade-in-up')
      }
    }

    initAnimations()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <div className="mb-6">
            <span className="text-accent font-mono text-sm uppercase tracking-wider">
              Our Solutions
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 lg:mb-8 leading-tight px-4">
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
              AI-Powered
            </span>{' '}
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
              Solutions
            </span>
          </h2>
          
          <p className="text-dark-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Transforming healthcare through intelligent automation, personalized guidance, 
            and streamlined processes that benefit providers and patients alike.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {/* First 3 items */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index}
                  href={service.link}
                  className="group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden bg-transparent border border-dark-300/30 rounded-2xl p-6 lg:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 block"
                >
                  {/* Product Image */}
                  <div className="relative w-full max-w-80 h-60 sm:h-80 mx-auto mb-6 rounded-lg sm:rounded-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {service.link === '/guiderx' ? (
                          <>
                            guideRx<sup className="text-[0.65em] align-super">™</sup>
                          </>
                        ) : service.link === '/gojirx' ? (
                          <>
                            claimRx<sup className="text-[0.65em] align-super">™</sup> 2.0
                          </>
                        ) : service.link === '/selectrx' ? (
                          <>
                            selectRx<sup className="text-[0.65em] align-super">™</sup>
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="text-accent text-sm font-medium uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm text-dark-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Indicator */}
                    <div className="pt-4">
                      <span className="text-accent font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Learn More 
                        <span className="ml-2">→</span>
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </Link>
              )
            })}
          </div>
          
          {/* Last 2 items */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full justify-items-center">
            {services.slice(3).map((service, index) => {
              const IconComponent = service.icon
              const isFormulary = service.link === '/formulary'
              
              const cardContent = (
                <>
                  {/* Product Image */}
                  <div className="relative w-full max-w-80 h-60 sm:h-80 mx-auto mb-6 rounded-lg sm:rounded-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {service.link === '/formulary' ? (
                          <>
                            Formulary
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="text-accent text-sm font-medium uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm text-dark-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Indicator - Only show if not Formulary */}
                    {!isFormulary && (
                      <div className="pt-4">
                        <span className="text-accent font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          Learn More 
                          <span className="ml-2">→</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </>
              )

              return isFormulary ? (
                <div 
                  key={index + 3}
                  className="group hover:scale-105 transition-all duration-500 relative overflow-hidden bg-transparent border border-dark-300/30 rounded-2xl p-6 lg:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 block max-w-md cursor-default"
                >
                  {cardContent}
                </div>
              ) : (
                <Link 
                  key={index + 3}
                  href={service.link}
                  className="group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden bg-transparent border border-dark-300/30 rounded-2xl p-6 lg:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 block max-w-md"
                >
                  {cardContent}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20 pt-16 lg:pt-20 border-t border-dark-300 px-4">
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
            Ready to transform your healthcare operations?
          </h3>
          <p className="text-dark-600 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to discover how our AI-powered solutions can streamline your processes 
            and improve patient outcomes.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative overflow-hidden font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #0ea5e9, #3B82F6, #06B6D4, #00ff88)',
              backgroundSize: '200% auto',
              animation: 'aurora 4s ease-in-out infinite'
            }}
          >
            {/* Button background animation */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #00ff88, #0ea5e9, #3B82F6)',
                backgroundSize: '200% auto',
                animation: 'aurora 4s ease-in-out infinite reverse'
              }}
            />
            
            <span className="relative flex items-center text-dark-100 text-sm sm:text-base">
              Get Started Today
            </span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services 
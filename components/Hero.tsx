'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { animationManager, textReveal, magneticHover } from '@/lib/animations'


const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      title: 'gojiRx 2.0',
      subtitle: 'AI-Powered Claims Processing',
      image: '/images/gojiRx.png',
      link: '/gojirx'
    },
    {
      title: 'guideRx',
      subtitle: 'Cannabis Wellness Navigator',
      image: '/images/guideRx.png',
      link: '/guiderx'
    }
  ]

  useEffect(() => {
    const initAnimations = async () => {
      try {
        // Initialize animation manager
        const { gsap } = await animationManager.init()

        // Set initial opacity for text elements
        gsap.set([textRef.current, subtitleRef.current, buttonRef.current], {
          opacity: 0
        })

        // Images initial state is now handled by CSS

        // Synchronized animations - text and images start together
        const mainTimeline = gsap.timeline()
        
        // Main heading and images animate simultaneously 
        if (textRef.current) {
          mainTimeline.fromTo(textRef.current, 
            {
              opacity: 0,
              x: -100,
              rotationY: -15,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              scale: 1,
              duration: 1.5,
              ease: 'back.out(1.4)'
            }, 0.3
          )
        }

        // Images animate at the same time as the main title
        mainTimeline.fromTo(imagesRef.current, 
          {
            opacity: 0,
            scale: 0.9,
            x: 100
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.5,
            ease: 'power3.out'
          }, 0.3
        )

        // Subtitle appears after title and images
        mainTimeline.fromTo(subtitleRef.current, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 1.0
        )

        // Button appears last
        mainTimeline.fromTo(buttonRef.current, 
          {
            y: 30,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            onComplete: () => {
              // Add magnetic hover effect after animation
              if (buttonRef.current) {
                magneticHover(buttonRef.current, { strength: 0.4 })
              }
            }
          }, 1.4
        )

        // Scroll indicator animation
        const scrollIndicator = document.querySelector('.scroll-indicator')
        if (scrollIndicator) {
          gsap.fromTo(scrollIndicator,
            {
              opacity: 0
            },
            {
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 3
            }
          )
        }

        console.log('Advanced Hero animations initialized')

      } catch (error) {
        console.error('Error loading Hero animations:', error)
        // Fallback to CSS animations
        const elements = [textRef.current, subtitleRef.current, buttonRef.current]
        elements.forEach((element, index) => {
          if (element) {
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            element.classList.add('animate-fade-in-up')
            element.style.animationDelay = `${index * 0.2}s`
          }
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative py-20 px-4 sm:px-6"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Main Heading with character-by-character reveal */}
            <h1 
              ref={textRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-shadow leading-tight"
              style={{ opacity: 0, lineHeight: '1.1' }}
            >
              <div className="mb-2 lg:mb-4">
                <span className="block sm:inline">Transform </span>
                <span className="block sm:inline">Healthcare</span>
              </div>
              <div className="mb-2 lg:mb-4">
                <span className="block sm:inline">with </span>
                <span 
                  className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #0ea5e9, #3B82F6, #06B6D4, #00ff88)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'aurora 4s ease-in-out infinite'
                  }}
                >
                  AI-Driven
                </span>
              </div>
              <div>Innovation</div>
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="text-base sm:text-lg lg:text-xl text-dark-600 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              Revolutionize healthcare management with gojitech's suite of AI-powered solutions: streamlined claims processing, cannabis wellness guidance, and consumer-friendly claim submission.
            </p>

            {/* Enhanced Action Button */}
            <div className="flex justify-center lg:justify-start items-center">
              <button 
                ref={buttonRef}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative overflow-hidden font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
                style={{ 
                  opacity: 0, 
                  transform: 'translateY(30px) scale(0.9)',
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
                  Get Started
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column - Responsive Dashboard Screenshots */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
            <div ref={imagesRef} className="relative w-full h-full" style={{ opacity: 0 }}>
              
              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden w-full h-full">
                <div className="grid grid-cols-1 gap-4 h-full">
                  {/* gojiRx - Top */}
                  <div 
                    className="relative w-full h-full cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group"
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-dark-300/30 bg-white group-hover:border-accent/50 transition-all duration-500">
                      <Image
                        src={products[0].image}
                        alt={products[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-accent/20 transition-all duration-500"></div>
                      
                       {/* Product info overlay */}
                       <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                         <h3 className="text-lg font-bold mb-1">
                           {products[0].link === '/gojirx' ? (
                             <>
                               gojiRx<sup className="text-[0.65em] align-super">™</sup> 2.0
                             </>
                           ) : (
                             products[0].title
                           )}
                         </h3>
                        <p className="text-accent text-xs font-medium uppercase tracking-wider">
                          {products[0].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:flex w-full h-full gap-8">
                {/* gojiRx - Left side - Full height */}
                <div 
                  className="relative w-80 h-full z-30 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-dark-300/30 bg-white group-hover:border-accent/50 transition-all duration-500">
                    <Image
                      src={products[0].image}
                      alt={products[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-accent/20 transition-all duration-500"></div>
                    
                     {/* Hover overlay with product info */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                       <div className="p-6 text-white">
                         <h3 className="text-2xl font-bold mb-2">
                           {products[0].link === '/gojirx' ? (
                             <>
                               gojiRx<sup className="text-[0.65em] align-super">™</sup> 2.0
                             </>
                           ) : (
                             products[0].title
                           )}
                         </h3>
                        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
                          {products[0].subtitle}
                        </p>
                        <p className="text-sm opacity-90">Click to learn more</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating action indicator */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* guideRx - Right side - Full height */}
                <div 
                  className="relative w-80 h-full z-20 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-dark-300/30 bg-white group-hover:border-accent/50 transition-all duration-500">
                    <Image
                      src={products[1].image}
                      alt={products[1].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-accent/20 transition-all duration-500"></div>
                    
                    {/* Hover overlay with product info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-white">
                         <h3 className="text-2xl font-bold mb-2">
                           {products[1].link === '/guiderx' ? (
                             <>
                               guideRx<sup className="text-[0.65em] align-super">™</sup>
                             </>
                           ) : (
                             products[1].title
                           )}
                         </h3>
                        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
                          {products[1].subtitle}
                        </p>
                        <p className="text-sm opacity-90">Click to learn more</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating action indicator */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glowing elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary-500/30 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-primary-500/30 to-accent/30 rounded-full blur-3xl opacity-70"></div>
            
            {/* Additional light effects */}
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-500 rounded-full opacity-60 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Indicator - Right Bottom Corner
      <div className="scroll-indicator fixed bottom-8 right-8 z-20" style={{ opacity: 0 }}>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent" />
            <div className="absolute top-0 w-px h-6 bg-accent animate-pulse" />
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Hero 
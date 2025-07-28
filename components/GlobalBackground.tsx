'use client'

import { useEffect, useRef } from 'react'
import { parallaxScroll } from '@/lib/animations'

const GlobalBackground = () => {
  const bgElementsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const initBackgroundAnimations = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Advanced scroll-triggered parallax for gradient orbs
        bgElementsRef.current.forEach((element, index) => {
          if (element) {
            // Different parallax speeds for each orb
            const speed = [0.3, 0.6, 0.9][index] || 0.5
            
            gsap.fromTo(element, 
              {
                y: 0,
                rotation: 0,
                scale: 1
              },
              {
                y: -200 * speed,
                rotation: 360 * (index % 2 === 0 ? 1 : -1),
                scale: 1.2,
                ease: 'none',
                scrollTrigger: {
                  trigger: 'body',
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 1.5, // Smooth scroll following
                  invalidateOnRefresh: true
                }
              }
            )

            // Floating animation combined with scroll
            gsap.to(element, {
              x: Math.sin(index * 2) * 40,
              y: `+=${-20 + (index * 10)}`,
              duration: 6 + (index * 1.2),
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: index * 0.8
            })
          }
        })

        // Interactive grid that responds to scroll
        const gridElement = document.querySelector('.animated-grid')
        if (gridElement) {
          gsap.to(gridElement, {
            backgroundPosition: '100px 100px',
            ease: 'none',
            scrollTrigger: {
              trigger: 'body',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2,
              invalidateOnRefresh: true
            }
          })
        }

        // Particles with scroll-reactive movement
        const particles = document.querySelectorAll('.floating-particle')
        particles.forEach((particle, index) => {
          // Base floating animation
          gsap.to(particle, {
            x: Math.sin(index * 1.5) * 60,
            y: Math.cos(index * 1.5) * 40,
            rotation: 360,
            duration: 8 + (index * 0.7),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4
          })

          // Scroll-triggered vertical movement
          gsap.fromTo(particle,
            {
              y: '0px'
            },
            {
              y: `-${100 + (index * 20)}px`,
              ease: 'none',
              scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1 + (index * 0.1), // Varied scrub speeds
                invalidateOnRefresh: true
              }
            }
          )

                     // Opacity changes based on scroll
           gsap.fromTo(particle,
             {
               opacity: 0.3
             },
             {
               opacity: 0.8,
               ease: 'sine.inOut',
               scrollTrigger: {
                 trigger: 'body',
                 start: 'top top',
                 end: 'center center',
                 scrub: 0.5,
                 invalidateOnRefresh: true
               }
             }
           )
        })

        // Accent dots with scroll-reactive pulse
        const accentDots = document.querySelectorAll('.accent-dot')
        accentDots.forEach((dot, index) => {
          gsap.fromTo(dot,
            {
              scale: 1,
              opacity: 0.4
            },
            {
              scale: 1.5,
              opacity: 1,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.2,
                invalidateOnRefresh: true
              }
            }
          )
        })

        // Geometric shapes with scroll interaction
        const shapes = document.querySelectorAll('.bg-shape')
        shapes.forEach((shape, index) => {
          gsap.fromTo(shape,
            {
              rotation: 0,
              scale: 1
            },
            {
              rotation: 180 * (index % 2 === 0 ? 1 : -1),
              scale: 1.3,
              ease: 'none',
              scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
                invalidateOnRefresh: true
              }
            }
          )
        })

        // Smooth color transitions based on scroll
        gsap.fromTo('.global-bg-gradient',
          {
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
          },
          {
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            ease: 'none',
            scrollTrigger: {
              trigger: 'body',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 3,
              invalidateOnRefresh: true
            }
          }
        )

        console.log('Interactive background animations initialized')

      } catch (error) {
        console.error('Error loading background animations:', error)
      }
    }

    initBackgroundAnimations()
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main gradient background */}
      <div className="global-bg-gradient absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-200" />
      
      {/* Large gradient orbs with parallax */}
      <div 
        ref={(el) => {
          if (el && !bgElementsRef.current.includes(el)) {
            bgElementsRef.current[0] = el
          }
        }}
        className="absolute top-1/6 left-1/6 w-[500px] h-[500px] bg-gradient-to-r from-accent/15 to-primary-500/15 rounded-full blur-3xl"
      />
      <div 
        ref={(el) => {
          if (el && !bgElementsRef.current.includes(el)) {
            bgElementsRef.current[1] = el
          }
        }}
        className="absolute top-1/2 right-1/6 w-[400px] h-[400px] bg-gradient-to-r from-primary-500/15 to-accent/15 rounded-full blur-3xl"
      />
      <div 
        ref={(el) => {
          if (el && !bgElementsRef.current.includes(el)) {
            bgElementsRef.current[2] = el
          }
        }}
        className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-accent/10 to-primary-500/10 rounded-full blur-3xl"
      />
      
      {/* Animated grid pattern covering full page */}
      <div className="absolute inset-0 opacity-5">
        <div className="animated-grid absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 25s linear infinite'
        }} />
      </div>

      {/* Floating particles spread across the page */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1.5 h-1.5 bg-accent/30 rounded-full"
            style={{
              left: `${(Math.random() * 90) + 5}%`,
              top: `${(Math.random() * 90) + 5}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Additional accent elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="accent-dot absolute w-1 h-1 bg-primary-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${(Math.random() * 80) + 10}%`,
              animation: `pulse-glow ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle moving shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape absolute top-1/4 left-1/12 w-32 h-32 border border-accent/10 rounded-full animate-pulse" />
        <div className="bg-shape absolute bottom-1/3 right-1/12 w-24 h-24 border border-primary-500/10 rounded-full" style={{
          animation: 'morph 15s ease-in-out infinite'
        }} />
        <div className="bg-shape absolute top-2/3 left-1/4 w-20 h-20 border border-accent/5 rounded-full" style={{
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
      </div>
    </div>
  )
}

export default GlobalBackground 
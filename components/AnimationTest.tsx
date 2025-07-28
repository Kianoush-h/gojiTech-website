'use client'

import { useEffect, useRef } from 'react'
import { animationManager } from '@/lib/animations'

const AnimationTest = () => {
  const testRef = useRef<HTMLDivElement>(null)
  const boxesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const testAnimations = async () => {
      try {
        console.log('Starting animation test...')
        
        // Initialize animations
        const { gsap } = await animationManager.init()
        console.log('Animation manager initialized')

        // Test basic animation
        gsap.fromTo(testRef.current, 
          { 
            x: -100, 
            opacity: 0,
            rotation: 0
          },
          { 
            x: 0, 
            opacity: 1,
            rotation: 360,
            duration: 2,
            ease: 'bounce.out',
            delay: 0.5
          }
        )

        // Test scroll trigger animation
        gsap.fromTo(boxesRef.current?.children || [],
          {
            y: 100,
            opacity: 0,
            scale: 0.5
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: boxesRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              markers: true // Show debug markers
            }
          }
        )

        console.log('Animation test completed successfully')

      } catch (error) {
        console.error('Animation test failed:', error)
      }
    }

    testAnimations()
  }, [])

  return (
    <div className="min-h-screen bg-dark-200 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Animation Test Page
        </h1>
        
        {/* Basic Animation Test */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl text-white mb-4">Basic GSAP Animation</h2>
          <div 
            ref={testRef}
            className="w-20 h-20 bg-accent rounded-lg mx-auto"
            style={{ opacity: 0, transform: 'translateX(-100px)' }}
          ></div>
        </div>

        {/* Scroll Trigger Test */}
        <div className="mb-20">
          <h2 className="text-2xl text-white mb-8 text-center">ScrollTrigger Animation</h2>
          <div ref={boxesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="h-40 bg-primary-500 rounded-lg flex items-center justify-center"
                style={{ opacity: 0, transform: 'translateY(100px) scale(0.5)' }}
              >
                <span className="text-white text-2xl font-bold">Box {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Long content to test scrolling */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="h-40 bg-dark-300 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">Scroll Content {num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimationTest 
'use client'

import { useEffect } from 'react'
import { initAnimations } from '@/lib/animations'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const setupAnimations = async () => {
      try {
        // Initialize animation manager
        await initAnimations()
        console.log('Animation system initialized')

        // Initialize Lenis smooth scrolling
        const Lenis = (await import('lenis')).default
        
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
          touchMultiplier: 2,
        })

        // GSAP integration
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        console.log('Smooth scrolling initialized')

        // Clean up on unmount
        return () => {
          lenis.destroy()
          gsap.ticker.remove(() => {})
        }

      } catch (error) {
        console.error('Failed to initialize animations:', error)
        // Fallback to regular scrolling
        document.documentElement.style.scrollBehavior = 'smooth'
      }
    }

    setupAnimations()
  }, [])

  return (
    <div className="relative">
      <GlobalBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
} 
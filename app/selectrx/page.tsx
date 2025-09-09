'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Search, Filter, BarChart3, Clock, Shield, Users, Target } from 'lucide-react'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const SelectRxPage = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap')
        
        gsap.fromTo(heroRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
        )
      } catch (error) {
        console.error('Error loading animations:', error)
      }
    }

    initAnimations()
  }, [])

  const benefits = [
    {
      icon: Search,
      title: 'Catalogue/Formulary Filtering',
      description: 'Reduce overwhelming catalogues based on the therapeutic ingredients being sought.  Filter out all the marketing and branding and focus on whet’s needed – “just the facts”.'
    },
    {
      icon: Filter,
      title: 'Customer Management',
      description: 'Foster a more confident and positive customer user experience and focus staff time on their needs.'
    },
    {
      icon: Shield,
      title: 'Compliance and Safety',
      description: 'Ensure all products meet regulatory requirements and safety standards.'
    },
    {
      icon: BarChart3,
      title: 'Point-of-Sale Integration',
      description: 'Move the products to the point-of-sale system for quick processing of their purchase to send the customer happily on their way.'
    }
  ]

  return (
    <div className="relative">
      <GlobalBackground />
      <div className="relative z-10">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Link 
                    href="/"
                    className="inline-flex items-center text-accent hover:text-primary-500 transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                  
                  <h1 className="text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                    <span className="gradient-text">selectRx</span>
                    <span className="gradient-text align-super text-[0.5em] ml-1">™</span>
                  </h1>
                  
                  <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                  SelectRx is a retail catalogue management system that eliminates the confusion in selecting products from large catalogues or formularies that wellness seekers typically find overwhelming.  Product formulations and wellness seekers’ purchase preferences instantly filter out the catalogue or formulary to provide a concise list of products that meet the wellness seeker’s needs.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="btn-primary">
                      Get Started
                    </Link>
                    <Link href="#benefits" className="btn-secondary">
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="relative w-full max-w-lg mx-auto">
                    <Image
                      src="/images/guideRx.png"
                      // src="/images/search2.png"
                      alt="guideRx Cannabis Wellness Navigator"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
                  {/* Smart Product <span className="gradient-text">Selection Made Simple</span> */}
                  <span className="gradient-text">Catalogue/Formulary</span> Management Platform
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                Speed up product selection from overwhelming catalogues whose therapeutic ingredients, form and dose match medical recommendations and product formulations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div 
                      key={index}
                      className="group bg-transparent border border-dark-300/30 rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-dark-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Insights Post Section */}
          <section id="insights" className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-transparent border border-dark-300/30 rounded-2xl p-8 md:p-10">
                <div className="text-center mb-6">
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    selectRx<sup className="text-[0.65em] align-super">™</sup> Insight
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mt-3 mb-3">
                    Precision in Cannabis Product Selection
                  </h2>
                  <p className="text-dark-600 text-lg">
                    How intelligent matching transforms patient outcomes and provider confidence
                  </p>
                </div>

                <div className="space-y-6 text-dark-600 text-lg leading-relaxed">
                  <p>
                    The cannabis industry offers thousands of products with varying cannabinoid profiles, terpene combinations, and delivery methods. For healthcare providers and patients, navigating this complexity can be overwhelming and lead to suboptimal treatment outcomes.
                  </p>
                  <p>
                    selectRx<sup className="text-[0.65em] align-super">™</sup> eliminates the guesswork by providing intelligent product matching based on patient symptoms, medical history, and treatment goals. Our platform analyzes product data, lab results, and patient feedback to recommend the most suitable options.
                  </p>
                  <p>
                    This precision approach ensures that patients receive products most likely to provide therapeutic benefits while minimizing adverse effects, leading to better outcomes and increased confidence in cannabis-based treatments.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact" className="btn-secondary">Talk to Our Team</Link>
                  <Link href="#benefits" className="btn-secondary">Explore Benefits</Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center bg-gradient-to-r from-accent/10 to-primary-500/10 border border-accent/20 rounded-3xl p-12">
                <h2 className="text-4xl font-display font-bold mb-6">
                  Ready to Revolutionize Product Selection?
                </h2>
                <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                   Join healthcare providers who have improved patient outcomes through 
                   intelligent product matching with selectRx<sup className="text-[0.65em] align-super">™</sup>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      window.location.href = '/#contact';
                    }}
                    className="group relative overflow-hidden font-medium px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
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
                    
                    <span className="relative flex items-center text-dark-100">
                      Get Started Today
                    </span>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
                  </button>
                  <Link href="/#contact" className="btn-secondary">
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default SelectRxPage
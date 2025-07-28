'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Leaf, Brain, Users, Shield, Target, CheckCircle, Zap, BarChart } from 'lucide-react'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const GuideRxPage = () => {
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

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Leverage advanced AI to match client needs with optimal cannabis products based on clinical research.'
    },
    {
      icon: Target,
      title: 'Personalized Wellness Plans',
      description: 'Create tailored wellness plans that address individual patient needs and health goals.'
    },
    {
      icon: BarChart,
      title: 'Clinical Research Database',
      description: 'Access comprehensive clinical research data to support evidence-based recommendations.'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Streamline patient interactions and track wellness progress over time.'
    },
    {
      icon: Shield,
      title: 'Compliance & Safety',
      description: 'Ensure all recommendations meet regulatory requirements and safety standards.'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Get instant insights into product effectiveness and patient outcomes.'
    }
  ]

  const benefits = [
    {
      title: 'Enhanced Patient Outcomes',
      description: 'Improve patient satisfaction and wellness results through personalized recommendations.',
      highlight: 'Better Results'
    },
    {
      title: 'Increased Revenue',
      description: 'Optimize product recommendations to increase sales and customer loyalty.',
      highlight: 'Revenue Growth'
    },
    {
      title: 'Streamlined Operations',
      description: 'Reduce consultation time while providing more accurate recommendations.',
      highlight: 'Efficiency'
    },
    {
      title: 'Evidence-Based Decisions',
      description: 'Make informed recommendations backed by clinical research and data.',
      highlight: 'Scientific Approach'
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
                    <span className="gradient-text">guideRx</span>
                  </h1>
                  
                  <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                    Cannabis Wellness Navigator that empowers producers and retailers with AI-driven 
                    wellness recommendations, leveraging clinical research and comprehensive product databases.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="btn-primary">
                      Get Started
                    </Link>
                    <Link href="#features" className="btn-secondary">
                      Explore Features
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full max-w-lg mx-auto">
                    <Image
                      src="/images/guideRx.png"
                      alt="guideRx Cannabis Wellness Navigator"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
                  Intelligent <span className="gradient-text">Wellness Navigation</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Transform how you recommend cannabis products with AI-powered insights 
                  and evidence-based wellness guidance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div 
                      key={index}
                      className="group bg-transparent border border-dark-300/30 rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-dark-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
                  Benefits for <span className="gradient-text">Your Business</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Optimize your cannabis wellness operations and deliver better outcomes 
                  for your clients with our comprehensive platform.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-transparent border border-dark-300/30 rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="text-accent text-sm font-medium uppercase tracking-wider">
                        {benefit.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-dark-300/30">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
                  How <span className="gradient-text">guideRx</span> Works
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Input Patient Needs</h3>
                  <p className="text-dark-600">
                    Enter patient symptoms, preferences, and wellness goals into our intuitive interface.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
                  <p className="text-dark-600">
                    Our AI analyzes clinical research and product data to find optimal matches.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
                  <p className="text-dark-600">
                    Receive evidence-based product recommendations with dosage and usage guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center bg-gradient-to-r from-accent/10 to-primary-500/10 border border-accent/20 rounded-3xl p-12">
                <Leaf className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-4xl font-display font-bold mb-6">
                  Ready to Transform Cannabis Wellness?
                </h2>
                <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                  Join cannabis producers and retailers who are delivering better patient outcomes 
                  with AI-powered wellness recommendations.
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
                      Start Your Journey
                    </span>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
                  </button>
                  <Link href="/#contact" className="btn-secondary">
                    Request Demo
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

export default GuideRxPage 
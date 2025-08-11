'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, DollarSign, Clock, Shield, TrendingUp, Users, FileText, Zap } from 'lucide-react'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const GojiRxPage = () => {
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
      icon: DollarSign,
      title: 'Direct Billing to Insurers',
      description: 'Streamline payments by billing insurance companies directly, reducing administrative burden.'
    },
    {
      icon: Clock,
      title: 'Real-time Coverage Response',
      description: 'Get instant feedback on insurance coverage for immediate decision-making.'
    },
    {
      icon: Shield,
      title: 'Remove Payment Obstacles',
      description: 'Eliminate barriers to payment, ensuring smoother transactions.'
    },
    {
      icon: TrendingUp,
      title: 'Maximize Coverage Utilization',
      description: 'Help patients and providers fully utilize available insurance coverage.'
    },
    {
      icon: Users,
      title: 'Lower Out-of-Pocket Costs',
      description: 'Reduce patient expenses by maximizing insurance utilization.'
    },
    {
      icon: Zap,
      title: 'Reduce Administrative Burden',
      description: 'Cut administrative workload by 60-80%, focus on patient care.'
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
                    <span className="gradient-text">gojiRx</span>
                    <span className="gradient-text align-super text-[0.5em] ml-1">™</span>
                    <span className="gradient-text"> 2.0</span>
                  </h1>
                  
                  <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                    Revolutionize your medical claims processing with our AI-powered solution. 
                    Streamline billing, reduce administrative tasks by up to 80%, and ensure faster reimbursements.
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

                <div className="relative">
                  <div className="relative w-full max-w-lg mx-auto">
                    <Image
                      src="/images/gojiRx.png"
                      alt="gojiRx 2.0 Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
                  Transform Your <span className="gradient-text">Claims Processing</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Experience the power of AI-driven claims processing that transforms 
                  your healthcare operations and improves patient satisfaction.
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
                    gojiRx<sup className="text-[0.65em] align-super">™</sup> Insight
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mt-3 mb-3">
                    Closing the Claims Gap in Cannabinoid Therapy
                  </h2>
                  <p className="text-dark-600 text-lg">
                    Why cannabinoid treatments deserve the same approach as traditional prescriptions
                  </p>
                </div>

                <div className="space-y-6 text-dark-600 text-lg leading-relaxed">
                  <p>
                    In most healthcare systems, prescriptions are processed electronically, fast, accurate, and fully integrated with insurance plans. But when it comes to cannabinoid therapies, patients are still burdened with manual reimbursement, upfront payments, and administrative bottlenecks.
                  </p>
                  <p>
                    gojiRx<sup className="text-[0.65em] align-super">™</sup> changes that. Our platform connects licensed producers / cultivators, clinical pharmacies, and health benefit administrators to automate real-time claims processing for cannabinoid-based treatments. It ensures that patients receive coverage at the point of care, without the paperwork or financial strain.
                  </p>
                  <p>
                    This is equity. As cannabinoid wellness becomes more widely accepted, systems like gojiRx<sup className="text-[0.65em] align-super">™</sup> ensure that patients can access treatment with the same dignity and ease they expect from modern healthcare.
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
                  Ready to Transform Your Claims Processing?
                </h2>
                <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                   Join healthcare providers who have reduced administrative burden by up to 80% 
                   and accelerated their cash flow with gojiRx<sup className="text-[0.65em] align-super">™</sup> 2.0.
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

export default GojiRxPage 
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Smartphone, FileText, Shield, Clock, BarChart, CheckCircle, Zap, CreditCard } from 'lucide-react'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ClaimRxPage = () => {
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
      icon: Smartphone,
      title: 'User-Friendly Mobile App',
      description: 'Easily track cannabis purchases and manage claims on-the-go with our intuitive mobile interface.'
    },
    {
      icon: FileText,
      title: 'Purchase Tracking',
      description: 'Securely log and categorize all cannabis-related expenses with automated receipt scanning.'
    },
    {
      icon: Zap,
      title: 'Automated Claim Submission',
      description: 'Streamline the process of submitting claims to insurance providers with one-click submissions.'
    },
    {
      icon: Clock,
      title: 'Real-Time Status Updates',
      description: 'Stay informed about the progress of your claims at every stage with push notifications.'
    },
    {
      icon: Shield,
      title: 'Secure Documentation',
      description: 'Generate and store required documentation for medical cannabis approval with bank-level security.'
    },
    {
      icon: BarChart,
      title: 'Expense Analytics',
      description: 'Gain insights into your cannabis expenses and reimbursement patterns with detailed reports.'
    }
  ]

  const benefits = [
    {
      title: 'Simplified Expense Management',
      description: 'Track all your cannabis-related expenses in one place with automated categorization.',
      highlight: 'Easy Tracking'
    },
    {
      title: 'Faster Reimbursements',
      description: 'Get reimbursed faster with streamlined claim submissions and real-time tracking.',
      highlight: 'Quick Processing'
    },
    {
      title: 'Maximum Coverage Utilization',
      description: 'Ensure you\'re getting the most out of your insurance coverage with smart recommendations.',
      highlight: 'Optimized Benefits'
    },
    {
      title: 'Compliance Assurance',
      description: 'Stay compliant with all regulatory requirements and documentation standards.',
      highlight: 'Regulatory Compliance'
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
                    <span className="gradient-text">claimRx</span>
                  </h1>
                  
                  <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                    Streamline cannabis purchase tracking and insurance claims for patients and consumers. 
                    Our intuitive mobile app offers expense logging, automated claim submissions, 
                    and secure documentation management.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="btn-primary">
                      Get Started
                    </Link>
                    <Link href="#features" className="btn-secondary">
                      App Features
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full max-w-lg mx-auto">
                    <Image
                      src="/images/claimRx.png"
                      alt="claimRx Mobile App"
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
                  Powerful <span className="gradient-text">Mobile Features</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Everything you need to manage cannabis purchases, track expenses, 
                  and submit insurance claims from your mobile device.
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
                  Benefits for <span className="gradient-text">Patients & Consumers</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Take control of your cannabis expenses and insurance claims with 
                  our comprehensive mobile solution.
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
                  How <span className="gradient-text">claimRx</span> Works
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Simple steps to manage your cannabis expenses and insurance claims
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Download App</h3>
                  <p className="text-dark-600">
                    Download claimRx from the App Store or Google Play and create your account.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Track Purchases</h3>
                  <p className="text-dark-600">
                    Log your cannabis purchases by scanning receipts or manually entering details.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Submit Claims</h3>
                  <p className="text-dark-600">
                    Submit insurance claims with one click using our automated system.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Get Reimbursed</h3>
                  <p className="text-dark-600">
                    Track your claim status and receive reimbursements faster than ever.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* App Download Section */}
          <section className="section-padding bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center bg-gradient-to-r from-accent/10 to-primary-500/10 border border-accent/20 rounded-3xl p-12">
                <Smartphone className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-4xl font-display font-bold mb-6">
                  Download claimRx Today
                </h2>
                <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                  Take control of your cannabis expenses and insurance claims. 
                  Join thousands of patients who are saving time and money with claimRx.
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
                      Get the App
                    </span>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
                  </button>
                  <Link href="/#contact" className="btn-secondary">
                    Learn More
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

export default ClaimRxPage 
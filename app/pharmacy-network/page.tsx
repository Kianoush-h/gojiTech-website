'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Network, MapPin, Truck, Clock, Shield, Users, Store } from 'lucide-react'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const PharmacyNetworkPage = () => {
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
      icon: Network,
      title: 'Early Mover',
      description: 'Licenced seller advantage in moving into the pharmacy sector'
    },
    {
      icon: MapPin,
      title: 'Access to Patients',
      description: 'Enhanced access to medical programs where treatment modalities are more favorably accepted.'
    },
    {
      icon: Truck,
      title: 'Benefit Plan Access',
      description: 'Increased access to patients with insurance benefits'
    },
    {
      icon: Clock,
      title: 'Retention',
      description: 'Increase in long-tail sales and patient retention'
    },
    {
      icon: Shield,
      title: 'Stigma',
      description: 'Reduced stigma for the patient'
    },
    {
      icon: Users,
      title: 'Professionalization',
      description: 'Professionalized medical cannabis market more a part of healthcare ecosystem'
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
                  
                  <h1 className="text-6xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                    <span className="gradient-text">Pharmacy Network</span>
                    <br />
                    <span className="gradient-text">Circle of Care</span>
                  </h1>
                  
                  <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                  Licenced sellers (LSs) are connected to an innovative program delivering a pharmacy-led circle of care where the physician issues the medical document to the pharmacist who manages the cannabis therapy within the broader medication profile.  The LS simply received the registration, medical document and subsequent orders.
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
                    src="/images/middle.png"
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
                  Trusted <span className="gradient-text">Pharmacy Partners</span>
                </h2>
                <p className="text-dark-600 text-xl max-w-3xl mx-auto">
                  Our extensive network ensures patients have reliable access to quality cannabis 
                  products through verified and compliant pharmacy partners.
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
                  {/* <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    Pharmacy Network Insight
                  </span> */}
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mt-3 mb-3">
                  Pharmacy Network Circle of Care
                  </h2>
                  {/* <p className="text-dark-600 text-lg">
                    How a robust pharmacy network transforms patient access and care quality
                  </p> */}
                </div>

                <div className="space-y-6 text-dark-600 text-lg leading-relaxed">
                  <p>
                  Licenced sellers (LSs) are connected to an innovative program delivering a pharmacy-led circle of care where the physician issues the medical document to the pharmacist who manages the cannabis therapy within the broader medication profile.  The LS simply received the registration, medical document and subsequent orders.
                  </p>
                  <p>
                  The program reach is over 85% of pharmacies in British Columbia and 65% or pharmacies in English Canada and has accessed medical prescribers who had previously been reluctant to consider cannabinoid therapy as an option through events like grand rounds.
                  </p>
                  <p>
                  The patient first sees the medical practitioner who then sends the paperwork (registration information and medical document/prescription).  From there, the pharmacists leads the circle of care, managing the cannabinoid therapy within the broader medication profile, counsels the patient, assists the patient with product selection and acts as a single point-of-contact, even for order shipping to the patient.  Upon the order being placed, the claim is issued real-time to the patient’s insurer.
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
                  Ready to Join Our Pharmacy Network?
                </h2>
                <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                   Connect with our trusted network of pharmacy partners and provide 
                   your patients with reliable access to quality cannabis products.
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

export default PharmacyNetworkPage
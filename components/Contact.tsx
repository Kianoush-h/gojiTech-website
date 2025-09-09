'use client'

import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({
    type: 'idle'
  })

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo([formRef.current, infoRef.current], 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )

      } catch (error) {
        console.error('Error loading GSAP:', error)
        if (formRef.current) formRef.current.classList.add('animate-fade-in-up')
        if (infoRef.current) infoRef.current.classList.add('animate-fade-in-up')
      }
    }

    initAnimations()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
        setFormData({ name: '', email: '', company: '', message: '' }) // Reset form
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      })
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span 
            className="text-accent font-mono text-sm uppercase tracking-wider mb-4 block"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #0ea5e9, #3B82F6, #06B6D4, #00ff88)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'aurora 4s ease-in-out infinite'
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">
            Let's Transform{' '}
            <span 
              className="inline-block text-5xl lg:text-6xl font-display font-bold"
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
            Together
          </h2>
          <p className="text-dark-600 text-xl max-w-3xl mx-auto">
            Ready to revolutionize your healthcare operations with AI? 
            Contact our team to discuss your specific needs and discover how our solutions can benefit your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef}>
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg focus:border-accent focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your healthcare challenges and how we can help..."
                />
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`btn-primary w-full md:w-auto flex items-center justify-center ${
                    status.type === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status.type === 'success' && (
                  <div className="flex items-center text-green-500">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="flex items-center text-red-500">
                    <XCircle className="w-5 h-5 mr-2" />
                    <span>{status.message}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef}>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-dark-600">info@gojitechsystems.com</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-dark-600">Contact us via email for phone consultation</p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-dark-600">1200 Lawrence Ave E. #301<br />
                  North York, Ontario, Canada<br />
                  M3A 1C1</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-primary-500/10 border border-accent/20">
              <h4 className="text-xl font-bold mb-4">Why Choose gojitech?</h4>
              <ul className="space-y-2 text-dark-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  AI-powered healthcare solutions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  HIPAA compliant and secure
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  Proven track record in healthcare
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  24/7 technical support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
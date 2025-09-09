'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isProductPage = ['/gojirx', '/guiderx', '/selectrx', '/pharmacy-network', '/formulary'].includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false)
    }
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isDropdownOpen])

  const products = [
    { name: 'claimRx 2.0', href: '/gojirx', description: 'AI-Powered Claims Processing' },
    { name: 'guideRx', href: '/guiderx', description: 'Cannabis Wellness Navigator' },
    { name: 'selectRx', href: '/selectrx', description: 'Intelligent Product Selection' },
    { name: 'Pharmacy Network', href: '/pharmacy-network', description: 'Trusted Partner Network' },
    { name: 'Formulary (coming soon)', href: '/formulary', description: 'Evidence-Based Coverage' }
  ]

  const handleNavigation = (href: string) => {
    if (isHomePage) {
      // On home page, use anchor links for smooth scrolling
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // On product pages, navigate to home page with section anchor
      if (href.startsWith('#')) {
        window.location.href = `/${href}`
      }
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      // On home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // On product pages, navigate to home
      window.location.href = '/'
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-100/95 backdrop-blur-md border-b border-dark-300' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="flex items-center">
              <span className="text-6xl font-bold" style={{ color: '#11636D' }}>
                gojitech
              </span>
              <sup className="text-[1.1em] align-super ml-1" style={{ color: '#11636D' }}>™</sup>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <button
              onClick={() => handleNavigation('#home')}
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors duration-300"
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleNavigation('#about')}
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors duration-300"
            >
              About
            </button>

            {/* Meet With Us */}
            {/* <Link
              href="/meet-with-us"
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors duration-300"
            >
              Meet With Us
            </Link> */}

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  // If clicked normally, toggle dropdown. If ctrl/cmd clicked, navigate to services
                  if (e.ctrlKey || e.metaKey) {
                    handleNavigation('#services')
                  } else {
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                }}
                onDoubleClick={() => handleNavigation('#services')}
                className="nav-link text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors duration-300 flex items-center"
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-dark-100/95 backdrop-blur-md border border-dark-300 rounded-lg shadow-lg py-2">
                  {products.map((product, index) => {
                    const isFormulary = product.href === '/formulary'
                    
                    const content = (
                      <>
                        <div className="text-sm font-medium text-dark-900 hover:text-accent">
                          {product.href === '/guiderx' ? (
                            <>
                              guideRx<sup className="text-[0.65em] align-super">™</sup>
                            </>
                          ) : product.href === '/gojirx' ? (
                            <>
                              claimRx<sup className="text-[0.65em] align-super">™</sup> 2.0
                            </>
                          ) : product.href === '/selectrx' ? (
                            <>
                              selectRx<sup className="text-[0.65em] align-super">™</sup>
                            </>
                          ) : product.href === '/formulary' ? (
                            <>
                              Formulary (coming soon)
                            </>
                          ) : (
                            product.name
                          )}
                        </div>
                        <div className="text-xs text-dark-600 mt-1">
                          {product.description}
                        </div>
                      </>
                    )

                    return isFormulary ? (
                      <div
                        key={index}
                        className="block px-4 py-3 hover:bg-accent/10 transition-colors cursor-default"
                      >
                        {content}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        href={product.href}
                        onClick={() => {
                          setIsDropdownOpen(false)
                          setIsOpen(false)
                        }}
                        className="block px-4 py-3 hover:bg-accent/10 transition-colors"
                      >
                        {content}
                      </Link>
                    )
                  })}
                  <div className="border-t border-dark-300 mt-2 pt-2">
                    <button
                      onClick={() => {
                        handleNavigation('#services')
                        setIsDropdownOpen(false)
                        setIsOpen(false)
                      }}
                      className="block w-full px-4 py-3 hover:bg-accent/10 transition-colors text-left"
                    >
                      <div className="text-sm font-medium text-accent">
                        View All Solutions
                      </div>
                      <div className="text-xs text-dark-600 mt-1">
                        Explore our complete product suite
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigation('#contact')}
              className="group relative overflow-hidden font-medium px-8 py-3 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 ml-4"
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
                Get in Touch
              </span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-dark-900 hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 py-6 bg-dark-100/95 backdrop-blur-md border-t border-dark-300/50">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigation('#home')}
                className="nav-link text-sm font-medium uppercase tracking-wider py-3 px-4 hover:text-accent hover:bg-accent/10 transition-all duration-300 text-left rounded-lg"
              >
                Home
              </button>

              <button
                onClick={() => handleNavigation('#about')}
                className="nav-link text-sm font-medium uppercase tracking-wider py-3 px-4 hover:text-accent hover:bg-accent/10 transition-all duration-300 text-left rounded-lg"
              >
                About
              </button>

              {/* Mobile Solutions */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="nav-link text-sm font-medium uppercase tracking-wider py-3 px-4 hover:text-accent hover:bg-accent/10 transition-all duration-300 flex items-center justify-between w-full rounded-lg"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-1 border-l border-dark-300/50 pl-4">
                    {products.map((product, index) => {
                      const isFormulary = product.href === '/formulary'
                      
                      const content = (
                        <>
                          <div className="font-medium">
                            {product.href === '/guiderx' ? (
                              <>
                                guideRx<sup className="text-[0.65em] align-super">™</sup>
                              </>
                            ) : product.href === '/gojirx' ? (
                              <>
                                claimRx<sup className="text-[0.65em] align-super">™</sup> 2.0
                              </>
                            ) : product.href === '/selectrx' ? (
                              <>
                                selectRx<sup className="text-[0.65em] align-super">™</sup>
                              </>
                            ) : product.href === '/formulary' ? (
                              <>
                                Formulary<sup className="text-[0.65em] align-super">™</sup> (coming soon)
                              </>
                            ) : (
                              product.name
                            )}
                          </div>
                          <div className="text-xs text-dark-500 mt-1">{product.description}</div>
                        </>
                      )

                      return isFormulary ? (
                        <div
                          key={index}
                          className="block py-3 px-3 text-sm text-dark-600 hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg cursor-default"
                        >
                          {content}
                        </div>
                      ) : (
                        <Link
                          key={index}
                          href={product.href}
                          onClick={() => {
                            setIsDropdownOpen(false)
                            setIsOpen(false)
                          }}
                          className="block py-3 px-3 text-sm text-dark-600 hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg"
                        >
                          {content}
                        </Link>
                      )
                    })}
                    <div className="border-t border-dark-300/50 mt-2 pt-2">
                      <button
                        onClick={() => {
                          handleNavigation('#services')
                          setIsDropdownOpen(false)
                          setIsOpen(false)
                        }}
                        className="block py-3 px-3 text-sm text-accent hover:text-accent/80 hover:bg-accent/10 transition-all duration-300 w-full text-left rounded-lg"
                      >
                        <div className="font-medium">View All Solutions</div>
                        <div className="text-xs text-dark-500 mt-1">Explore our complete product suite</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meet With Us */}
              {/* <Link
                href="/meet-with-us"
                onClick={() => setIsOpen(false)}
                className="nav-link text-sm font-medium uppercase tracking-wider py-3 px-4 hover:text-accent hover:bg-accent/10 transition-all duration-300 text-left rounded-lg"
              >
                Meet With Us
              </Link> */}

              <button 
                onClick={() => handleNavigation('#contact')}
                className="group relative overflow-hidden font-medium px-6 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/25 w-full mt-4 text-center"
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
                
                <span className="relative flex items-center justify-center text-dark-100 font-semibold">
                  Get in Touch
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 
// Animation utilities for consistent GSAP implementation
export class AnimationManager {
  private static instance: AnimationManager
  private gsap: any = null
  private ScrollTrigger: any = null
  private isLoaded = false

  private constructor() {}

  static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager()
    }
    return AnimationManager.instance
  }

  async init() {
    if (this.isLoaded) return { gsap: this.gsap, ScrollTrigger: this.ScrollTrigger }

    try {
      const gsapModule = await import('gsap')
      const scrollTriggerModule = await import('gsap/ScrollTrigger')
      
      this.gsap = gsapModule.gsap || gsapModule.default
      this.ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default
      
      this.gsap.registerPlugin(this.ScrollTrigger)
      this.isLoaded = true
      
      console.log('GSAP loaded successfully')
      return { gsap: this.gsap, ScrollTrigger: this.ScrollTrigger }
    } catch (error) {
      console.error('Failed to load GSAP:', error)
      throw error
    }
  }

  // Advanced text reveal animation (NK Studio style)
  textReveal(element: any, options: any = {}) {
    if (!this.isLoaded || !element) return

    const defaults = {
      duration: 1.2,
      stagger: 0.05,
      ease: 'power4.out',
      delay: 0
    }

    const config = { ...defaults, ...options }

    // Split text into characters for individual animation
    const text = element.textContent
    element.innerHTML = text.split('').map((char: string) => 
      char === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${char}</span>`
    ).join('')

    const chars = element.querySelectorAll('.char')

    this.gsap.set(chars, {
      y: 100,
      opacity: 0,
      rotation: 5
    })

    return this.gsap.to(chars, {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      delay: config.delay
    })
  }

  // Magnetic hover effect
  magneticHover(element: any, options: any = {}) {
    if (!this.isLoaded || !element) return

    const defaults = {
      strength: 0.3,
      ease: 'power2.out'
    }

    const config = { ...defaults, ...options }

    element.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      this.gsap.to(element, {
        x: x * config.strength,
        y: y * config.strength,
        duration: 0.3,
        ease: config.ease
      })
    })

    element.addEventListener('mouseleave', () => {
      this.gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: config.ease
      })
    })
  }

  // Parallax scroll effect
  parallaxScroll(elements: any, options: any = {}) {
    if (!this.isLoaded) return

    const defaults = {
      speed: 0.5,
      ease: 'none'
    }

    const config = { ...defaults, ...options }

    elements.forEach((element: any, index: number) => {
      const speed = Array.isArray(config.speed) ? config.speed[index] || 0.5 : config.speed
      
      this.gsap.to(element, {
        yPercent: -50 * speed,
        ease: config.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }

  // Morphing path animation
  morphPath(element: any, paths: string[], options: any = {}) {
    if (!this.isLoaded || !element) return

    const defaults = {
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    }

    const config = { ...defaults, ...options }

    const tl = this.gsap.timeline(config)

    paths.forEach((path, index) => {
      tl.to(element, {
        attr: { d: path },
        duration: config.duration,
        ease: config.ease
      }, index * config.duration)
    })

    return tl
  }

  // Advanced page transitions
  pageTransition(direction: 'in' | 'out', options: any = {}) {
    if (!this.isLoaded) return

    const defaults = {
      duration: 1,
      ease: 'power3.inOut'
    }

    const config = { ...defaults, ...options }

    if (direction === 'out') {
      return this.gsap.to('main', {
        y: -100,
        opacity: 0,
        duration: config.duration,
        ease: config.ease
      })
    } else {
      return this.gsap.fromTo('main', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: config.duration,
          ease: config.ease 
        }
      )
    }
  }

  // Scroll-triggered image reveal
  imageReveal(element: any, options: any = {}) {
    if (!this.isLoaded || !element) return

    const defaults = {
      duration: 1.5,
      ease: 'power3.out'
    }

    const config = { ...defaults, ...options }

    // Create overlay element
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #00ff88, #0ea5e9);
      z-index: 1;
    `
    
    element.style.position = 'relative'
    element.appendChild(overlay)

    return this.gsap.to(overlay, {
      xPercent: 100,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  // Fade in from bottom animation
  fadeInUp(elements: any, options: any = {}) {
    if (!this.isLoaded) return

    const defaults = {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1
    }

    const config = { ...defaults, ...options }

    this.gsap.fromTo(elements, 
      { y: config.y, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: config.duration,
        ease: config.ease,
        stagger: config.stagger,
        ...config
      }
    )
  }

  // Scroll-triggered animation
  scrollTriggerAnimation(elements: any, options: any = {}) {
    if (!this.isLoaded) return

    const defaults = {
      trigger: elements,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }

    const scrollConfig = { ...defaults, ...options.scrollTrigger }
    delete options.scrollTrigger

    return this.gsap.fromTo(elements,
      { y: 50, opacity: 0, ...options.from },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: scrollConfig,
        ...options.to
      }
    )
  }

  // Stagger animation for children
  staggerChildren(parent: any, options: any = {}) {
    if (!this.isLoaded || !parent) return

    const children = parent.children || []
    if (children.length === 0) return

    const defaults = {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }

    const config = { ...defaults, ...options }

    this.gsap.fromTo(children,
      { y: config.y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease,
        scrollTrigger: {
          trigger: parent,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...config.scrollTrigger
        }
      }
    )
  }

  // Kill all animations
  killAll() {
    if (this.isLoaded) {
      this.gsap.killTweensOf('*')
      this.ScrollTrigger.killAll()
    }
  }

  // Refresh ScrollTrigger (useful for dynamic content)
  refresh() {
    if (this.isLoaded) {
      this.ScrollTrigger.refresh()
    }
  }
}

export const animationManager = AnimationManager.getInstance()

// Utility functions for easier use
export const initAnimations = () => animationManager.init()
export const textReveal = (element: any, options?: any) => animationManager.textReveal(element, options)
export const magneticHover = (element: any, options?: any) => animationManager.magneticHover(element, options)
export const parallaxScroll = (elements: any, options?: any) => animationManager.parallaxScroll(elements, options)
export const morphPath = (element: any, paths: string[], options?: any) => animationManager.morphPath(element, paths, options)
export const pageTransition = (direction: 'in' | 'out', options?: any) => animationManager.pageTransition(direction, options)
export const imageReveal = (element: any, options?: any) => animationManager.imageReveal(element, options)
export const fadeInUp = (elements: any, options?: any) => animationManager.fadeInUp(elements, options)
export const scrollTriggerAnimation = (elements: any, options?: any) => animationManager.scrollTriggerAnimation(elements, options)
export const staggerChildren = (parent: any, options?: any) => animationManager.staggerChildren(parent, options)
export const killAllAnimations = () => animationManager.killAll()
export const refreshScrollTrigger = () => animationManager.refresh() 
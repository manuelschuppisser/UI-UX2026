import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from('.hero-content', {
        opacity: 0,
        y: 60,
        duration: 1.4,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center hero-content">
          <div className="mb-8 inline-block">
            <img 
              src="/ManuProfil.jpg"
              alt="Manuel Schuppisser"
              className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg ring-2 ring-gray-100"
            />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Manuel Schuppisser
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            UX/UI Designer crafting intuitive digital experiences
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">5+ Years Experience</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">French</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">Dutch</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">English</span>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Transforming complex ideas into seamless, user-friendly interfaces. From <strong>Click and Ride</strong> and <strong>Service Catalogue</strong> to leading UX for the <strong>Komon app</strong>.
          </p>
          
          <button 
            onClick={scrollToPortfolio}
            className="group inline-flex items-center gap-2 text-gray-900 font-medium transition-all hover:gap-4"
          >
            <span>View Work</span>
            <svg 
              className="w-5 h-5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

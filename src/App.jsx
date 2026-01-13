import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-in').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray('.scale-in').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

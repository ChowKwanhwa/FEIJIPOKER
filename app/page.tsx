'use client'

import Image from 'next/image'
import { FaShieldAlt, FaDoorClosed, FaDice, FaUsers } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const featureCards = useRef<HTMLDivElement[]>([])
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !aboutRef.current) return

    // 设置初始状态
    const heroTitle = heroRef.current.querySelector('h1')
    const heroText = heroRef.current.querySelector('p')
    const heroButton = heroRef.current.querySelector('button')

    if (heroTitle && heroText && heroButton) {
      gsap.set(heroTitle, { y: 100, opacity: 0 })
      gsap.set(heroText, { y: 50, opacity: 0 })
      gsap.set(heroButton, { scale: 0, opacity: 0 })

      // Hero section animations
      const heroTl = gsap.timeline()
      heroTl.to(heroTitle, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out'
      })
      .to(heroText, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .to(heroButton, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, '-=0.5')
    }

    // Features section animations
    featureCards.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out'
        })
      }
    })

    // About section animations
    const aboutTitle = aboutRef.current.querySelector('h2')
    const aboutText = aboutRef.current.querySelector('p')
    const aboutButton = aboutRef.current.querySelector('button')

    if (aboutTitle) {
      gsap.from(aboutTitle, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom-=100'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }

    if (aboutText) {
      gsap.from(aboutText, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom-=100'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      })
    }

    if (aboutButton) {
      gsap.from(aboutButton, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom-=100'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: 'back.out(1.7)'
      })
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !featureCards.current.includes(el)) {
      featureCards.current[index] = el
    }
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/poker.jpg"
            alt="FEIJI Poker Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 relative z-20">
            Welcome to <span className="neon-text">FEIJI POKER</span>
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl relative z-20">
            Experience exclusive poker games in the heart of Bangkok
          </p>
          <div className="relative z-30">
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 transform hover:-translate-y-1">
              Join Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            Why Choose <span className="neon-text">FEIJI Poker</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => addToRefs(el, index)}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="text-red-500 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Experience <span className="neon-text">FEIJI Poker</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Join us for safe, enjoyable poker games every day and discover the unique
              thrills of playing in Bangkok. Experience the best in poker, tailored just
              for you.
            </p>
            <button className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p> {new Date().getFullYear()} FEIJI Poker House. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: <FaShieldAlt className="mx-auto" />,
    title: "Safe and Secure",
    description: "Top-tier security systems ensuring a safe gaming environment",
  },
  {
    icon: <FaDoorClosed className="mx-auto" />,
    title: "Private Rooms",
    description: "Exclusive private rooms for a focused gaming experience",
  },
  {
    icon: <FaDice className="mx-auto" />,
    title: "Daily Games",
    description: "Various stakes and formats available every day",
  },
  {
    icon: <FaUsers className="mx-auto" />,
    title: "Professional Staff",
    description: "Experienced and friendly staff at your service",
  },
]

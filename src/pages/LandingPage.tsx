'use client'

import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import OtherSide from '../sections/OtherSide'
import Skills from '../sections/Skills'

import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import BackgroundIcons from '../components/BackgroundIcons'

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-accent-primary/30 relative">
      <BackgroundIcons />

      <Navbar />


      <main className="relative isolate">
        {/* Background Blur Elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c084fc] to-[#818cf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <About />
        <Experience />
        <Hero />

        <Projects />
        <OtherSide />
        <Skills />
        <Contact />
        <Footer />


      </main>
    </div>
  )
}


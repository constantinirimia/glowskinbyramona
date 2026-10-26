import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Services from './pages/Services.jsx'
import Microdermabrasion from './pages/Microdermabrasion.jsx'
import CustomFacial from './pages/CustomFacial.jsx'
import Microneedling from './pages/Microneedling.jsx'
import Dermaplaning from './pages/Dermaplaning.jsx'
import LashLift from './pages/LashLift.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import { site } from './data/content.js'

const titles = {
  '/': `${site.name} — Licensed Esthetician in Northbrook, IL`,
  '/about': 'About Ra-Mona',
  '/gallery': 'Gallery',
  '/treatments': 'Treatments',
  '/services/custom-facial': 'Custom Signature Facial',
  '/services/microdermabrasion': 'Microdermabrasion',
  '/services/microneedling': 'Microneedling',
  '/services/dermaplaning': 'Dermaplaning',
  '/services/lash-lift-tint': 'Lash Lift & Tint',
  '/pricing': 'Pricing',
  '/faq': 'FAQ',
  '/contact': 'Contact & Booking',
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const title = titles[pathname]
    document.title = !title || pathname === '/' ? titles['/'] : `${title} | ${site.name}`
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/treatments" element={<Services />} />
          <Route path="/services" element={<Navigate to="/treatments" replace />} />
          <Route path="/services/microdermabrasion" element={<Microdermabrasion />} />
          <Route path="/services/custom-facial" element={<CustomFacial />} />
          <Route path="/services/microneedling" element={<Microneedling />} />
          <Route path="/services/dermaplaning" element={<Dermaplaning />} />
          <Route path="/services/lash-lift-tint" element={<LashLift />} />
          <Route path="/pricing" element={<Menu />} />
          <Route path="/menu" element={<Navigate to="/pricing" replace />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

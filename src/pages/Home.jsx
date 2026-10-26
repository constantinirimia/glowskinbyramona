import { Link } from 'react-router-dom'
import { images, services, site, studioGallery } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'
import PriceMenu from '../components/PriceMenu.jsx'
import Reveal from '../components/Reveal.jsx'

const strip = [images.mask, images.resurfacing, images.towels, images.serumBottle]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-mark rise" aria-hidden="true">
            ✦
          </div>
          <p className="eyebrow rise rise-1">Licensed esthetician · Northbrook, IL</p>
          <h1 className="rise rise-2">
            Glow Skin by <span className="nowrap">Ra-Mona</span>
          </h1>
          <p className="hero-lede rise rise-3">
            Custom facials, microdermabrasion, microneedling, and dermaplaning — private,
            unhurried care for skin that looks like light, not makeup.
          </p>
          <div className="hero-actions rise rise-4">
            <Link className="btn" to="/contact">
              Book a visit
            </Link>
            <Link className="btn btn-ghost" to="/treatments">
              Explore treatments
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#welcome" aria-label="Scroll to content">
          <span />
        </a>
      </section>

      <section className="section" id="welcome">
        <div className="container split">
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.room})` }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Welcome</p>
            <h2>Expert skin care, built around you</h2>
            <p>
              Ra-Mona designs every visit around your complexion that day — unhurried, precise, and
              polished.
            </p>
            <ul className="checklist">
              <li>Custom facials built around a full skin analysis</li>
              <li>Crystal-free microdermabrasion with no downtime</li>
              <li>Microneedling to refine texture, scars, and lines</li>
              <li>Dermaplaning for an instant, lit-from-within glow</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Treatments</p>
              <h2>Four signature rituals</h2>
              <p>The core menu — each one explained in full on its own page.</p>
            </div>
          </Reveal>
          <div className="treat-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <Link className="treat-card" to={`/services/${service.slug}`}>
                  <div className="pic">
                    <div style={{ backgroundImage: `url(${service.image})` }} />
                  </div>
                  <div className="body">
                    <h3>{service.name}</h3>
                    <p>{service.summary}</p>
                    <p className="meta">{service.price}</p>
                    <span className="more">Learn more</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal delay={120} className="split-copy">
            <p className="eyebrow">Meet your esthetician</p>
            <h2>Hi, I’m Ra-Mona.</h2>
            <p>
              I’m a licensed esthetician in Northbrook. Every visit starts with your skin, not a
              script — and ends with a plan you can keep at home.
            </p>
            <Link className="btn" to="/about">
              My story
            </Link>
          </Reveal>
          <Reveal variant="mask">
            <div
              className="split-image framed portrait"
              style={{ backgroundImage: `url(${images.portraitHome})` }}
              role="img"
              aria-label={`${site.esthetician}, licensed esthetician`}
            />
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Prices</p>
              <h2>A clear, considered menu</h2>
            </div>
          </Reveal>
          <PriceMenu />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">From the studio</p>
              <h2>A look inside</h2>
            </div>
          </Reveal>
          <div className="photo-strip">
            {strip.map((src, index) => {
              const alt = studioGallery.find((item) => item.src === src)?.alt ?? 'Studio photo'
              return (
                <Reveal key={src} variant="zoom" delay={index * 90}>
                  <Link to="/gallery" className="photo-strip-item" aria-label={`Gallery: ${alt}`}>
                    <img src={src} alt={alt} loading="lazy" decoding="async" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <p className="center-action">
            <Link className="btn btn-ghost" to="/gallery">
              View the gallery
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title="Book your treatment" label="Get in touch" />
    </>
  )
}

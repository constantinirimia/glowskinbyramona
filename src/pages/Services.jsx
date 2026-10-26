import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { extraTreatments, images, services } from '../data/content.js'

export default function Services() {
  const lash = extraTreatments.find((item) => item.slug === 'lash-lift-tint')

  return (
    <>
      <PageHero
        title="Treatments"
        eyebrow="The edit"
        image={images.mask}
        kicker="Four signature rituals, designed to brighten, smooth, and restore."
      />
      <section className="section">
        <div className="container">
          <div className="treat-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <Link className="treat-card" to={`/services/${service.slug}`}>
                  <div className="pic">
                    <div style={{ backgroundImage: `url(${service.image})` }} />
                  </div>
                  <div className="body">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h3>{service.name}</h3>
                    <p>{service.summary}</p>
                    <p className="meta">{service.price}</p>
                    <span className="more">Learn more</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link className="also-offer" to="/services/lash-lift-tint">
              <span className="eyebrow">Also offered</span>
              <span className="also-name">Lash Lift & Tint</span>
              <span className="also-price">{lash?.price}</span>
              <span className="more">Learn more</span>
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Not sure where to begin?" label="Ask Ra-Mona" />
    </>
  )
}

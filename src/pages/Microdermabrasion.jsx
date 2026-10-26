import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { images, microdermBenefits } from '../data/content.js'

export default function Microdermabrasion() {
  return (
    <>
      <PageHero
        title="Microdermabrasion"
        eyebrow="Crystal-free glow"
        image={images.ultrasonic}
        kicker="Discover the secret to radiant skin — without the downtime."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">What it is</p>
            <h2>Advanced, crystal-free exfoliation.</h2>
            <p>
              Looking to refresh your skin and reveal a healthy, luminous glow? Professional
              microdermabrasion is the perfect non-invasive solution to gently transform your
              complexion without the downtime.
            </p>
            <p>
              The treatment safely removes the outermost layer of dead skin cells and impurities,
              clearing away buildup to promote healthy cell turnover. The result? An instantly
              velvety smooth, fresh, and deeply rejuvenated complexion.
            </p>
            <p className="price-note">Microdermabrasion $70 · Microdermabrasion facial $180</p>
            <Link className="btn" to="/contact">
              Book microdermabrasion
            </Link>
          </Reveal>
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.resurfacing})` }} />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">The key benefits</p>
              <h2>Ready for an event — or a long-term glow.</h2>
            </div>
          </Reveal>
          <div className="cards">
            {microdermBenefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="card">
                  <span className="card-num">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Take the first step toward luminous skin." label="Book microdermabrasion" />
    </>
  )
}

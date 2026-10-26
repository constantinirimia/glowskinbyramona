import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { facialTherapies, images } from '../data/content.js'

export default function CustomFacial() {
  return (
    <>
      <PageHero
        title="Custom Facial"
        eyebrow="Signature therapies"
        image={images.mask}
        kicker="No two complexions are alike. Yours is treated that way."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Your journey</p>
            <h2>A detailed analysis. Then a facial built for today.</h2>
            <p>
              Your visit begins with a skin analysis and consultation. Ra-Mona then curates a
              bespoke facial experience tailored entirely to your skin’s needs and your personal
              wellness goals on that exact day.
            </p>
            <p>
              Every custom facial is elevated with a tailored treatment mask, deeply hydrating
              serums, and a blissful facial massage. Leave feeling utterly relaxed, beautifully
              balanced, and glowing from the inside out.
            </p>
            <Link className="btn" to="/contact">
              Book a custom facial
            </Link>
          </Reveal>
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.facialWork})` }} />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Signature therapies</p>
              <h2>Five paths. One facial, made for you.</h2>
              <p>
                Depending on your skin’s needs, your experience may incorporate one of these
                targeted treatments.
              </p>
            </div>
          </Reveal>
          <div className="benefits">
            {facialTherapies.map((item, index) => (
              <Reveal key={item.name} delay={(index % 2) * 100}>
                <article className="benefit">
                  <span className="card-num">0{index + 1}</span>
                  <h3>
                    {item.name} <span className="meta">{item.price}</span>
                  </h3>
                  <p>
                    <strong>Targeted scope.</strong> {item.scope}
                  </p>
                  <p>
                    <strong>The experience.</strong> {item.experience}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Let’s read your skin, then treat it." label="Request a facial" />
    </>
  )
}

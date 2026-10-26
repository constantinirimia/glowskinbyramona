import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { images, microneedlingTreats } from '../data/content.js'

export default function Microneedling() {
  return (
    <>
      <PageHero
        title="Microneedling"
        eyebrow="Collagen renewal"
        image={images.serumDrop}
        position="center 30%"
        kicker="A clinically proven path to smoother, healthier skin."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">What it is</p>
            <h2>Your skin’s own repair, carefully invited.</h2>
            <p>
              Microneedling is a versatile, minimally invasive treatment designed to rejuvenate
              your skin by harnessing your body’s natural healing abilities. If you are looking
              for a non-surgical way to refresh your complexion, this multipurpose treatment
              offers a path to smoother, healthier skin.
            </p>
            <p>
              The procedure creates controlled micro-wounds that stimulate natural repair. To
              achieve optimal results, a series of treatments is typically recommended depending
              on your unique skin goals.
            </p>
            <p className="price-note">From $250 · 3-session series $700</p>
          </Reveal>
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.serumBottle})` }} />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container split">
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.lamp})` }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">How it works</p>
            <h2>Collagen and elastin, awakened.</h2>
            <p>
              A professional handheld device with extremely fine, sterile needles precisely
              punctures the skin. These micro-wounds trigger an immediate healing response,
              leading to increased production of collagen and elastin — the proteins responsible
              for skin health, firmness, and vitality.
            </p>
            <p>By accelerating cellular turnover, microneedling targets:</p>
            <ul className="checklist">
              {microneedlingTreats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>The result is a visibly smoother, more youthful, and radiant complexion.</p>
            <Link className="btn" to="/contact">
              Book microneedling
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Ready for a smoother complexion?" label="Ask about a series" />
    </>
  )
}

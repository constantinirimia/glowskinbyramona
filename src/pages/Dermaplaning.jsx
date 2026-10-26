import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { dermaplaningBenefits, images } from '../data/content.js'

export default function Dermaplaning() {
  return (
    <>
      <PageHero
        title="Dermaplaning"
        eyebrow="Signature skin"
        image={images.massage}
        kicker="The glowing truth: four incredible benefits."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">The glowing truth</p>
            <h2>4 incredible benefits of dermaplaning</h2>
            <p>
              If you are searching for a way to instantly brighten your skin, smooth out rough
              texture, and say goodbye to stubborn peach fuzz, dermaplaning might be the exact
              treatment your skincare routine is missing.
            </p>
            <p>
              This popular, non-invasive cosmetic procedure uses a specialized, sterile blade to
              gently scrape away the outermost layer of debris from your face. The result? An
              instant, lit-from-within glow with absolutely zero downtime.
            </p>
            <p className="price-note">Dermaplaning $60 · Dermaplaning facial $170</p>
          </Reveal>
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.jawline})` }} />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="benefits">
            {dermaplaningBenefits.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 100}>
                <article className="benefit">
                  <span className="card-num">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.mixing})` }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Is it right for you?</p>
            <h2>Most skin types. A few important pauses.</h2>
            <p>
              Dermaplaning is fantastic for most skin types, especially those dealing with dryness,
              sun damage, or fine lines. However, if you have active, inflamed acne breakouts,
              rosacea, or open wounds, you should skip this treatment until your skin has fully
              healed to avoid further irritation.
            </p>
            <p>
              Ra-Mona will review your skin in person before beginning, so you can feel confident
              the treatment is a match.
            </p>
            <Link className="btn" to="/contact">
              Book dermaplaning
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Ready for that glass-skin finish?" label="Book dermaplaning" />
    </>
  )
}

import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { images, lashBenefits } from '../data/content.js'

export default function LashLift() {
  return (
    <>
      <PageHero
        title="Lash Lift & Tint"
        eyebrow="Effortless lashes"
        image={images.calm}
        kicker="Say goodbye to mascara and hello to beautifully curled natural lashes."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Wake up ready</p>
            <h2>Say goodbye to mascara.</h2>
            <p>
              Hello to effortless, beautifully curled natural lashes with a lash lift and tint.
              This relaxing appointment takes about 45 to 60 minutes, and results last between 6
              to 8 weeks.
            </p>
            <ul className="checklist">
              <li>
                <strong>Lash Lift:</strong> A chemical process that curls your natural lashes from
                base to tip, making them look longer and more open.
              </li>
              <li>
                <strong>Lash Tint:</strong> A safe dye applied right after the lift to darken your
                lashes for a mascara-like finish.
              </li>
              <li>
                <strong>Time:</strong> 45 to 60 minutes of quiet, reclined care.
              </li>
              <li>
                <strong>Longevity:</strong> 6 to 8 weeks of defined lashes.
              </li>
            </ul>
            <p className="price-note">Lash lift & tint $70</p>
          </Reveal>
          <Reveal variant="mask">
            <div className="split-image framed" style={{ backgroundImage: `url(${images.towels})` }} />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Top benefits</p>
              <h2>Low maintenance. High impact.</h2>
            </div>
          </Reveal>
          <div className="cards">
            {lashBenefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="card">
                  <span className="card-num">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="center-action">
            <Link className="btn" to="/contact">
              Book lash lift & tint
            </Link>
          </p>
        </div>
      </section>
      <CtaBand title="Wake up with ready-to-go lashes." label="Book this ritual" />
    </>
  )
}

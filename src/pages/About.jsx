import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { images, site } from '../data/content.js'

const approach = [
  {
    title: 'Analyze first',
    body: 'Every visit begins with a look at your skin that day — texture, tone, and what has changed since last time.',
  },
  {
    title: 'A light hand',
    body: 'Treatments are precise and never rushed. The goal is healthy, polished skin that still looks like you.',
  },
  {
    title: 'Aftercare you’ll keep',
    body: 'You leave with a simple routine and clear next steps, so results last well beyond the appointment.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        eyebrow="Meet the esthetician"
        image={images.atWork}
        kicker="Licensed esthetician care in Northbrook."
      />
      <section className="section">
        <div className="container split meet">
          <Reveal variant="mask">
            <div
              className="split-image framed portrait"
              style={{ backgroundImage: `url(${images.portrait})` }}
              role="img"
              aria-label="Ra-Mona, licensed esthetician, in her Northbrook studio"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Meet the esthetician</p>
            <h2>Ra-Mona. Licensed, precise, and here for your skin.</h2>
            <p>
              {site.name} is a private esthetics practice built around luminous skin and effortless
              beauty — custom facials, microdermabrasion, microneedling, dermaplaning, lash lift
              & tint, brows, and wax.
            </p>
            <p>
              Ra-Mona approaches every face with a light hand and a trained eye, mapping texture,
              tone, and lifestyle before treatment begins. Appointments are unhurried, and you
              leave with aftercare simple enough to keep.
            </p>
            <Link className="btn" to="/contact">
              Book with Ra-Mona
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">The approach</p>
              <h2>A quiet room, a considered ritual.</h2>
            </div>
          </Reveal>
          <div className="cards numbered">
            {approach.map((item, index) => (
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
            <Link className="btn btn-ghost" to="/gallery">
              See the studio
            </Link>
          </p>
        </div>
      </section>
      <CtaBand title="Come sit for a glow." label="Request a visit" />
    </>
  )
}

import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function CtaBand({
  eyebrow = 'Ready when you are',
  title = 'Book your treatment',
  to = '/contact',
  label = 'Get in touch',
}) {
  return (
    <section className="cta-band">
      <Reveal className="cta-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <Link className="btn" to={to}>
          {label}
        </Link>
      </Reveal>
    </section>
  )
}

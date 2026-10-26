import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { packages, priceLists } from '../data/content.js'

export default function PriceMenu({ bookLabel = 'Book' }) {
  return (
    <>
      <Reveal>
        <div className="price-board">
          {priceLists.map((group) => (
            <div className="price-col" key={group.category}>
              <h3>{group.category}</h3>
              {group.items.map((item) => (
                <div className="price-row" key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="packages-head">
        <p className="eyebrow">Series packages</p>
        <h3>Three sessions, better value.</h3>
      </Reveal>
      <div className="packages">
        {packages.map((item, index) => (
          <Reveal key={item.name} delay={index * 80}>
            <article className="package">
              <p className="eyebrow">{item.period}</p>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link className="btn btn-ghost" to="/contact">
                {bookLabel}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  )
}

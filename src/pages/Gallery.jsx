import { useCallback, useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { images, studioGallery } from '../data/content.js'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const touchX = useRef(null)
  const closeRef = useRef(null)
  const count = studioGallery.length

  const step = useCallback(
    (delta) => setActive((index) => (index == null ? index : (index + delta + count) % count)),
    [count],
  )

  useEffect(() => {
    if (active == null) return undefined
    document.body.classList.add('menu-open')
    closeRef.current?.focus()
    function onKey(event) {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [active, step])

  const current = active == null ? null : studioGallery[active]

  return (
    <>
      <PageHero
        title="Gallery"
        eyebrow="The studio"
        image={images.room}
        kicker="Treatments, tools, and the room where the glow happens."
      />
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Inside Glow Skin</p>
              <h2>A closer look at the work.</h2>
            </div>
          </Reveal>
          <div className="studio-gallery">
            {studioGallery.map((item, index) => (
              <Reveal key={item.src} variant="zoom" delay={(index % 3) * 80}>
                <button
                  type="button"
                  className="studio-gallery-item"
                  aria-label={`Open photo: ${item.alt}`}
                  onClick={() => setActive(index)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setActive(null)}
          onTouchStart={(event) => {
            touchX.current = event.touches[0].clientX
          }}
          onTouchEnd={(event) => {
            if (touchX.current == null) return
            const dx = event.changedTouches[0].clientX - touchX.current
            touchX.current = null
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
          }}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-btn lightbox-close"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <Icon name="close" size={22} />
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
          >
            <Icon name="prev" size={26} />
          </button>
          <figure className="lightbox-figure" key={current.src} onClick={(event) => event.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.alt}</span>
              <span className="lightbox-count">
                {active + 1} / {count}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
          >
            <Icon name="next" size={26} />
          </button>
        </div>
      ) : null}
      <CtaBand title="Ready to be in the chair?" label="Book a visit" />
    </>
  )
}

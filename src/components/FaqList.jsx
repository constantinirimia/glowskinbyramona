import { useId, useState } from 'react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-${index}`
        return (
          <article className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faq-mark" aria-hidden="true" />
            </button>
            <div className="faq-panel" id={panelId} role="region" aria-hidden={!isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

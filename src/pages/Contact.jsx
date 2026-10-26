import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { bookingEmailPayload } from '../data/bookingEmail.js'
import { extraTreatments, images, packages, services, site } from '../data/content.js'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: services[0].name,
  preferred: '',
  message: '',
  company: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [flying, setFlying] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function onChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (form.company || status === 'sending') return
    setStatus('sending')
    setFlying(true)

    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bookingEmailPayload(form)),
      })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok || payload.success === false || payload.success === 'false') {
        throw new Error('send-failed')
      }
      timer.current = window.setTimeout(() => {
        setStatus('sent')
        setForm(initial)
        setFlying(false)
      }, 900)
    } catch {
      timer.current = window.setTimeout(() => {
        setStatus('error')
        setFlying(false)
      }, 700)
    }
  }

  return (
    <>
      <PageHero
        title="Contact"
        eyebrow="Get in touch"
        image={images.calm}
        kicker="Call, write, or send a note — Ra-Mona will follow up personally."
      />
      <section className="section">
        <div className="container contact-grid">
          <Reveal as="aside" className="info-panel">
            <p className="eyebrow">Studio</p>
            <h2>Let’s find your glow.</h2>
            <div className="info-item">
              <Icon name="pin" />
              <p>{site.address}</p>
            </div>
            <div className="info-item">
              <Icon name="phone" />
              <p>
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
            </div>
            <div className="info-item">
              <Icon name="mail" />
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="info-item">
              <Icon name="instagram" />
              <p>
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </p>
            </div>
            <div className="info-item">
              <Icon name="clock" />
              <p>
                {site.hours.map((row) => (
                  <span key={row.day}>
                    {row.day}: {row.time}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
          <Reveal className="form-panel" delay={120}>
            <p className="eyebrow">Booking request</p>
            <h2>Send a note</h2>
            {flying ? (
              <div className="mail-fly" aria-hidden="true">
                <Icon name="mail" size={40} />
              </div>
            ) : null}
            <div aria-live="polite">
              {status === 'sent' ? (
                <p className="notice success">
                  Thank you — your request is on its way. Ra-Mona will be in touch soon.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="notice error">
                  The note didn’t send just now. Please call {site.phone} or email{' '}
                  <a href={`mailto:${site.email}`}>{site.email}</a> and we’ll take care of you.
                </p>
              ) : null}
            </div>
            <form onSubmit={onSubmit}>
              <input
                className="honey"
                name="company"
                value={form.company}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-row">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={onChange}
                  />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                required
              />
              <div className="form-row">
                <div>
                  <label htmlFor="service">Treatment</label>
                  <select id="service" name="service" value={form.service} onChange={onChange}>
                    {services.map((service) => (
                      <option key={service.slug}>{service.name}</option>
                    ))}
                    {extraTreatments.map((item) => (
                      <option key={item.slug}>{item.name}</option>
                    ))}
                    {packages.map((item) => (
                      <option key={item.name}>{`${item.name} — 3-session package`}</option>
                    ))}
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferred">Preferred day or time</label>
                  <input
                    id="preferred"
                    name="preferred"
                    value={form.preferred}
                    onChange={onChange}
                    placeholder="Thursday afternoon…"
                  />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Skin goals, questions, anything Ra-Mona should know"
              />
              <button className="btn btn-block" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

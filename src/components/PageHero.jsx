export default function PageHero({ title, image, eyebrow, kicker, position = 'center' }) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
        aria-hidden="true"
      />
      <div className="page-hero-inner">
        {eyebrow ? <p className="eyebrow light rise">{eyebrow}</p> : null}
        <h1 className="rise rise-2">{title}</h1>
        {kicker ? <p className="page-kicker rise rise-3">{kicker}</p> : null}
      </div>
    </section>
  )
}

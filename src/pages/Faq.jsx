import PageHero from '../components/PageHero.jsx'
import FaqList from '../components/FaqList.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { faqs, images } from '../data/content.js'

export default function Faq() {
  return (
    <>
      <PageHero
        title="FAQ"
        eyebrow="Before you book"
        image={images.flatlay}
        kicker="Clear answers about treatments and how visits work."
      />
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Studio notes</p>
              <h2>Everything you might want to know first.</h2>
            </div>
          </Reveal>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>
      <CtaBand title="Still have a question?" label="Write to the studio" />
    </>
  )
}

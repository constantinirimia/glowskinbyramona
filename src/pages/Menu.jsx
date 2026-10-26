import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import PriceMenu from '../components/PriceMenu.jsx'
import { images } from '../data/content.js'

export default function Menu() {
  return (
    <>
      <PageHero
        title="Pricing"
        eyebrow="The menu"
        image={images.towels}
        kicker="À la carte and series pricing. Microneedling is quoted from $250, based on your skin goals."
      />
      <section className="section">
        <div className="container">
          <PriceMenu bookLabel="Book this" />
        </div>
      </section>
      <CtaBand title="Let’s plan your visit." label="Contact the studio" />
    </>
  )
}

import { Link } from 'react-router-dom'
import { site } from '../data/content.js'
import BrandLogo from './BrandLogo.jsx'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <BrandLogo />
            <p className="footer-tagline">
              Licensed esthetician care in Northbrook. Custom facials, resurfacing, and glow.{' '}
              {site.tagline}
            </p>
          </div>
          <div>
            <p className="eyebrow">Visit</p>
            <p className="footer-line">
              <Icon name="pin" size={16} /> {site.address}
            </p>
            <p className="footer-line">
              <Icon name="phone" size={16} /> <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p className="footer-line">
              <Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="footer-line">
              <Icon name="instagram" size={16} />{' '}
              <a href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle}
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="footer-links">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/treatments">Treatments</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="legal">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

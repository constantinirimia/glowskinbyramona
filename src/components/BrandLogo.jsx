import { Link } from 'react-router-dom'
import { site } from '../data/content.js'

export default function BrandLogo({ className = '' }) {
  return (
    <Link to="/" className={`brand-logo ${className}`.trim()} aria-label={`${site.name} home`}>
      <img src={site.logo} alt={site.name} />
    </Link>
  )
}

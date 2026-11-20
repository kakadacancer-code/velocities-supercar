import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArrowLink({ to, children, bright = false, className = '' }) {
  return <Link to={to} className={`arrow-link ${bright ? 'arrow-link--bright' : ''} ${className}`}>
    <span>{children}</span><ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
  </Link>
}

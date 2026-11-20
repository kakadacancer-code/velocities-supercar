import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function NotFound() {return <main className="not-found page-container"><p className="eyebrow"><span className="eyebrow-dot"/>404 / ROUTE UNKNOWN</p><h1>OFF THE<br/><em>MAP.</em></h1><p>Even the best journeys take a wrong turn sometimes.</p><Link to="/" className="button-primary">RETURN HOME <ArrowUpRight size={18}/></Link></main>}

import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const links = [ ['Home','/'], ['Collection','/collection'], ['Compare','/compare'], ['Brands','/brands'], ['Stories','/stories'], ['About','/about'] ]
export default function Footer() {
  return <footer className="site-footer">
    <div className="page-container">
      <div className="site-footer__top"><div><p className="eyebrow"><span className="eyebrow-dot"/>THE ART OF SUPERCARS</p><h2>NEVER STOP<br/><em>EXPLORING.</em></h2></div><Link to="/collection" className="footer-circle" aria-label="Explore the collection"><ArrowUpRight size={34} strokeWidth={1.4}/></Link></div>
      <div className="site-footer__middle"><div className="footer-brand"><Link to="/" className="wordmark"><img className="brand-mark" src="/velocity-mark.svg" width="34" height="34" alt=""/><span>VELOCITY<span className="wordmark__period">.</span></span></Link><p>An independent editorial experience dedicated to the world’s most extraordinary machines.</p></div><div className="footer-nav"><p className="micro-label">EXPLORE</p>{links.map(([label,path])=><Link key={path} to={path}>{label}</Link>)}</div><div className="footer-nav"><p className="micro-label">INFORMATION</p><Link to="/credits">Photography credits</Link><Link to="/about">Our story</Link><Link to="/stories">Editorial journal <ArrowUpRight size={13}/></Link></div></div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} VELOCITY. AN INDEPENDENT CONCEPT.</span><span>BUILT FOR THE OBSESSION. <ArrowDownRight size={15}/></span><Link to="/credits">IMAGE ATTRIBUTION</Link></div>
    </div>
  </footer>
}

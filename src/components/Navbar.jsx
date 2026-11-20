import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Columns2, Menu, Search, X } from 'lucide-react'
import { cars } from '../data/cars'

const links = [
  { label: 'Home', to: '/' }, { label: 'Collection', to: '/collection' },
  { label: 'Brands', to: '/brands' }, { label: 'Journal', to: '/stories' }, { label: 'About', to: '/about' },
]

const mobileLinks = [...links, { label: 'Compare', to: '/compare' }]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const menuButton = useRef(null)
  const inputRef = useRef(null)
  const searchPanel = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const reduced = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  useEffect(() => { setMenuOpen(false); setSearchOpen(false); setQuery('') }, [location.pathname])
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (menuButton.current?.getAttribute('aria-expanded') === 'true') menuButton.current.focus()
        setMenuOpen(false)
        setSearchOpen(false)
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearchOpen(v => !v); setMenuOpen(false) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, searchOpen])
  useEffect(() => {
    if (!searchOpen) return
    const trigger = document.activeElement
    inputRef.current?.focus()
    const keepFocus = event => {
      if (event.key !== 'Tab') return
      const controls = searchPanel.current?.querySelectorAll('input, button')
      if (!controls?.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', keepFocus)
    return () => {
      document.removeEventListener('keydown', keepFocus)
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({preventScroll: true})
    }
  }, [searchOpen])
  useEffect(() => {
    if (!menuOpen) return
    const mobile = window.matchMedia('(max-width: 800px)')
    const closeOnDesktop = () => { if (!mobile.matches) setMenuOpen(false) }
    const background = document.querySelectorAll('#main-content, .site-footer')
    background.forEach(element => { element.inert = true })
    mobile.addEventListener('change', closeOnDesktop)
    return () => {
      background.forEach(element => { element.inert = false })
      mobile.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])
  const results = cars.filter(c => `${c.brand} ${c.model} ${c.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
  const enterTransition = reduced ? {duration: 0} : {duration: 0.38, ease: [0.22, 1, 0.36, 1]}

  return <>
    <header className={`site-nav ${scrolled || menuOpen || searchOpen || location.pathname !== '/' ? 'site-nav--solid' : ''}`}>
      <div className="site-nav__inner page-container">
        <Link to="/" className="wordmark" aria-label="Velocity home" onClick={() => setMenuOpen(false)}><img className="brand-mark" src="/velocity-mark.svg" width="34" height="34" alt=""/><span>VELOCITY<span className="wordmark__period">.</span></span></Link>
        <nav aria-label="Primary navigation" className="site-nav__links">
          {links.map(l => <NavLink end={l.to === '/'} key={l.label} to={l.to} className={({isActive}) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>{l.label}</NavLink>)}
        </nav>
        <div className="site-nav__actions">
          <button className="icon-button search-button" aria-label="Search cars" onClick={() => {setSearchOpen(true); setMenuOpen(false)}}><Search size={19} strokeWidth={1.65}/></button>
          <NavLink to="/compare" className="nav-cta"><Columns2 size={16} aria-hidden="true"/> Compare</NavLink>
          <button ref={menuButton} aria-controls={menuOpen ? "mobile-navigation" : undefined} className="icon-button menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => {setMenuOpen(v => !v);setSearchOpen(false)}}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
        </div>
      </div>
    </header>
    <AnimatePresence>
      {menuOpen && <motion.div className="mobile-menu" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={enterTransition}>
        <nav id="mobile-navigation" aria-label="Mobile navigation">{mobileLinks.map(l => <NavLink end={l.to === "/"} key={l.label} to={l.to} onClick={() => setMenuOpen(false)} className={({isActive}) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}>{l.label}<ArrowUpRight size={26}/></NavLink>)}</nav>
      </motion.div>}
    </AnimatePresence>
    <AnimatePresence>
      {searchOpen && <motion.div className="search-overlay" role="presentation" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.22}} onClick={() => setSearchOpen(false)}>
        <motion.div ref={searchPanel} className="search-panel" role="dialog" aria-modal="true" aria-label="Search collection" initial={{y: -22}} animate={{y: 0}} exit={{y: -22}} transition={enterTransition} onClick={e => e.stopPropagation()}>
          <div className="search-panel__top"><p className="eyebrow"><span className="eyebrow-dot"/>FIND YOUR MACHINE</p><button className="icon-button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={22}/></button></div>
          <form onSubmit={e => {e.preventDefault(); navigate(`/collection?search=${encodeURIComponent(query)}`); setSearchOpen(false)}} className="search-panel__form">
            <Search size={24} /><input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search by make or model" placeholder="Search supercars..." /><button type="submit" aria-label="Show all results"><ArrowRight size={23}/></button>
          </form>
          <div className="search-panel__results">
            <p className="micro-label">{query ? `${results.length} QUICK MATCHES` : 'POPULAR SEARCHES'}</p>
            {results.length ? results.map(c=><button key={c.id} onClick={()=>{navigate(`/collection/${c.id}`);setSearchOpen(false)}}><span>{c.brand} <strong>{c.model}</strong></span><ArrowUpRight size={18}/></button>) : <p className="search-panel__empty">No matches found. Try another manufacturer or model.</p>}
          </div>
          <p className="search-panel__tip">PRESS <kbd>ESC</kbd> TO CLOSE <span>·</span> <kbd>CTRL K</kbd> TO SEARCH</p>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </>
}

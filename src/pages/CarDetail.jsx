import CarPrice from '../components/CarPrice'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { cars, formatAcceleration, formatSpeed } from '../data/cars'
import { commons } from '../data/media'
import ImageFrame from '../components/ImageFrame'
import CarCard from '../components/CarCard'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

export default function CarDetail() {
  const { id } = useParams()
  const car = cars.find(c => c.id === id)
  const [viewer, setViewer] = useState(null)
  useEffect(()=>setViewer(null),[id])
  useEffect(() => {
    if (viewer === null) return
    const key = e => {if (e.key==='Escape') setViewer(null);if(e.key==='ArrowRight') setViewer(i=>(i+1)%car.images.length);if(e.key==='ArrowLeft')setViewer(i=>(i-1+car.images.length)%car.images.length)}
    document.addEventListener('keydown',key);document.body.style.overflow='hidden'
    return ()=>{document.removeEventListener('keydown',key);document.body.style.overflow=''}
  }, [viewer,car])
  if (!car) return <div className="not-found page-container"><p className="eyebrow">404 / NO MACHINE FOUND</p><h1>LOST IN MOTION.</h1><Link to="/collection" className="button-primary">RETURN TO COLLECTION <ArrowUpRight size={18}/></Link></div>
  const specs = [ ['ENGINE',car.engine], ['MAXIMUM POWER',`${car.hp.toLocaleString()} hp`], ['TORQUE',car.torque], ['TOP SPEED',formatSpeed(car)], ['0–100 KM/H',formatAcceleration(car)], ['TRANSMISSION',car.transmission], ['DRIVETRAIN',car.drivetrain], ['WEIGHT',car.weight], ['PRODUCTION',car.years] ]
  const related = cars.filter(c=>c.id!==car.id).sort((a,b)=>Number(b.brand===car.brand)-Number(a.brand===car.brand)).slice(0,3)
  return <article className="car-detail">
    <section className="detail-hero"><ImageFrame file={car.image} eager width={1900} alt={`${car.brand} ${car.model}`} className="detail-hero__photo"/><div className="detail-hero__shade"/><div className="page-container detail-hero__inner"><Link className="profile-button detail-hero__back" to="/collection">
        <ArrowLeft size={18} aria-hidden="true"/> Back to collection
      </Link><div><p className="eyebrow"><span className="eyebrow-dot"/>{car.brand.toUpperCase()} / {car.category.toUpperCase()}</p><h1>{car.model.toUpperCase()}<span className="detail-hero__dot">.</span></h1><p>{car.short}</p></div><div className="detail-hero__bottom"><span>POWER / PRECISION / PERSONALITY</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>
    <section className="section detail-intro page-container"><div><ScrollReveal><p className="eyebrow"><span className="eyebrow-dot"/>01 / THE MACHINE</p><h2 className="section-title">BUILT BEYOND<br/><em>EXPECTATION.</em></h2></ScrollReveal></div><ScrollReveal delay={0.12}><p className="lead-text">{car.story}</p><div className="detail-tags">{car.tags.map(tag=><span key={tag}>{tag}</span>)}</div></ScrollReveal></section>
    <section className="section detail-specs"><div className="page-container"><SectionHeading kicker="02 / TECHNICAL INTELLIGENCE" title={<>THE NUMBERS<br/><em>SPEAK.</em></>} desc="Performance is a story told in a thousand engineering decisions."/><div className="detail-specs__headline"><div><strong>{car.hp.toLocaleString()}</strong><span>HP</span><small>MAXIMUM POWER</small></div><div><strong>{car.topSpeed ?? '—'}</strong><span>KM/H</span><small>TOP SPEED {car.topSpeed ? '' : 'NOT PUBLISHED'}</small></div><div><strong>{car.acceleration?.toFixed(1) ?? '—'}</strong><span>SEC</span><small>0–100 KM/H {car.acceleration ? '' : 'NOT PUBLISHED'}</small></div></div><CarPrice price={car.price} showSource/>
      <div className="detail-specs__grid">{specs.map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong></div>)}</div><Link className="shelf-link spec-compare" to={`/compare?first=${car.id}`}>Compare this model</Link><p className="spec-note">Published figures may vary by year, variant, market and measurement method. Unverified data is shown as undisclosed.</p></div></section>
    <section className="section detail-design page-container"><div className="detail-design__copy"><ScrollReveal><p className="eyebrow"><span className="eyebrow-dot"/>03 / DESIGN LANGUAGE</p><h2 className="section-title">A STUDY IN<br/><em>INTENTION.</em></h2><p>{car.design}</p></ScrollReveal></div><ScrollReveal y={70}><ImageFrame file={car.images[1] || car.image} alt={`Alternate angle of ${car.brand} ${car.model}`} className="detail-design__photo" width={1400}/></ScrollReveal></section>
    <section className="section gallery-section page-container"><SectionHeading kicker="04 / THE GALLERY" title={<>EVERY ANGLE.<br/><em>EVERY DETAIL.</em></>} desc="Discover the lines, surfaces and character behind the performance."/><div className="gallery-grid">{car.images.map((f,i)=><button key={`${f}-${i}`} className={`gallery-tile ${i===0?'gallery-tile--large':''}`} onClick={()=>setViewer(i)} aria-label={`Open photo ${i+1} fullscreen`}><ImageFrame documentary file={f} alt={`${car.model}, view ${i+1}`} width={1200}/><span><Maximize2 size={19}/> VIEW IMAGE 0{i+1}</span></button>)}</div></section>
    <section className="section related-section page-container"><SectionHeading kicker="05 / FURTHER EXPLORATION" title={<>KEEP THE<br/><em>OBSESSION ALIVE.</em></>} right={<Link to="/collection" className="text-link">ALL MACHINES <ArrowUpRight size={18}/></Link>}/><div className="featured-grid">{related.map((c,i)=><ScrollReveal key={c.id} delay={i*0.07}><CarCard car={c}/></ScrollReveal>)}</div></section>
    <AnimatePresence>{viewer !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${car.model} photo gallery`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="lightbox__top"><span>{car.brand} / {car.model}</span><button onClick={()=>setViewer(null)} aria-label="Close fullscreen gallery"><X size={25}/></button></div><img onError={event => {event.currentTarget.onerror = null; if (!event.currentTarget.src.endsWith("/car-outline.svg")) event.currentTarget.src = "/car-outline.svg"}} src={commons(car.images[viewer],1920)} alt={`${car.brand} ${car.model}, view ${viewer+1}`}/><div className="lightbox__bottom"><button aria-label="Previous image" onClick={()=>setViewer(i=>(i-1+car.images.length)%car.images.length)}><ChevronLeft size={26}/></button><span>{String(viewer+1).padStart(2,'0')} / {String(car.images.length).padStart(2,'0')}</span><button aria-label="Next image" onClick={()=>setViewer(i=>(i+1)%car.images.length)}><ChevronRight size={26}/></button></div></motion.div>}</AnimatePresence>
  </article>
}

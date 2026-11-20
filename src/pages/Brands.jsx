import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import ImageFrame from '../components/ImageFrame'
import ScrollReveal from '../components/ScrollReveal'
import { brands, cars } from '../data/cars'

export default function Brands() {
  return <><PageHero number="02" label="THE MARQUES" title={<>BORN TO<br/><em>BE LEGENDARY.</em></>} description="Behind every great machine is a great idea. Meet the makers whose vision changed performance forever."/>
    <section className="section brands-page page-container"><p className="brands-page__count micro-label">08 HOUSES OF PERFORMANCE <span>— A–Z / THE VELOCITY DIRECTORY</span></p><div className="brands-directory">{brands.map((brand,i)=><ScrollReveal key={brand.name} className="brands-directory__item"><Link to={`/brands/${brand.name.toLowerCase().replaceAll(' ','-')}`}><div className="brands-directory__photo"><ImageFrame file={brand.image} alt={`${brand.name} performance car`} width={1150}/><span className="brands-directory__num">0{i+1} / 08</span></div><div className="brands-directory__bottom"><div><span className="micro-label">{brand.origin}</span><h2>{brand.name}</h2><p>{brand.tagline}</p></div><span className="brands-directory__arrow"><ArrowUpRight size={24}/></span></div></Link></ScrollReveal>)}</div></section>
  </>
}

export function BrandDetail() {
  const { slug } = useParams()
  const brand = brands.find(b=>b.name.toLowerCase().replaceAll(' ','-')===slug)
  if (!brand) return <section className="not-found page-container"><h1>BRAND NOT FOUND.</h1><Link to="/brands" className="button-primary">VIEW ALL BRANDS <ArrowUpRight size={17}/></Link></section>
  const models = cars.filter(c=>c.brand===brand.name)
  return <><section className="brand-detail-hero"><ImageFrame eager file={brand.image} alt={`${brand.name} supercar`} className="brand-detail-hero__image" width={1800}/><div className="brand-detail-hero__shade"/><div className="page-container brand-detail-hero__inner"><Link to="/brands" className="back-link">← ALL MANUFACTURERS</Link><p className="eyebrow"><span className="eyebrow-dot"/>{brand.origin.toUpperCase()}</p><h1>{brand.name.toUpperCase()}.</h1><p>{brand.tagline}</p></div></section><section className="section page-container brand-detail-body"><div><p className="eyebrow"><span className="eyebrow-dot"/>THE MARQUE</p><h2 className="section-title">A LEGACY<br/><em>IN MOTION.</em></h2></div><div><p className="lead-text">Every manufacturer has its own idea of excellence. {brand.name} brings a singular vision to the world of extraordinary machines.</p><p>Discover the models in our editorial collection and explore the engineering, design and emotion that make the marque distinctive.</p></div></section><section className="section page-container"><h2 className="section-title brand-model-title">IN THE <em>COLLECTION.</em></h2><div className="brand-model-grid">{models.map(c=><Link key={c.id} to={`/collection/${c.id}`} className="brand-model-item"><ImageFrame file={c.image} alt={c.model} width={950}/><div><span>{c.category}</span><h3>{c.model}</h3><ArrowUpRight size={20}/></div></Link>)}</div></section></>
}

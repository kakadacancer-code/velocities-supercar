import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import CarCard from '../components/CarCard'
import { brands, cars } from '../data/cars'

const categories = ['All types', 'Supercar', 'Hypercar', 'Track-focused', 'Hybrid', 'Electric performance']
export default function Collection() {
  const [params, setParams] = useSearchParams()
  const search = params.get('search') || ''
  const manufacturer = params.get('brand') || 'All manufacturers'
  const category = params.get('type') || 'All types'
  const power = params.get('power') || 'all'
  const sort = params.get('sort') || 'featured'

  function changeFilter(key, value, initial = '') {
    setParams(previous => {
      const next = new URLSearchParams(previous)
      if (value === initial) next.delete(key)
      else next.set(key, value)
      return next
    }, {replace: key === 'search'})
  }
  const [filterOpen, setFilterOpen] = useState(false)
  const filterButton = useRef(null)
  const filtered = useMemo(() => {
    const result = cars.filter(c =>
      (!search || `${c.brand} ${c.model} ${c.category}`.toLowerCase().includes(search.toLowerCase())) &&
      (manufacturer === 'All manufacturers' || c.brand === manufacturer) &&
      (category === 'All types' || c.category === category) &&
      (power === 'all' || (power === 'under700' ? c.hp < 700 : power === '700to1000' ? c.hp >= 700 && c.hp <= 1000 : c.hp > 1000))
    )
    if (sort === 'alpha') result.sort((a,b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`))
    if (sort === 'power') result.sort((a,b)=>b.hp-a.hp)
    if (sort === 'speed') result.sort((a,b)=>(b.topSpeed ?? 0)-(a.topSpeed ?? 0))
    return result
  }, [search, manufacturer, category, power, sort])
  const clear = () => setParams({})
  const hasFilters = search || manufacturer !== 'All manufacturers' || category !== 'All types' || power !== 'all'
  return <>
    <PageHero number="01" label="THE COLLECTION" title={<>OBJECTS OF<br/><em>OBSESSION.</em></>} description="From naturally aspirated icons to the electric frontier. Explore a curated collection of extraordinary performance machines."/>
    <div className="page-container collection-page">
      <div className="collection-toolbar"><div className="collection-toolbar__count" aria-live="polite"><span className="eyebrow-dot"/><strong>{filtered.length.toString().padStart(2,'0')}</strong><span>MACHINES IN VIEW</span></div><div className="collection-toolbar__controls"><div className="collection-search"><Search size={17}/><input value={search} onChange={e=>changeFilter('search',e.target.value)} placeholder="Search by name..." aria-label="Search cars"/>{search && <button aria-label="Clear search" onClick={()=>changeFilter('search','')}><X size={14}/></button>}</div><label className="visually-hidden" htmlFor="sort">Sort by</label><select id="sort" className="select-control" value={sort} onChange={e=>changeFilter('sort',e.target.value,'featured')}><option value="featured">Featured first</option><option value="alpha">Name A–Z</option><option value="power">Most horsepower</option><option value="speed">Top speed</option></select><button ref={filterButton} aria-controls="collection-filters" className="filter-toggle" onClick={()=>setFilterOpen(v=>!v)} aria-expanded={filterOpen}><SlidersHorizontal size={17}/> FILTERS</button></div></div>
      <div className={`collection-layout ${filterOpen ? 'collection-layout--filters-open' : ''}`}>
        <aside id="collection-filters" className="collection-filters"><div className="collection-filters__top"><span className="micro-label">REFINE EXPLORATION</span><button onClick={clear}>RESET ALL <X size={13}/></button></div>
          <div className="filter-group"><label htmlFor="brand-filter">MANUFACTURER</label><select id="brand-filter" className="select-control" value={manufacturer} onChange={e=>changeFilter('brand',e.target.value,'All manufacturers')}><option>All manufacturers</option>{brands.map(b=><option key={b.name}>{b.name}</option>)}</select></div>
          <div className="filter-group"><p>VEHICLE CATEGORY</p><div className="filter-options">{categories.map(c=><button key={c} className={category===c?'active':''} aria-pressed={category === c} onClick={()=>changeFilter('type',c,'All types')}><span className="radio-dot"/>{c}</button>)}</div></div>
          <div className="filter-group"><p>HORSEPOWER</p><div className="filter-options">{[['all','Any output'],['under700','Below 700 HP'],['700to1000','700–1,000 HP'],['over1000','Over 1,000 HP']].map(([v,l])=><button className={power===v?'active':''} key={v} aria-pressed={power === v} onClick={()=>changeFilter('power',v,'all')}><span className="radio-dot"/>{l}</button>)}</div></div>
          {hasFilters && <button className="filter-clear" onClick={clear}>CLEAR FILTERS <X size={15}/></button>}
          <button className="button-primary filter-results" onClick={() => {
            setFilterOpen(false)
            filterButton.current?.focus()
          }}>Show {filtered.length} {filtered.length === 1 ? 'machine' : 'machines'}</button>
        </aside>
        <div className="collection-results"><div className="collection-grid"><AnimatePresence mode="popLayout" initial={false}>{filtered.map((car,i)=><motion.div layout key={car.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.97}} transition={{duration:0.35}}><CarCard car={car} number={String(i+1).padStart(2,'0')}/></motion.div>)}</AnimatePresence></div>{!filtered.length && <div className="collection-empty"><h2>NO MACHINES FOUND.</h2><p>Try broadening your filters to rediscover the extraordinary.</p><button onClick={clear} className="button-primary">RESET EXPLORATION</button></div>}</div>
      </div>
    </div>
  </>
}

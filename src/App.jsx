import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig, motion, useReducedMotion } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { cars } from './data/cars'
import { articles } from './data/articles'

const Compare = lazy(() => import('./pages/Compare'))
const Home = lazy(()=>import('./pages/Home'))
const Collection = lazy(()=>import('./pages/Collection'))
const CarDetail = lazy(()=>import('./pages/CarDetail'))
const Brands = lazy(()=>import('./pages/Brands'))
const BrandDetail = lazy(()=>import('./pages/Brands').then(m=>({default:m.BrandDetail})))
const Stories = lazy(()=>import('./pages/Stories'))
const StoryDetail = lazy(()=>import('./pages/StoryDetail'))
const About = lazy(()=>import('./pages/About'))
const Credits = lazy(()=>import('./pages/Credits'))
const NotFound = lazy(()=>import('./pages/NotFound'))

const pageTitles = {
  '/': 'The Art of Supercars',
  '/compare': 'Compare machines',
  '/collection': 'The Collection',
  '/brands': 'The Marques',
  '/stories': 'The Journal',
  '/about': 'Our Philosophy',
  '/credits': 'Photography Credits',
}

function usePageNavigation(pathname) {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
    const [, section, slug] = pathname.split('/')
    const car = section === 'collection' && cars.find(item => item.id === slug)
    const story = section === 'stories' && articles.find(item => item.slug === slug)
    const brand = section === 'brands' && cars.find(item => item.brand.toLowerCase().replaceAll(' ', '-') === slug)
    const title = pageTitles[pathname] || (car && `${car.brand} ${car.model}`) || story?.title || brand?.brand || 'Page not found'
    document.title = `${title} — VELOCITY`
  }, [pathname])
}

export default function App() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  usePageNavigation(pathname)
  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar/>
    <main id="main-content" tabIndex={-1}>
      <motion.div key={pathname} initial={reduced || pathname === '/' ? false : {opacity: .6}}
        animate={{opacity: 1}} transition={{duration: reduced ? 0 : .22}}>
        <Suspense fallback={<div className="route-loading" role="status">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/collection/:id" element={<CarDetail/>}/>
            <Route path="/brands" element={<Brands/>}/>
            <Route path="/brands/:slug" element={<BrandDetail/>}/>
            <Route path="/stories" element={<Stories/>}/>
            <Route path="/stories/:slug" element={<StoryDetail/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/credits" element={<Credits/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Suspense>
      </motion.div>
    </main>
    <Footer/>
  </MotionConfig>
}

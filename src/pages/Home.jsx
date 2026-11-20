import { Link } from 'react-router-dom'
import HeroSection from '../sections/HeroSection'
import PerformanceSection from '../sections/PerformanceSection'
import BrandShowcase from '../sections/BrandShowcase'
import ScrollReveal from '../components/ScrollReveal'
import ImageFrame from '../components/ImageFrame'
import CarCard from '../components/CarCard'
import { cars } from '../data/cars'
import { articles } from '../data/articles'

const selection = ['sf90-stradale', 'mclaren-765lt', '911-gt3-rs'].map(id => cars.find(car => car.id === id))

export default function Home() {
  return <>
    <HeroSection />
    <section className="page-container home-shelf" aria-labelledby="collection-heading">
      <p className="issue-label"><span className="racing-rule"/> The collection</p>
      <div className="shelf-heading">
        <h2 id="collection-heading">Selected machines<span>.</span></h2>
        <Link className="shelf-link" to="/collection">View collection</Link>
      </div>
      <div className="home-card-grid">{selection.map(car =>
        <CarCard key={car.id} car={car}/>
      )}</div>
    </section>
    <section className="home-journal">
      <div className="page-container home-shelf">
        <p className="issue-label"><span className="racing-rule"/> The journal</p>
        <div className="shelf-heading"><h2>From the editors<span>.</span></h2><Link className="shelf-link" to="/stories">All stories</Link></div>
        <div className="home-card-grid">{articles.slice(0, 3).map((article, i) =>
          <ScrollReveal key={article.slug} delay={i * 0.05}><Link className="story-card" to={`/stories/${article.slug}`}>
            <div className="story-card__visual"><ImageFrame file={article.image} alt="" width={1000}/></div>
            <div className="story-card__meta"><span>{article.category}</span><span>{article.readTime}</span></div>
            <h3>{article.title}</h3><p>{article.teaser}</p>
          </Link></ScrollReveal>
        )}</div>
      </div>
    </section>
    <PerformanceSection/>
    <BrandShowcase/>
  </>
}

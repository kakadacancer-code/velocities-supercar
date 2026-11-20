import CarPrice from './CarPrice'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ImageFrame from './ImageFrame'
import { formatAcceleration } from '../data/cars'

export default function CarCard({ car, large = false }) {
  return <Link to={`/collection/${car.id}`} className={`car-card group ${large ? 'car-card--large' : ''}`} aria-label={`Explore ${car.brand} ${car.model}`}>
    <div className="car-card__visual">
      <ImageFrame file={car.image} width={950} alt={`${car.brand} ${car.model}`} className="car-card__image" />
      <div className="car-card__image-tint" />
      <div className="car-card__index">{car.category}</div>
      <span className="car-card__arrow"><ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" /></span>
    </div>
    <div className="car-card__body">
      <p className="micro-label">{car.brand}</p>
      <h3>{car.model}</h3>
      <CarPrice price={car.price}/>
      <div className="car-card__specs">
        <div><strong>{car.hp.toLocaleString()}</strong><span>HORSEPOWER</span></div>
        <div><strong>{car.topSpeed ? car.topSpeed : '—'}</strong><span>KM/H TOP SPEED</span></div>
        <div><strong>{formatAcceleration(car).replace(' s', '')}</strong><span>0–100 KM/H · S</span></div>
      </div>
    </div>
  </Link>
}

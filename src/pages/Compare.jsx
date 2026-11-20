import CarPrice from '../components/CarPrice'
import { Link, useSearchParams } from 'react-router-dom'
import ImageFrame from '../components/ImageFrame'
import { cars, formatAcceleration, formatSpeed } from '../data/cars'

const specifications = [
  ['Power output', car => `${car.hp.toLocaleString()} hp`],
  ['0–100 km/h', formatAcceleration],
  ['Top speed', formatSpeed],
  ['Engine', car => car.engine],
  ['Torque', car => car.torque],
  ['Transmission', car => car.transmission],
  ['Drivetrain', car => car.drivetrain],
  ['Weight', car => car.weight],
  ['Production', car => car.years],
]

export default function Compare() {
  const [params, setParams] = useSearchParams()
  const first = cars.find(car => car.id === params.get('first')) ?? cars[0]
  const second = cars.find(car => car.id === params.get('second') && car !== first)
    ?? cars.find(car => car !== first)
  const pair = [first, second]

  function choose(side, id) {
    setParams({first: side === 0 ? id : first.id, second: side === 1 ? id : second.id})
  }

  return <section className="page-container comparison">
    <p className="issue-label"><span className="racing-rule"/> Performance data</p>
    <h1>Compare machines<span>.</span></h1>
    <p className="comparison__intro">Choose two models to see how their engineering compares.</p>
    <div className="comparison__models">{pair.map((car, index) =>
      <div key={index} className="comparison__model">
        <label htmlFor={`compare-${index}`}>Model {index + 1}</label>
        <select id={`compare-${index}`} className="select-control" value={car.id} onChange={event => choose(index, event.target.value)}>
          {cars.map(option => <option key={option.id} value={option.id} disabled={option === pair[1-index]}>{option.brand} {option.model}</option>)}
        </select>
        <Link to={`/collection/${car.id}`} aria-label={`Explore ${car.brand} ${car.model}`}><ImageFrame file={car.image} alt={`${car.brand} ${car.model}`} eager/></Link>
      </div>
    )}</div>
    <table className="comparison__table">
      <caption className="visually-hidden">Side-by-side specifications</caption>
      <thead><tr><th scope="col">Specification</th>{pair.map(car => <th key={car.id} scope="col">{car.brand} {car.model}</th>)}</tr></thead>
      <tbody>
        <tr><th scope="row">Published price</th>{pair.map(car => <td key={car.id}><CarPrice price={car.price}/></td>)}</tr>
        {specifications.map(([label, format]) => <tr key={label}><th scope="row">{label}</th>{pair.map(car => <td key={car.id}>{format(car)}</td>)}</tr>)}</tbody>
    </table>
    <p className="spec-note">Figures vary by variant and test method. Weight figures include the measurement basis where available.</p>
  </section>
}

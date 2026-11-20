import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import ImageFrame from '../components/ImageFrame'
import ScrollReveal from '../components/ScrollReveal'
import { cars } from '../data/cars'

const car = cars.find(model => model.id === 'aventador-svj')
const metrics = [
  {value: car.hp, unit: 'HP', label: 'MAXIMUM POWER'},
  {value: car.topSpeed, unit: 'KM/H', label: 'TOP SPEED'},
  {value: car.acceleration, unit: 'SEC', label: '0–100 KM/H'},
  {value: 6.5, unit: 'L V12', label: 'NATURALLY ASPIRATED'},
]

function Metric({value, unit, label, visible}) {
  const reduced = useReducedMotion()
  const output = useMotionValue(0)
  const display = useTransform(output, number => number.toFixed(Number.isInteger(value) ? 0 : 1))
  useEffect(() => {
    if (!visible || reduced) return
    const animation = animate(output, value, {duration: .8, ease: 'easeOut'})
    return () => animation.stop()
  }, [output, reduced, value, visible])
  return <div className="performance__metric">
    <div><motion.strong>{reduced ? value : display}</motion.strong><span>{unit}</span></div><p>{label}</p>
  </div>
}

export default function PerformanceSection() {
  const section = useRef(null)
  const visible = useInView(section, {once: true, amount: .12})
  return <section className="performance" ref={section}>
    <ImageFrame file={car.image} className="performance__background" alt="" width={1920}/>
    <div className="performance__shade"/>
    <div className="page-container performance__content">
      <ScrollReveal>
        <p className="issue-label"><span className="racing-rule"/> Performance study</p>
        <h2 className="section-title performance__title">Inside the <em>V12.</em></h2>
        <p className="performance__description">The Aventador SVJ pairs a 6.5-liter V12 with active aerodynamics and all-wheel drive.</p>
        <Link to={`/collection/${car.id}`} className="shelf-link">Explore the engineering</Link>
      </ScrollReveal>
      <div className="performance__metrics">{metrics.map(metric => <Metric key={metric.label} {...metric} visible={visible}/>)}</div>
    </div>
  </section>
}

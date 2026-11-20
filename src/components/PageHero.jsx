import { motion, useReducedMotion } from 'motion/react'

export default function PageHero({ number, label, title, description, aside }) {
  const reduced = useReducedMotion()
  return <section className="page-hero page-container">
    <motion.p className="eyebrow" initial={reduced ? false : {opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}>
      <span className="eyebrow-dot" />{number && `${number} / `}{label}
    </motion.p>
    <div className="page-hero__layout">
      <motion.h1 className="page-title" initial={reduced ? false : {opacity: 0, y: 32}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.15}}>{title}</motion.h1>
      {description && <motion.div initial={reduced ? false : {opacity: 0, y: 22}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.3}} className="page-hero__desc"><p>{description}</p>{aside}</motion.div>}
    </div>
  </section>
}

import { motion, useReducedMotion } from 'motion/react'

export default function ScrollReveal({ children, className = '', delay = 0, y = 16, ...props }) {
  const reduceMotion = useReducedMotion()
  return <motion.div
    initial={reduceMotion ? false : { opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05, margin: '0px' }}
    transition={{ duration: reduceMotion ? 0 : 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className} {...props}
  >{children}</motion.div>
}

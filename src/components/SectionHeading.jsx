import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ kicker, title, desc, right, className = '' }) {
  return <ScrollReveal className={`section-heading ${className}`}>
    <div>
      {kicker && <p className="eyebrow"><span className="eyebrow-dot" />{kicker}</p>}
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-subtitle">{desc}</p>}
    </div>
    {right && <div className="section-heading__right">{right}</div>}
  </ScrollReveal>
}

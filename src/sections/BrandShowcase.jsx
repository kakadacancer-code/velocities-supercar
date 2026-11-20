import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import ImageFrame from "../components/ImageFrame";
import { brands } from "../data/cars";

export default function BrandShowcase() {
  const [active, setActive] = useState(0);
  return (
    <section className="section brand-section page-container">
      <div className="brand-section__heading">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            ICONIC MARQUES
          </p>
          <h2 className="section-title">
            THE <em>LEGENDS.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p>
            Eight marques. Countless boundaries broken. Explore the names that
            shaped a culture.
          </p>
          <Link to="/brands" className="text-link">
            DISCOVER ALL BRANDS <ArrowUpRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
      <div className="brand-section__layout">
        <div className="brand-section__list">
          {brands.map((b, i) => (
            <Link
              to={`/brands/${b.name.toLowerCase().replaceAll(" ", "-")}`}
              className={`brand-row ${active === i ? "brand-row--active" : ""}`}
              key={b.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="brand-row__num">0{i + 1}</span>
              <strong>{b.name}</strong>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
        <div className="brand-section__preview" aria-hidden="true">
          <ImageFrame
            key={brands[active].image}
            file={brands[active].image}
            alt=""
            width={900}
            className="brand-section__preview-img"
          />
          <div className="brand-section__preview-caption">
            <span>{brands[active].origin}</span>
            <span>0{active + 1} / 08</span>
          </div>
        </div>
      </div>
    </section>
  );
}

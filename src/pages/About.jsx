import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ImageFrame from "../components/ImageFrame";
import ScrollReveal from "../components/ScrollReveal";
import { media } from "../data/media";

const values = [
  {
    number: "01",
    name: "OBSESSION",
    copy: "We believe the best engineering begins with a refusal to settle. Every machine has a story worth telling.",
  },
  {
    number: "02",
    name: "PRECISION",
    copy: "Our design language is intentional. We give details space, respect the numbers and let the work speak.",
  },
  {
    number: "03",
    name: "EMOTION",
    copy: "Supercars are more than specifications. They are an experience that captures the imagination.",
  },
];
export default function About() {
  return (
    <>
      <PageHero
        number="04"
        label="THE VELOCITY PHILOSOPHY"
        title={
          <>
            BUILT FOR THE
            <br />
            <em>OBSESSION.</em>
          </>
        }
        description="VELOCITY celebrates the extraordinary world of supercars, where engineering, art, and ambition converge."
      />
      <section className="about-photo">
        <ImageFrame
          file={media.jesko}
          alt="Koenigsegg Jesko showcase"
          width={1800}
        />
        <div className="about-photo__overlay" />
        <span>THE PURSUIT OF EXTRAORDINARY / SINCE 2026</span>
      </section>
      <section className="section page-container about-manifesto">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            01 / OUR POINT OF VIEW
          </p>
          <h2 className="section-title">
            THE THINGS
            <br />
            THAT <em>MOVE US.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="lead-text">
            Not every story can be measured in horsepower or seconds.
          </p>
          <p>
            We created VELOCITY as a home for automotive curiosity: a place
            where the shapes, technology, history and human ambition behind the
            most extraordinary machines can be explored with care.
          </p>
          <p>
            Rather than a marketplace or a conventional car blog, this is an
            independent digital editorial experience built around a simple
            belief: great cars deserve great storytelling.
          </p>
        </ScrollReveal>
      </section>
      <section className="section about-values">
        <div className="page-container">
          <ScrollReveal>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              02 / OUR APPROACH
            </p>
            <h2 className="section-title">
              OUR <em>DRIVING FORCE.</em>
            </h2>
          </ScrollReveal>
          <div className="about-values__grid">
            {values.map((v) => (
              <ScrollReveal key={v.number}>
                <div className="about-value">
                  <span>{v.number} / 03</span>
                  <h3>{v.name}</h3>
                  <p>{v.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section page-container about-last">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            03 / KEEP EXPLORING
          </p>
          <h2>
            PRECISION IS A LANGUAGE.
            <br />
            <em>PASSION IS UNIVERSAL.</em>
          </h2>
          <Link className="button-primary" to="/collection">
            DISCOVER THE COLLECTION <ArrowUpRight size={18} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}

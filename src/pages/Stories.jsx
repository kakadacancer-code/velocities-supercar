import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { articles, storyCategories } from "../data/articles";
import PageHero from "../components/PageHero";
import ImageFrame from "../components/ImageFrame";
import SectionHeading from "../components/SectionHeading";

function StoryTile({ article }) {
  return (
    <Link to={`/stories/${article.slug}`} className="story-card">
      <div className="story-card__visual">
        <ImageFrame file={article.image} alt={article.title} width={1100} />
        <span className="story-card__arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="story-card__meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.teaser}</p>
      <span className="story-card__read">
        READ ARTICLE <ArrowRight size={16} />
      </span>
    </Link>
  );
}
export default function Stories() {
  const [active, setActive] = useState("All");
  const feature = articles[0];
  const visible = articles.filter(
    (a) => active === "All" || a.category === active,
  );
  return (
    <>
      <PageHero
        number="03"
        label="THE JOURNAL"
        title={
          <>
            STORIES THAT
            <br />
            <em>MOVE US.</em>
          </>
        }
        description="A deeper look at the ideas, people and engineering behind extraordinary automotive culture."
      />
      <section className="page-container stories-page">
        <div className="stories-page__feature">
          <div className="stories-page__feature-photo">
            <ImageFrame file={feature.image} width={1500} alt={feature.title} />
          </div>
          <div className="stories-page__feature-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              FEATURED EDITORIAL / {feature.category.toUpperCase()}
            </span>
            <h2>{feature.title}</h2>
            <p>{feature.teaser}</p>
            <div className="stories-page__feature-bottom">
              <span>
                {feature.date} &nbsp;·&nbsp; {feature.readTime}
              </span>
              <Link to={`/stories/${feature.slug}`}>
                READ THE STORY <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="stories-page__browse">
          <SectionHeading
            kicker="EXPLORE OUR PERSPECTIVE"
            title={
              <>
                THE <em>ARCHIVE.</em>
              </>
            }
          />
          <div
            className="category-tabs"
            role="group"
            aria-label="Filter story categories"
          >
            {storyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={active === category ? "active" : ""}
                aria-pressed={active === category}
              >
                {category}
              </button>
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <div className="stories-grid">
              {visible.map((article) => (
                <motion.div
                  layout
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <StoryTile article={article} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

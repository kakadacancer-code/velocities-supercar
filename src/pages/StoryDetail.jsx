import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { articles } from "../data/articles";
import ImageFrame from "../components/ImageFrame";
import SectionHeading from "../components/SectionHeading";

export default function StoryDetail() {
  const { slug } = useParams();
  const story = articles.find((a) => a.slug === slug);
  useEffect(() => {
    if (!story) return;
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--reading-progress",
        max ? `${(window.scrollY / max) * 100}%` : "0%",
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      document.documentElement.style.removeProperty("--reading-progress");
    };
  }, [story]);
  if (!story)
    return (
      <div className="not-found page-container">
        <h1>STORY NOT FOUND.</h1>
        <Link to="/stories" className="button-primary">
          BACK TO THE JOURNAL
        </Link>
      </div>
    );
  const next = articles[(articles.indexOf(story) + 1) % articles.length];
  return (
    <>
      <div className="reading-line" aria-hidden="true" />
      <article>
        <header className="article-hero page-container">
          <Link to="/stories" className="back-link">
            <ArrowLeft size={16} /> BACK TO THE JOURNAL
          </Link>
          <div className="article-hero__meta">
            <span>{story.category}</span>
            <span>{story.date}</span>
            <span>{story.readTime}</span>
          </div>
          <h1>{story.title}</h1>
          <p>{story.teaser}</p>
        </header>
        <div className="page-container">
          <ImageFrame
            file={story.image}
            eager
            width={1800}
            alt={story.title}
            className="article-cover"
          />
        </div>
        <div className="article-content">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            THE VELOCITY JOURNAL
          </p>
          <p className="article-content__first">{story.paragraphs[0]}</p>
          {story.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="article-content__rule" />
          <p className="article-content__note">
            VELOCITY is an independent editorial concept. Articles are
            educational features, not manufacturer endorsements.
          </p>
          <Link className="back-link" to="/stories">
            <ArrowLeft size={16} /> ALL STORIES
          </Link>
        </div>
      </article>
      <section className="section page-container next-story">
        <SectionHeading
          kicker="CONTINUE READING"
          title={
            <>
              MORE TO <em>EXPLORE.</em>
            </>
          }
        />
        <Link to={`/stories/${next.slug}`}>
          <ImageFrame file={next.image} alt={next.title} width={1300} />
          <div>
            <span>
              {next.category} / {next.readTime}
            </span>
            <h3>{next.title}</h3>
            <ArrowUpRight size={26} />
          </div>
        </Link>
      </section>
    </>
  );
}

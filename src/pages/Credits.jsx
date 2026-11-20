import { ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import { photoCredits } from "../data/media";
export default function Credits() {
  return (
    <>
      <PageHero
        label="PHOTOGRAPHY & ATTRIBUTION"
        title={
          <>
            CREDIT WHERE
            <br />
            <em>IT'S DUE.</em>
          </>
        }
        description="Model spotlights and collection covers use AI-generated editorial illustrations. Documentary photographs in the galleries come from Wikimedia Commons."
      />
      <section className="section page-container credits-page">
        <p>
          The following credits apply to the Wikimedia Commons photographs.
          Image crops and color overlays may be applied by the website layout.
          This site does not claim ownership of these photographs. Before
          commercial deployment, verify the current license, author and
          attribution requirements for every asset.
        </p>
        <div>
          {photoCredits.map((c) => (
            <a
              href={c.url}
              key={c.file}
              target="_blank"
              rel="noreferrer"
              className="credits-row"
            >
              <span>{c.file}</span>
              <span>{c.author}</span>
              <span>{c.license}</span>
              <ExternalLink size={17} />
            </a>
          ))}
        </div>
        <p>
          Creative Commons licenses:{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 4.0
          </a>{" "}
          ·{" "}
          <a
            href="https://creativecommons.org/licenses/by/2.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY 2.0
          </a>
          . The manufacturer names are trademarks of their respective owners.
          VELOCITY is an independent concept and is not affiliated with them.
        </p>
      </section>
    </>
  );
}

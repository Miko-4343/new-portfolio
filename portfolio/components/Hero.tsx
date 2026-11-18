import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="term" aria-label="Summary">
          <div className="term-bar">
            <i />
            <i />
            <i />
            <span style={{ marginLeft: 8 }}>{site.location}</span>
          </div>
          <div className="term-body">
            <div>
              <span className="accent">$</span> whoami
            </div>
            <div className="out">
              {site.name} — undergraduate, {site.school}
            </div>
            <div>
              <span className="accent">$</span> cat status.txt
            </div>
            <div className="out">
              <span className="dot" />
              {hero.status}
            </div>
          </div>
        </div>

        <h1>
          {hero.headline.join(" ")} <span className="accent">{hero.headlineAccent}</span>
          <span className="cursor" aria-hidden="true" />
        </h1>

        <p className="lede">
          I&apos;m {site.name}, an undergraduate at the{" "}
          <strong>
            {site.school}, {site.faculty}
          </strong>
          , graduating into machine learning. What I actually like is the
          unglamorous half: pipelines that rerun cleanly, contracts that hold,
          and latency you can defend in a review.
        </p>

        <div className="actions">
          <a href="#contact" className="btn btn-primary">
            [ get in touch ]
          </a>
          <a href="#about" className="btn">
            [ about me ]
          </a>
        </div>
      </div>
    </section>
  );
}

import { about, toolbox } from "@/lib/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <h2 className="cmd">
          <span className="ps">$</span>cat about.md
        </h2>
        <h3 className="md-h">{about.title}</h3>
        <div className="prose">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="sub">
          <h2 className="cmd">
            <span className="ps">$</span>git log --oneline
          </h2>
          <ol className="log">
            {about.trackRecord.map((t) => (
              <li key={t.title}>
                <span className="when">{t.years}</span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="sub">
          <h2 className="cmd">
            <span className="ps">$</span>ls ~/toolbox
          </h2>
          <dl className="kv">
            {toolbox.map((row) => (
              <div key={row.label} style={{ display: "contents" }}>
                <dt>{row.label.toLowerCase()}/</dt>
                <dd>{row.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

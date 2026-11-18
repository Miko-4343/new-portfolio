import { offTheClock as c } from "@/lib/content";

export default function OffTheClock() {
  return (
    <section className="section" id="f1">
      <div className="wrap">
        <h2 className="cmd">
          <span className="ps">$</span>cat off-the-clock/f1.md
        </h2>
        <h3 className="md-h">{c.title}</h3>
        <div className="prose">
          <p>{c.body}</p>
        </div>
        <dl className="kv" style={{ marginTop: 28 }}>
          {c.facts.map((f) => (
            <div key={f.label} style={{ display: "contents" }}>
              <dt>{f.label.toLowerCase().replace(/ /g, "_")}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

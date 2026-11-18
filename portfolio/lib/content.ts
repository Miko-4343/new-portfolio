// All copy lives here so it's easy to edit without touching components.

export const site = {
  name: "Miha Kos",
  email: "mihako43@gmail.com",
  github: "https://github.com/Miko-4343",
  linkedin: "https://www.linkedin.com/in/miha-kos-575422332/",
  photographyUrl: "https://gallery.kosmiha.eu",
  exchangeUrl: "https://korea-exchange.kosmiha.eu",
  location: "Ljubljana, SI",
  school: "University of Ljubljana",
  faculty: "Faculty of Computer Science and Informatics",
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  status: "Open to data engineering internships",
  headline: ["Reliable", "data, then"],
  headlineAccent: "smart models",
  imageLabel: "Ingest · Transform · Serve",
  caption: "Data engineering · Machine learning · F1 on the side",
};

export const offTheClock = {
  kicker: "Off the clock",
  title: "Off the clock: Formula 1",
  body: "I haven't shipped an F1 project yet. What I have is eleven years of watching, a notebook of strategy calls that aged badly, and a clear opinion that a race weekend is the hardest data problem I know.",
  facts: [
    { label: "Next build", value: "tyre degradation model" },
    { label: "Reading", value: "strategy optimisation papers" },
    { label: "Why it matters", value: "one two-second decision window" },
  ],
  imageLabel: "Watching, not modelling · yet",
};

export const about = {
  kicker: "01 — About",
  title: "I like the part of the problem where the data is still ugly.",
  paragraphs: [
    "I'm an undergraduate at the University of Ljubljana, FRI, and I'm working toward graduating with a machine learning focus. The engineering around it is what I want to be hired for: orchestration, modelling, and the quiet tests that make a pipeline trustworthy at 3am — because a model is only as good as the data contract underneath it.",
    "That instinct started with Formula 1, where a race weekend is only useful if you can trust the numbers thirty seconds later. Outside the terminal I shoot photographs — mostly low light, mostly motion — which taught me more about sensor noise than any textbook did.",
  ],
  trackRecord: [
    {
      years: "2023 — 2027",
      title: "BSc Computer Science — University of Ljubljana, FRI",
      body: "Undergraduate at the Faculty of Computer Science and Informatics, heading toward a machine learning graduation. Focus on data engineering and distributed systems.",
    },
    {
      years: "2026",
      title: "Data engineering intern",
      body: "Rebuilt a nightly ingest job into an incremental, tested pipeline.",
    },
    {
      years: "2026",
      title: "Undergraduate research assistant",
      body: "Sequence models for high-frequency sensor data in the campus data systems group.",
    },
  ],
};

export const toolbox = [
  { label: "Languages", items: ["Python", "SQL", "Rust", "TypeScript", "C++"] },
  {
    label: "Data",
    items: [
      "Spark",
      "Kafka",
      "Airflow",
      "dbt",
      "Snowflake",
      "DuckDB",
      "Parquet",
    ],
  },
  {
    label: "ML",
    items: ["PyTorch", "scikit-learn", "JAX", "Optuna", "Weights & Biases"],
  },
  {
    label: "Platform",
    items: ["Docker", "Kubernetes", "Terraform", "GCP", "GitHub Actions"],
  },
];

export const contact = {
  kicker: "02 — Contact",
  title: "Got a dataset that deserves better questions?",
  body: "Hiring teams: I'm looking for data engineering internships, with machine learning close behind. Collaborators: any project where pipelines, streaming data or analytics infrastructure is the hard part. Messages land in my inbox — I answer within a couple of days.",
};

export const photography = {
  kicker: "Viewfinder · External",
  title: "Shifting perspective",
  body: "Low light, long lenses, and everything that isn't code — grouped by where I took them.",
  cta: "View photography",
};

export const footer = {
  tagline:
    "University of Ljubljana · Faculty of Computer Science and Informatics · Data engineering · Machine learning · F1 on the side",
  legal: "© 2026 A. Kim — All laps reserved",
  right: "Data engineering · Machine learning · Ljubljana",
};

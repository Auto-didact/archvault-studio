const services = [
  {
    n: "01",
    t: "Residential Architecture",
    d: "From hillside retreats to urban apartments, we design private homes as carefully composed sequences of rooms, courtyards and thresholds.",
    items: ["Bespoke villas", "Farmhouses & weekend homes", "Apartments & penthouses", "Renovation & restoration"],
  },
  {
    n: "02",
    t: "Commercial & Workplace",
    d: "Workspaces, retail, and mixed-use buildings conceived around civic presence and long-term adaptability.",
    items: ["Office towers", "Headquarters & campuses", "Retail environments", "Mixed-use developments"],
  },
  {
    n: "03",
    t: "Interior Design",
    d: "Interiors as a continuation of the architecture — material-led, precisely detailed, and collaborative with makers across India.",
    items: ["Residential interiors", "Hospitality interiors", "Furniture & joinery", "Art & object curation"],
  },
  {
    n: "04",
    t: "Masterplanning",
    d: "Larger territorial interventions for private clients, institutions, and governments across the subcontinent.",
    items: ["Resort masterplans", "Institutional campuses", "Urban design studies", "Landscape strategy"],
  },
];

const Services = () => (
  <>
    <section className="pt-40 pb-20 md:pt-48 md:pb-28 mx-auto max-w-[1600px] px-6 md:px-10">
      <p className="editorial-eyebrow">§ Practice</p>
      <h1 className="display-hero mt-8 max-w-5xl">
        What we <em className="italic">do.</em>
      </h1>
      <p className="mt-12 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        Four interconnected disciplines, one studio. We take on commissions where architecture, interior and landscape are considered as a single continuous act.
      </p>
    </section>

    <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32 space-y-px bg-border border border-border">
      {services.map((s) => (
        <div key={s.n} className="bg-paper grid md:grid-cols-12 gap-8 p-10 md:p-16">
          <div className="md:col-span-2">
            <p className="font-serif text-5xl font-light">{s.n}</p>
          </div>
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl font-light">{s.t}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
          <ul className="md:col-span-4 md:col-start-9 space-y-3">
            {s.items.map((i) => (
              <li key={i} className="flex justify-between border-t border-border pt-3 text-sm">
                <span>{i}</span>
                <span className="text-muted-foreground">—</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <section className="bg-ink text-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="editorial-eyebrow text-paper/50">§ Process</p>
        <h2 className="display-section mt-6 text-paper max-w-3xl">
          A five-stage <em className="italic">method.</em>
        </h2>
        <div className="mt-16 grid md:grid-cols-5 gap-10">
          {[
            ["Listen", "Conversation, brief, site visits."],
            ["Read", "Climatic, cultural and material research."],
            ["Propose", "Concept in section, model and plan."],
            ["Develop", "Detail, specification, prototyping."],
            ["Build", "On-site supervision, delivery, care."],
          ].map(([t, d], i) => (
            <div key={t} className="border-t border-paper/20 pt-6">
              <p className="text-xs text-paper/40 tracking-[0.3em] uppercase">0{i + 1}</p>
              <h3 className="font-serif text-3xl mt-4 text-paper">{t}</h3>
              <p className="text-sm text-paper/70 mt-4">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;

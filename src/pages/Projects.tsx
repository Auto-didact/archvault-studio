import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial", "Interior", "Hospitality", "Cultural"] as const;

import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="editorial-eyebrow">§ Archive</p>
        <h1 className="display-hero mt-8">Projects</h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-14 border-b border-border">
        <div className="flex flex-wrap gap-3 md:gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs uppercase tracking-[0.25em] px-5 py-3 border transition-colors ${
                filter === c
                  ? "bg-ink text-paper border-ink"
                  : "border-border text-ink hover:bg-paper-warm"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-24 space-y-24 md:space-y-32">
        {visible.map((p, i) => (
          <article key={p.id} className={`grid md:grid-cols-12 gap-8 md:gap-12 items-end ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-8 hover-reveal">
              <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-4">
              <p className="editorial-eyebrow">{p.index} — {p.category}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-4">{p.name}</h2>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between border-t border-border pt-3">
                  <dt className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Location</dt>
                  <dd>{p.location}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3">
                  <dt className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Year</dt>
                  <dd>{p.year}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3">
                  <dt className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Scope</dt>
                  <dd>Architecture & Interiors</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;

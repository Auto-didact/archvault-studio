import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const services = [
  { n: "01", t: "Residential Architecture", d: "Private homes, villas and apartments designed around the rhythms of daily life." },
  { n: "02", t: "Commercial & Workplace", d: "Office towers, retail and mixed-use environments grounded in civic presence." },
  { n: "03", t: "Interior Design", d: "Material-led interiors conceived as a continuation of the architecture." },
  { n: "04", t: "Masterplanning", d: "Neighbourhood and campus-scale planning for developers and institutions." },
];

const team = [
  { name: "Aarav Mehta", role: "Founding Principal", bio: "Columbia GSAPP. 20 years shaping India's residential canon." },
  { name: "Nisha Iyer", role: "Principal, Interiors", bio: "RCA London. Leads the studio's material and craft research." },
  { name: "Rohan Kapoor", role: "Associate, Commercial", bio: "IIT Kharagpur. Drives our civic and workplace portfolio." },
  { name: "Sana Qureshi", role: "Design Director", bio: "AA School. Oversees concept and the competitions desk." },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="ArchVault architecture"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/60" />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-between py-28 md:py-32">
          <div className="flex justify-between items-start text-paper">
            <p className="editorial-eyebrow text-paper/70">An architecture studio — India, est. 2011</p>
            <p className="hidden md:block text-xs tracking-[0.3em] uppercase text-paper/70">N 19.00° · E 72.82°</p>
          </div>

          <div className="text-paper max-w-5xl">
            <h1 className="display-hero">
              Architecture<br />
              of quiet<br />
              <em className="italic font-extralight">permanence.</em>
            </h1>
            <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p className="max-w-md text-base md:text-lg text-paper/80 leading-relaxed">
                ArchVault is a Mumbai-based practice working across residential, commercial and interior commissions throughout India.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] link-underline"
              >
                Selected Works <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="editorial-eyebrow">§ Studio</p>
            <div className="editorial-rule mt-4" />
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="display-section">
              A small studio building <em className="italic">slowly</em>, with intention — from the subcontinent's coastlines to its densest cities.
            </h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
              Founded in Mumbai in 2011, ArchVault has completed more than sixty projects across eleven Indian states. Our work privileges material honesty, climatic response, and the particular light of each site.
            </p>
            <Link to="/about" className="mt-8 inline-block link-underline text-sm uppercase tracking-[0.25em]">
              Read more about the studio
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section className="pb-28 md:pb-40 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="editorial-eyebrow">§ Selected Works</p>
            <h2 className="display-section mt-4">Projects, 2021 — 2024</h2>
          </div>
          <Link to="/projects" className="hidden md:inline link-underline text-xs uppercase tracking-[0.3em]">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => {
            const span =
              p.span === "wide"
                ? "md:col-span-8"
                : p.span === "tall"
                ? "md:col-span-4 md:row-span-2"
                : i % 5 === 1
                ? "md:col-span-4"
                : "md:col-span-6";
            return (
              <Link
                key={p.id}
                to="/projects"
                className={`group ${span} hover-reveal block`}
              >
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-stone">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-baseline justify-between pt-5">
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      {p.index} / {p.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl mt-2">{p.name}</h3>
                  </div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {p.location} · {p.year}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="bg-paper-warm py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={aboutImg} alt="Inside the studio" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="editorial-eyebrow">§ Philosophy</p>
            <h2 className="display-section mt-6">
              We draw in<br /> <em className="italic">section</em>, <br /> not elevation.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
              Every project begins with a deep reading of its site — the prevailing winds, the angle of the sun, the vernacular of its region. We then reduce, again and again, until only the necessary remains.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[["60+", "Completed"], ["11", "Indian States"], ["14", "Years"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-4xl md:text-5xl font-light">{n}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-3">
            <p className="editorial-eyebrow">§ Practice</p>
            <div className="editorial-rule mt-4" />
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="display-section">Services</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s) => (
            <div key={s.n} className="bg-paper p-10 md:p-14 group hover:bg-paper-warm transition-colors duration-500">
              <div className="flex items-start justify-between mb-8">
                <span className="editorial-eyebrow">{s.n}</span>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl">{s.t}</h3>
              <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-ink text-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <p className="editorial-eyebrow text-paper/50">§ The Studio</p>
              <div className="mt-4 h-px w-12 bg-paper" />
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-section text-paper">Principals & Leads</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {team.map((m, i) => (
              <div key={m.name} className="border-t border-paper/20 pt-8">
                <p className="text-xs text-paper/40 tracking-[0.25em] uppercase">0{i + 1}</p>
                <h3 className="font-serif text-2xl mt-4 text-paper">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-paper/60 mt-2">{m.role}</p>
                <p className="text-sm text-paper/70 mt-5 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-10 text-center">
        <p className="editorial-eyebrow">§ Enquire</p>
        <h2 className="display-hero mt-6 max-w-5xl mx-auto">
          Have a <em className="italic">site</em> in mind?
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
          We accept a small number of commissions each year. Tell us about your project — we respond to every enquiry within five working days.
        </p>
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-3 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-[0.3em] hover:bg-ink-soft transition-colors"
        >
          Begin a conversation <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
};

export default Home;

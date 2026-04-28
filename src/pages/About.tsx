import aboutImg from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

const About = () => {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="editorial-eyebrow">§ About the Studio</p>
        <h1 className="display-hero mt-8 max-w-5xl">
          Thirteen years of <em className="italic">building slowly.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-20">
        <img src={hero} alt="ArchVault architecture" className="w-full aspect-[21/9] object-cover" loading="lazy" />
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <p className="editorial-eyebrow">01 — Origin</p>
        </div>
        <div className="md:col-span-8 md:col-start-5 space-y-6 text-base md:text-lg leading-relaxed text-ink-soft">
          <p>
            ArchVault was founded in Mumbai in 2011 by Aarav Mehta, following a decade of practice in New York and Ahmedabad. The studio was set up around a simple conviction — that architecture in India could be both contemporary and deeply rooted, both ambitious and restrained.
          </p>
          <p>
            Today, we are a team of twenty-two — architects, interior designers, landscape consultants and craftspeople — working from a converted mill building in Mahalaxmi. We take on between eight and twelve commissions a year.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="editorial-eyebrow">02 — Method</p>
            <h2 className="display-section mt-6">
              Slow, <em className="italic">iterative</em>, and always grounded in the section.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We begin every project with weeks of site research — mapping sun paths, monsoon patterns, local material supply, and the particular quality of a place's light. Drawings follow only after the site has been understood.
            </p>
          </div>
          <img src={aboutImg} alt="ArchVault studio" className="aspect-[4/5] object-cover w-full" loading="lazy" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <p className="editorial-eyebrow mb-12">§ Recognition</p>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            ["2024", "AD100 India — Architecture"],
            ["2023", "IIA Award — Residential Architecture"],
            ["2023", "Dezeen Awards — Longlist, Hospitality"],
            ["2022", "Architectural Digest Design Awards"],
            ["2021", "World Architecture Festival — Shortlist"],
            ["2019", "Wallpaper* Design Awards — Best New House"],
          ].map(([year, title]) => (
            <div key={title} className="flex justify-between border-t border-border pt-5">
              <span className="font-serif text-xl">{title}</span>
              <span className="text-sm text-muted-foreground tracking-[0.2em]">{year}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

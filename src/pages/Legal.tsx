const Legal = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <section className="pt-40 pb-12 md:pt-48 mx-auto max-w-[1600px] px-6 md:px-10">
      <p className="editorial-eyebrow">§ Legal</p>
      <h1 className="display-hero mt-8">{title}</h1>
    </section>
    <section className="mx-auto max-w-3xl px-6 md:px-10 pb-32 prose prose-neutral">
      <div className="space-y-8 text-ink-soft leading-relaxed">{children}</div>
    </section>
  </>
);

export const Privacy = () => (
  <Legal title="Privacy Policy">
    <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Last updated: January 2026</p>
    <Section title="1. Overview">
      ArchVault Architects LLP ("we", "our", "the studio") respects your privacy. This policy describes what information we collect when you visit archvault.in or engage our services, and how that information is used.
    </Section>
    <Section title="2. Information we collect">
      Contact information you submit via our enquiry form (name, email, phone, project details), anonymised analytics data (pages viewed, referrer), and cookies required to operate the site.
    </Section>
    <Section title="3. How we use information">
      Solely to respond to enquiries, to provide ongoing client services, and to improve the website. We do not sell, rent, or share personal information with third parties for marketing purposes.
    </Section>
    <Section title="4. Data retention">
      Enquiry data is retained for two years. Client project records are retained for the lifetime of the project plus seven years, in line with Indian professional practice requirements.
    </Section>
    <Section title="5. Your rights">
      You may request access to, correction of, or deletion of your personal data at any time by writing to privacy@archvault.in.
    </Section>
    <Section title="6. Contact">
      ArchVault Architects LLP, 4th Floor, Laxmi Woollen Mills, Mahalaxmi, Mumbai 400011. Email: privacy@archvault.in.
    </Section>
  </Legal>
);

export const Terms = () => (
  <Legal title="Terms of Use">
    <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Last updated: January 2026</p>
    <Section title="1. Use of site">
      This website and its contents are the property of ArchVault Architects LLP. You may browse and view the material for personal, non-commercial reference only.
    </Section>
    <Section title="2. Intellectual property">
      All photography, drawings, and written content are copyrighted. Projects are shown with the permission of our clients. Reproduction requires written permission from the studio.
    </Section>
    <Section title="3. Professional engagement">
      No material on this site constitutes a proposal or professional advice. Engagements are governed by a separate letter of appointment signed by both parties.
    </Section>
    <Section title="4. Limitation of liability">
      The site is provided "as is". ArchVault Architects LLP accepts no liability for loss arising from use of this site or reliance on its contents.
    </Section>
    <Section title="5. Governing law">
      These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai.
    </Section>
  </Legal>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-serif text-2xl mb-3">{title}</h2>
    <p>{children}</p>
  </div>
);

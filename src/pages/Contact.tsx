import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within five working days.");
    }, 900);
  };

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="editorial-eyebrow">§ Enquire</p>
        <h1 className="display-hero mt-8 max-w-5xl">
          Begin a <em className="italic">conversation.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32 grid md:grid-cols-12 gap-16">
        <aside className="md:col-span-4 space-y-12">
          <div>
            <p className="editorial-eyebrow mb-4">Mumbai — Head Studio</p>
            <address className="not-italic leading-relaxed text-ink-soft">
              4th Floor, Laxmi Woollen Mills<br />
              Shakti Mills Lane, Mahalaxmi<br />
              Mumbai 400011
            </address>
          </div>
          <div>
            <p className="editorial-eyebrow mb-4">Bengaluru</p>
            <address className="not-italic leading-relaxed text-ink-soft">
              12, Lavelle Road<br />
              Bengaluru 560001
            </address>
          </div>
          <div>
            <p className="editorial-eyebrow mb-4">Goa — Site Office</p>
            <address className="not-italic leading-relaxed text-ink-soft">
              House No. 88, Moira<br />
              Bardez, Goa 403507
            </address>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="editorial-eyebrow mb-4">Direct</p>
            <p className="leading-relaxed">
              <a href="mailto:studio@archvault.in" className="link-underline">studio@archvault.in</a><br />
              <a href="mailto:press@archvault.in" className="link-underline">press@archvault.in</a><br />
              +91 22 4890 1200
            </p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="md:col-span-7 md:col-start-6 space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Field label="Phone" name="phone" />
            <Field label="Location" name="location" placeholder="City, State" />
          </div>
          <Select label="Project Type" name="type" options={["Residential", "Commercial", "Interior", "Hospitality", "Other"]} />
          <Field label="Tell us about your project" name="message" multiline />

          <button
            type="submit"
            disabled={sending}
            className="bg-ink text-paper px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-ink-soft transition-colors disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send enquiry →"}
          </button>
        </form>
      </section>
    </>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
  multiline,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
}) => (
  <label className="block">
    <span className="editorial-eyebrow block mb-3">
      {label}{required && " *"}
    </span>
    {multiline ? (
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full bg-transparent border-0 border-b border-border focus:border-ink outline-none py-3 text-base resize-none transition-colors"
      />
    ) : (
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border focus:border-ink outline-none py-3 text-base transition-colors"
      />
    )}
  </label>
);

const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <label className="block">
    <span className="editorial-eyebrow block mb-3">{label}</span>
    <select
      name={name}
      className="w-full bg-transparent border-0 border-b border-border focus:border-ink outline-none py-3 text-base"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </label>
);

export default Contact;

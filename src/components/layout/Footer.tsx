import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="editorial-eyebrow text-paper/50">ArchVault — Est. 2011</p>
            <h3 className="display-section mt-6 max-w-md text-paper">
              Let's build something enduring.
            </h3>
            <Link
              to="/contact"
              className="mt-8 inline-block link-underline text-sm uppercase tracking-[0.25em]"
            >
              Start a project →
            </Link>
          </div>

          <div className="md:col-span-2">
            <p className="editorial-eyebrow text-paper/50 mb-5">Studio</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:opacity-60">About</Link></li>
              <li><Link to="/projects" className="hover:opacity-60">Projects</Link></li>
              <li><Link to="/services" className="hover:opacity-60">Services</Link></li>
              <li><Link to="/contact" className="hover:opacity-60">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="editorial-eyebrow text-paper/50 mb-5">Legal</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:opacity-60">Privacy</Link></li>
              <li><Link to="/terms" className="hover:opacity-60">Terms</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="editorial-eyebrow text-paper/50 mb-5">Mumbai Studio</p>
            <address className="not-italic text-sm leading-relaxed text-paper/80">
              4th Floor, Laxmi Woollen Mills<br />
              Shakti Mills Lane, Mahalaxmi<br />
              Mumbai 400011, India
            </address>
            <p className="mt-4 text-sm text-paper/80">
              <a href="mailto:studio@archvault.in" className="link-underline">studio@archvault.in</a><br />
              +91 22 4890 1200
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-paper/50 uppercase tracking-[0.25em]">
          <p>© {new Date().getFullYear()} ArchVault Architects LLP</p>
          <p>Mumbai · Bengaluru · Goa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

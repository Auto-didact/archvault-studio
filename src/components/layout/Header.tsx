import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? "bg-paper/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className={`font-serif text-2xl tracking-tight ${
            solid ? "text-ink" : "text-paper"
          }`}
        >
          ArchVault
          <span className="ml-1 align-super text-[0.55rem] tracking-[0.3em] opacity-60">
            IN
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.25em] transition-opacity ${
                  solid ? "text-ink" : "text-paper"
                } ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-ink" : "text-paper"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-border">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="text-sm uppercase tracking-[0.25em] text-ink"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

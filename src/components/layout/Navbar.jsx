import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/85 backdrop-blur-lg"
      }`}
    >
      <nav
        className="section-container flex min-h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-visible-ring relative rounded-md py-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-5 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="focus-visible-ring hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex"
        >
          Let&apos;s Talk
          <ArrowRight size={17} />
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="focus-visible-ring rounded-xl border border-slate-200 bg-white p-2.5 text-slate-800 shadow-sm lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-2 py-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `focus-visible-ring rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="focus-visible-ring mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowRight size={17} />
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
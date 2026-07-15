import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-['Space_Grotesk'] text-xl font-bold text-slate-900"
        >
          Nexovora
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-blue-600"
                  : "font-medium text-slate-600 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
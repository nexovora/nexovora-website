import { NavLink } from "react-router-dom";

function Logo({ light = false }) {
  const titleColor = light ? "text-white" : "text-slate-950";
  const taglineColor = light ? "text-blue-200" : "text-slate-500";

  return (
    <NavLink
      to="/"
      className="focus-visible-ring flex shrink-0 items-center gap-3 rounded-lg"
      aria-label="Nexovora home"
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20">
        <span className="font-heading text-2xl font-bold text-white">N</span>

        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-sm bg-white/90" />
        <span className="absolute right-3 top-3 h-1 w-1 rounded-sm bg-white/70" />
      </div>

      <div>
        <p
          className={`font-heading text-xl font-bold leading-none ${titleColor}`}
        >
          NEXOVORA
        </p>

        <p className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${taglineColor}`}>
          Creating Digital Excellence
        </p>
      </div>
    </NavLink>
  );
}

export default Logo;
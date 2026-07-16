import blogLaptop from "../../assets/images/blog-laptop.png";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

function BlogIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.01,
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto flex w-full items-center justify-center lg:-mt-8 xl:-mt-10"
    >
      <div
        className="pointer-events-none absolute inset-x-[8%] bottom-[4%] h-[48%] rounded-full bg-blue-300/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-[780px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 78%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at center, black 78%, transparent 100%)",
        }}
      >
        <img
          src={blogLaptop}
          alt="Nexovora blog displayed on a modern laptop with a branded mug, plant, and stay updated card"
          className="w-full select-none object-contain drop-shadow-[0_30px_60px_rgba(37,99,235,0.16)] transition duration-500"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </motion.div>
  );
}

function BlogHero({ searchValue, onSearchChange, onSearchSubmit }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-blue-50/40">
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[5%] top-20 hidden h-32 w-32 bg-[radial-gradient(circle,#93c5fd_1.4px,transparent_1.4px)] bg-[length:15px_15px] opacity-35 lg:block"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-12 py-12 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
            <Sparkles size={14} aria-hidden="true" />
            Our Blog
          </div>

          <h1 className="font-heading mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Insights, Ideas &{" "}
            <span className="text-gradient">Digital Inspiration</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore practical tips, industry insights, and useful guides on web
            development, design, quality assurance, branding, hosting, and
            digital growth.
          </p>

          <form
            onSubmit={onSearchSubmit}
            role="search"
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />

              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>

              <input
                id="blog-search"
                type="search"
                value={searchValue}
                onChange={onSearchChange}
                placeholder="Search articles..."
                className="focus-visible-ring w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Search
              <Search size={17} aria-hidden="true" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.95,
                  y: 24,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative z-10 min-w-0"
        >
          <BlogIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default BlogHero;
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  pricingCategories,
  pricingPackages,
} from "../../data/pricingPageData";
import PricingCard from "./PricingCard";

function PricingPlans() {
  const [activeCategory, setActiveCategory] = useState("websites");
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Pricing Plans
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Choose the Package That Fits Your Project
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Start with a clear package and customize it based on your exact
            requirements.
          </p>
        </div>

        <div
          className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2"
          role="tablist"
          aria-label="Pricing categories"
        >
          {pricingCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`pricing-panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`focus-visible-ring rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-white hover:text-blue-600"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`pricing-panel-${activeCategory}`}
            role="tabpanel"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {pricingPackages[activeCategory].map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-7 text-slate-700">
          <p>
            Final pricing depends on project scope, content, functionality,
            timeline, and third-party service costs.
          </p>

          <p className="mt-2">
            Domain, hosting, premium plugins, paid APIs, and external services
            are billed separately where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
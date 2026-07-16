import { includedFeatures } from "../../data/pricingPageData";

function IncludedFeatures() {
  return (
    <section className="pb-16">
      <div className="section-container">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-7 sm:p-9">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Standard Benefits
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950">
              All Packages Include
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {includedFeatures.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`text-center ${
                  index > 0 ? "lg:border-l lg:border-slate-200" : ""
                }`}
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                  <Icon size={20} />
                </div>

                <p className="mt-3 text-sm font-semibold leading-5 text-slate-800">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncludedFeatures;
import { comparisonRows } from "../../data/pricingPageData";
import FadeIn from "../animations/FadeIn";

function ComparisonTable() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Compare Packages
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Website Package Comparison
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A quick overview of common inclusions. Final scope is confirmed in
            your quotation.
          </p>
        </FadeIn>

        <FadeIn className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_14px_38px_rgba(15,23,42,0.05)]">
          <table className="min-w-[760px] w-full border-collapse text-left">
            <caption className="sr-only">
              Comparison of Starter, Professional, and Premium website packages
            </caption>

            <thead className="bg-slate-50">
              <tr>
                {["Features", "Starter", "Professional", "Premium"].map(
                  (heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-b border-slate-200 px-6 py-5 font-heading text-sm font-bold text-slate-950"
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100">
                  <th
                    scope="row"
                    className="px-6 py-4 text-sm font-semibold text-slate-800"
                  >
                    {row.feature}
                  </th>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.starter}
                  </td>

                  <td className="bg-blue-50/40 px-6 py-4 text-sm font-medium text-slate-700">
                    {row.professional}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-3 text-center text-xs text-slate-500 md:hidden">
          Swipe horizontally to view the full comparison.
        </p>
      </div>
    </section>
  );
}

export default ComparisonTable;

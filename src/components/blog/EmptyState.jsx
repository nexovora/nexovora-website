import { SearchX } from "lucide-react";

function EmptyState({ onReset }) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 px-6 py-14 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
        <SearchX size={25} />
      </div>

      <h2 className="font-heading mt-5 text-2xl font-bold text-slate-950">
        No Articles Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
        Try a different search term or explore another category.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="focus-visible-ring mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View All Posts
      </button>
    </div>
  );
}

export default EmptyState;
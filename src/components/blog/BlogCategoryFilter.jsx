import { blogCategories } from "../../data/blogPosts";

function BlogCategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <section className="border-y border-slate-100 bg-white py-6">
      <div className="section-container">
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Blog categories"
        >
          {blogCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(category)}
                className={`focus-visible-ring shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogCategoryFilter;
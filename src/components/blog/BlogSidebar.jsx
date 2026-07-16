import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  categoryIcons,
  getCategoryCounts,
} from "../../data/blogPosts";
import NewsletterCard from "./NewsletterCard";

function BlogSidebar({
  featuredPosts,
  activeCategory,
  onCategoryChange,
}) {
  const counts = getCategoryCounts();

  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <h2 className="font-heading text-xl font-bold text-slate-950">
          Categories
        </h2>

        <div className="mt-5 space-y-2">
          {counts.map(({ category, count }) => {
            const Icon = categoryIcons[category];
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`focus-visible-ring flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <Icon
                    size={17}
                    className="shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  {category}
                </span>

                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured posts */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <h2 className="font-heading text-xl font-bold text-slate-950">
          Featured Posts
        </h2>

        <div className="mt-5 space-y-5">
          {featuredPosts.slice(0, 4).map((post) => {
            const Icon = categoryIcons[post.category];

            return (
              <NavLink
                key={post.id}
                to={`/blog/${post.slug}`}
                className="focus-visible-ring group flex gap-3 rounded-xl"
              >
                <div
                  className={`flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${post.accent} text-white`}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-blue-600">
                    {post.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {post.date ?? post.status}
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onCategoryChange("All Posts")}
          className="focus-visible-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-600"
        >
          View All Posts
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>

      {/* Small sidebar newsletter only */}
      <NewsletterCard />
    </aside>
  );
}

export default BlogSidebar;
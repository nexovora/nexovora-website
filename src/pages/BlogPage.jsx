import { useMemo, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter";
import BlogHero from "../components/blog/BlogHero";
import BlogNewsletterCTA from "../components/blog/BlogNewsletterCTA";
import BlogSidebar from "../components/blog/BlogSidebar";
import SEO from "../components/common/SEO";
import EmptyState from "../components/blog/EmptyState";
import PageLayout from "../components/layout/PageLayout";
import { blogPosts } from "../data/blogPosts";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Posts" ||
        post.category === activeCategory;

      const matchesSearch =
        !normalizedSearch ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.summary.toLowerCase().includes(normalizedSearch) ||
        post.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSearchQuery(searchInput);
  }

  function handleCategoryChange(category) {
    setActiveCategory(category);
  }

  function resetFilters() {
    setActiveCategory("All Posts");
    setSearchInput("");
    setSearchQuery("");
  }

  return (
    <>
      <SEO
        title="Nexovora Blog | Web, Design, QA & Digital Insights"
        description="Read practical articles about website development, branding, UI/UX, QA testing, SEO, and digital growth."
        url="/blog"
      />

      <PageLayout>
        <main>
          <BlogHero
            searchValue={searchInput}
            onSearchChange={(event) =>
              setSearchInput(event.target.value)
            }
            onSearchSubmit={handleSearchSubmit}
          />

          <BlogCategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <section className="section-padding bg-slate-50/60">
            <div className="section-container">
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(290px,0.8fr)]">
                <div className="min-w-0">
                  <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        Latest Insights
                      </p>

                      <h2 className="font-heading mt-2 text-3xl font-bold text-slate-950">
                        Explore Our Articles
                      </h2>
                    </div>

                    <p className="text-sm text-slate-500">
                      {filteredPosts.length}{" "}
                      {filteredPosts.length === 1
                        ? "article"
                        : "articles"}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredPosts.length > 0 ? (
                      filteredPosts.map((post, index) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          index={index}
                        />
                      ))
                    ) : (
                      <EmptyState onReset={resetFilters} />
                    )}
                  </div>
                </div>

                <div className="min-w-0 lg:sticky lg:top-28">
                  <BlogSidebar
                    featuredPosts={featuredPosts}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
              </div>
            </div>
          </section>

          <BlogNewsletterCTA />
        </main>
      </PageLayout>
    </>
  );
}

export default BlogPage;
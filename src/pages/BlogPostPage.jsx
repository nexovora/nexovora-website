import { useEffect } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import BlogNewsletterCTA from "../components/blog/BlogNewsletterCTA";
import PageLayout from "../components/layout/PageLayout";
import {
  categoryIcons,
  getPostBySlug,
} from "../data/blogPosts";

function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      return undefined;
    }

    const previousTitle = document.title;

    document.title = post.seoTitle;

    return () => {
      document.title = previousTitle;
    };
  }, [post]);

  if (!post) {
    return (
      <PageLayout>
        <main className="section-container py-24 text-center">
          <h1 className="font-heading text-4xl font-bold text-slate-950">
            Article Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The article you requested does not exist.
          </p>

          <NavLink
            to="/blog"
            className="focus-visible-ring mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to Blog
          </NavLink>
        </main>
      </PageLayout>
    );
  }

  const CategoryIcon = categoryIcons[post.category];

  return (
    <PageLayout>
      <main>
        <article>
          <header className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 py-16">
            <div className="section-container">
              <NavLink
                to="/blog"
                className="focus-visible-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-600"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </NavLink>

              <div className="mx-auto mt-8 max-w-4xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                  <CategoryIcon size={14} />
                  {post.category}
                </span>

                <h1 className="font-heading mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                  {post.title}
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {post.summary}
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <UserRound size={16} />
                    {post.author}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} />
                    {post.date ?? post.status}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={16} />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="section-container py-16">
            <div
              className={`mx-auto flex aspect-video max-w-5xl items-center justify-center rounded-3xl bg-gradient-to-br ${post.accent} text-white shadow-xl`}
            >
              <CategoryIcon size={72} />
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-blue-100 bg-blue-50/70 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-slate-950">
                Article Coming Soon
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                This article page is ready. The full verified content will be
                published after writing and editorial review.
              </p>
            </div>
          </div>
        </article>

        <BlogNewsletterCTA />
      </main>
    </PageLayout>
  );
}

export default BlogPostPage;
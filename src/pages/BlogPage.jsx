import PageLayout from "../components/layout/PageLayout";

function BlogPage() {
  return (
    <PageLayout>
      <main className="min-h-[70vh] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Digital Solutions Agency
          </p>

          <h1 className="mt-4 max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-tight text-slate-950">
            Blog Page
          </h1>
        </div>
      </main>
    </PageLayout>
  );
}

export default BlogPage;
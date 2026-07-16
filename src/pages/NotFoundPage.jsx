import SEO from "../components/common/SEO";
import PageLayout from "../components/layout/PageLayout";

function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Nexovora"
        description="The page you are looking for could not be found. Return to the Nexovora homepage to explore our digital services."
        url="/404"
      />

      <PageLayout>
        <main className="min-h-[70vh] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Digital Solutions Agency
            </p>

            <h1 className="mt-4 max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-tight text-slate-950">
              Page Not Found
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Sorry, the page you are looking for doesn't exist or may have been
              moved. You can return to the homepage and continue exploring our
              digital services.
            </p>
          </div>
        </main>
      </PageLayout>
    </>
  );
}

export default NotFoundPage;
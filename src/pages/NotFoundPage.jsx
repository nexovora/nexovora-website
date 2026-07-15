import PageLayout from "../components/layout/PageLayout";

function NotFoundPage() {
  return (
    <PageLayout>
      <main className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold">
            Page Not Found
          </h1>
        </div>
      </main>
    </PageLayout>
  );
}

export default NotFoundPage;
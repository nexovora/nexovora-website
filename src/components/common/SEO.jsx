import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "/",
  noIndex = false,
}) {
  const siteName = "Nexovora";

  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "");

  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  const normalizedImage = image.startsWith("/") ? image : `/${image}`;

  const fullUrl = `${siteUrl}${normalizedPath}`;
  const fullImageUrl = `${siteUrl}${normalizedImage}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl || fullUrl,
    logo: `${siteUrl}/favicon.png`,
    sameAs: [
      "https://www.instagram.com/nexovorastudio",
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923288651551",
      contactType: "customer support",
      areaServed: "PK",
      availableLanguage: ["en"],
    },
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;

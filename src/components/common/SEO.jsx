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
    </Helmet>
  );
}

export default SEO;
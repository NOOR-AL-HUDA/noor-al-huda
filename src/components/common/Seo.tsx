import { Helmet } from "react-helmet-async";

const SITE_URL = "https://nooralhudatrading.com";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

export const Seo = ({ title, description, path = "/", image, type = "website", jsonLd, noindex }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Noor Al Huda") ? title : `${title} — Noor Al Huda Trading`;
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Noor Al Huda Trading" />
      {image && <meta property="og:image" content={image.startsWith("http") ? image : `${SITE_URL}${image}`} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image.startsWith("http") ? image : `${SITE_URL}${image}`} />}

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};

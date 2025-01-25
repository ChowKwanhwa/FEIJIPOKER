export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FEIJI POKER",
    "url": "https://feiji-poker.com",
    "logo": "https://feiji-poker.com/logo.png",
    "description": "Premium poker experience in Bangkok with safe gaming, private rooms, and professional service.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangkok",
      "addressCountry": "TH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://t.me/doubleup79"
    },
    "sameAs": [
      "https://t.me/doubleup79",
      "https://line.me/ti/p/d6PuGxr5GA"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FEIJI POKER",
    "url": "https://feiji-poker.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://feiji-poker.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

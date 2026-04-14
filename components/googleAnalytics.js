import Script from 'next/script';

export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS;

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Sanitize the tracking ID to prevent script injection via env variable
function sanitizeGaId(id) {
  if (!id) return '';
  return id.replace(/[^a-zA-Z0-9-]/g, '');
}

export const GoogleAnalytics = () => {
  const safeId = sanitizeGaId(GA_TRACKING_ID);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${safeId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${safeId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

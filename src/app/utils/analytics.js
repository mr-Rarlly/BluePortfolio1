// utils/analytics.js
export const initGA = () => {
  // Initialize gtag.js
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-RTE6NS3RT3');
};

export const logPageView = () => {
  // Log page view with gtag.js
  window.gtag('config', 'G-RTE6NS3RT3', { page_path: window.location.pathname });
};

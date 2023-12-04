// utils/tracking.js
export const GTM_CONTAINER_ID = 'GTM-PT3N7BTG';

export const loadGtmScript = () => {
  return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
  `;
};
// utils/tracking.js
export const loadTrackingScripts = () => {
    const gtmScript = loadGtmScript();
    // You can add more tracking scripts here if needed
    return [gtmScript];
  };
  
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

export const loadGtagScript = () => {
  return `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'G-RTE6NS3RT3', 'auto');
    ga('send', 'pageview');
  `;
};

export const loadTrackingScripts = () => {
  const gtmScript = loadGtmScript();
  const gtagScript = loadGtagScript();
  // You can add more tracking scripts here if needed
  return [gtmScript, gtagScript];
};

// components/GoogleAnalytics.js
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import { loadGtmScript } from '../utils/tracking';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load GTM script
    const gtmScript = loadGtmScript();
    const script = document.createElement('script');
    script.innerHTML = gtmScript;
    document.head.appendChild(script);

    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    
  }, []);

  return null;
};

export default GoogleAnalytics;

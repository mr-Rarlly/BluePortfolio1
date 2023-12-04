// components/GoogleAnalytics.js
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import { loadTrackingScripts } from '../utils/tracking';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load tracking scripts
    const trackingScripts = loadTrackingScripts();
    trackingScripts.forEach((scriptContent) => {
      const script = document.createElement('script');
      script.innerHTML = scriptContent;
      document.head.appendChild(script);
    });

    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return null;
};

export default GoogleAnalytics;

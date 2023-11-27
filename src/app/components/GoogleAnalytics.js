// components/GoogleAnalytics.js
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

const GoogleAnalytics = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return null;
};

export default GoogleAnalytics;

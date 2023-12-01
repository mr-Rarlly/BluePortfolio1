// utils/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('GTM-N5VXM9RZ');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

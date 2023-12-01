// utils/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('GTM-PT3N7BTG');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

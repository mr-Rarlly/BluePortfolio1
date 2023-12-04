// utils/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-RTE6NS3RT3');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

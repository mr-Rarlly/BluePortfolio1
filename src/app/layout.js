"use client";
import "./globals.css";
import localFont from "next/font/local";
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head';
import GoogleAnalytics from './components/GoogleAnalytics';

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

const metadata = {
  title: "Saleh Amin - 3D Artist",
  description: "Portfolio of Saleh Amin, a talented 3D Artist and Motion Graphic Designer.",
  icons: {
    icon:['/favicon.ico?=v4'],
    apple:['/apple-touch-icon.png?=v4'],
    shortcut:['/apple-touch-icon.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Add other SEO-related meta tags here */}
      </Head>
      <body className={poppins.className}>
        <GoogleAnalytics />
        <Header />
        {children}
        <GoogleAnalytics />
        <Footer />
      </body>
    </html>
  );
}
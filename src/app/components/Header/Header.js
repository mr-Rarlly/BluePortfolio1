
import React, { useEffect, useState } from "react";
import Drawer from './DiagonalDrawer'
import '../Header/DiagonalDrawer.css'
import Link from "next/link";
import Head from 'next/head';


export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDrawer = ()=>{
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      
      <Head>
      <title>Saleh Amin - 3D Artist</title>
        <meta name="description" content="Portfolio of Saleh Amin, a talented 3D Artist and Motion Graphic Designer." />
        {/* Add other SEO-related meta tags here */}
        
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PT3N7BTG');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PT3N7BTG"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* Add other SEO-related meta tags here */}
      </Head>

      <div className={`diagonal-drawer ${isOpen  ? "open" : ""}`}>
        <Drawer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedIndex1={selectedIndex1}
            setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}

      >
        

          <div className="relative">
            <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl">
                  <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
                    <img src="/drawer.png" alt="drawer item" className="w-[150px] h-10"/>
                  </div>
            </div>
          </div>

        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
           <ul className="flex font-recoletaBlack flex-row items-center h-24">
               <li className="group text-2xl relative font-bold mr-20" >
                {selectedIndex1 === 0 ?(
                  <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ):(
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                )}
                  <a className={`menu-item ${selectedIndex1 === 0 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                  href="/#home"
                  onClick={()=> setSelectedIndex1(0)}
                  >
                    Home
                  </a>
               </li>
               <li className="group text-2xl relative font-bold mr-20" >
                {selectedIndex1 === 1 ?(
                  <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ):(
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                )}
                  <a className={`menu-item ${selectedIndex1 === 1 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                  href="/#portfolio"
                  onClick={()=> setSelectedIndex1(1)}
                  >
                  Portfolio
                  </a>
               </li>
               <li className="group text-2xl relative font-bold mr-20" >
                {selectedIndex1 === 2 ?(
                  <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ):(
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                )}
                  <a className={`menu-item ${selectedIndex1 === 2 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                  href="/#about-me-component"
                  onClick={()=> setSelectedIndex1(2)}
                  >
                   AboutMe
                  </a>
               </li>
               <li className="group text-2xl relative font-bold mr-20" >
                {selectedIndex1 === 3 ?(
                  <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ):(
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                )}
                  <Link className={`menu-item ${selectedIndex1 === 3 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                  href="/page/contactme"
                  onClick={()=> setSelectedIndex1(3)}
                  >
                    Hire me
                  </Link>
               </li>
           </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

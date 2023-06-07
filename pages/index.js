import React, { useEffect } from 'react';
import Head from 'next/head'
import Navbar from './../components/header/nav';
import Hero from '../components/hero';
import Services from '../components/services';
import Portfolio from './../components/portfolio';
import Skills from '../components/skills';
import Contact from './../components/contact';
import Footer from './../components/footer';
import ScrollTop from '../components/scrolltop';
export default function Home() {
  useEffect(() => {
    //! FONT AWESOME
    const Link = document.createElement('link');
    Link.rel = 'stylesheet';
    Link.href = 'https://rawcdn.githack.com/hung1001/font-awesome-pro/4cac1a6/css/all.css';
    document.head.appendChild(Link);
    //! BOOTSTRAP
    // CSS
    const Link2 = document.createElement('link');
    Link2.rel = 'stylesheet';
    Link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    document.head.appendChild(Link2);
    // BOOTSTRAP JS
    const Script2 = document.createElement('script');
    Script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.body.appendChild(Script2);
    //! Lang Att.
    // const Lang = document.createElement('lang');
    // Lang.lang = 'en';
    // document.html.appendChild(Lang);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Omar Abdelatif</title>
        <meta name="description" content="Frontend Backend React.js Next.js Laravel" />
        <meta name="keywords" content='Frontend Backend React.js Next.js Laravel' />
        <link rel="icon" href="/favicon.png" />
      </Head >
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  )
}
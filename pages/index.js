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
    Link.href = 'https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@18657a9/css/all.min.css';
    document.head.appendChild(Link);
    //! BOOTSTRAP
    // CSS
    const Link2 = document.createElement('link');
    Link2.rel = 'stylesheet';
    Link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
    document.head.appendChild(Link2);
    // BOOTSTRAP JS
    const Script2 = document.createElement('script');
    Script2.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(Script2);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Omar Abdelatif</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content='next, app, create next app' />
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
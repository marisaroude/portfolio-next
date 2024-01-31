'use client'
import React, { useEffect } from 'react';
import Contact from "@/components/Contact";
import Button from "@/components/Button";
import Header from "@/components/Header";
import RenderButtons from "@/components/RenderButtons";
import styles from '../styles/home.module.css'; 
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import { swiffyslider } from 'swiffy-slider'
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';


export default function Home() {
  useEffect(() => {
    swiffyslider.init();
  }, [])


  return (
    <>
      {/* <div className={styles.fixedContainer} >
        <Header />
        <RenderButtons section={'options'} />
      </div> */}

      <div className={styles.contentContainer} >
        <Contact />
        <AboutMe />
        <Projects />
        <Skills/>
        <Footer/>
      </div>
    </>
  );
}

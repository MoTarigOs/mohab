'use client'

/* This is the Home page, contains Landing, Services, About & contact sections */

import '@styles/Home.css';
import LandingSection from "@sections/LandingSection";
import ServicesSection from '@sections/ServicesSection';
import { useContext, useEffect } from 'react';
import { Context } from '@utils/Context';
import AboutSection from '@sections/AboutSection';
import ContactSection from '@sections/ContactSection';

const page = () => {

  const { isArabic, setSelectedRouter } = useContext(Context);

  useEffect(() => {
    setSelectedRouter('Home');
  }, []);

  return (

    <div className="WelcomPage dark_mode">
      
      <LandingSection isArabic={isArabic}/>

      <ServicesSection isArabic={isArabic}/>

      <AboutSection isArabic={isArabic}/>

      <ContactSection isArabic={isArabic}/>
      
    </div>
  )
};

export default page;

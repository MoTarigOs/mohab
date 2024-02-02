'use client';

import { getConstDetails, getConstName } from "@utils/getLangItems";
import '@styles/ServicesSection.css';
import ServiceCard from "@components/ServiceCard";
import { useState } from "react";
import Link from "next/link";
import { getHomePageServices } from "@utils/Logic";

const ServicesSection = ({ isArabic }) => {

  const [services, setServices] = useState(getHomePageServices());

  return (
    
    <div className="ServicesSection">
      
      <h3>{getConstName('Services', isArabic)}</h3>

      <ul>
        {services.map((item) => (
          <ServiceCard key={item._id} item={item} isArabic={isArabic}/>
        ))}
      </ul>

      <Link href="/services">{getConstName('More Services', isArabic)}</Link>

    </div>

  )
};

export default ServicesSection;

'use client';

import Link from 'next/link';
import './About.css';
import Image from 'next/image';
import PrintImage from '../../assets/images/print_image1.jpg';
import DesignImage from '../../assets/images/design_image.jpg';
import AdsImage from '../../assets/images/Ads_image.jpg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import { useContext, useEffect } from 'react';
import { Context } from '@utils/Context';
import { aboutUsDetails } from '@utils/Constants';
import { getConstName } from '@utils/getLangItems';

const page = () => {

    const developerFacebookUrl = 'https://www.facebook.com/elgade.websites';
    const developerLinkedInUrl = 'https://www.linkedin.com/in/elgade/';
    const developerWhatsappUrl = '';

    const { setSelectedRouter, isArabic } = useContext(Context);

    useEffect(() => {
      setSelectedRouter('About');
    }, []);

  return (

    <div className='AboutContainer'>

        <div className='About'>

            <div className='landingAbout'>

                <h1>{getConstName('We are Printing company', isArabic)}
                <span style={{
                    left: isArabic && 'unset', right: isArabic && 8,
                    height: isArabic && 16, bottom: isArabic && -4
                }}/></h1>

                <div>
                    <h2>{getConstName('About us', isArabic)}</h2>
                    <p>{aboutUsDetails('about-page-1', isArabic)}</p>
                    <p>{aboutUsDetails('about-page-2', isArabic)}</p>
                </div>
                

            </div>

            <div className='servicesAboutContainer'>
                <div className='servicesAbout'>
                    <div className='texts'>
                        <h2>{getConstName('We provide Printing, Designing & Advertising services', isArabic)}</h2>
                        <p>{aboutUsDetails('about-page-3', isArabic)}</p>
                        <Link href={'/services'}>{getConstName('View services', isArabic)}{'>'}</Link>
                    </div>
                    <div className='image1'><Image src={PrintImage} alt='print image'/></div>
                    <div className='image2'><Image src={AdsImage} alt='advertise image'/></div>
                    <div className='image3'><Image src={DesignImage} alt='design image'/></div>
                </div>
            </div>

            <div className='contactWebsiteCreator'>
                <h2>{getConstName('Did you like our website ?', isArabic)}</h2>
                <p>{getConstName('Contact the developer to get your own website', isArabic)}</p>
                <ul className='icons'>
                    <li><Link href={developerFacebookUrl}><Image src={FacebookIcon}/></Link></li>
                    <li><Link href={developerLinkedInUrl}><Image src={LinkedinIcon}/></Link></li>
                    <li><Link href={developerWhatsappUrl}><Image src={WhatsappIcon} style={{
                        background: '#1dd600', borderRadius: 4, scale: 0.8
                    }}/></Link></li>
                </ul>
            </div>          

        </div>

    </div>

  )
};

export default page;

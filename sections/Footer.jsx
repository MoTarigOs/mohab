'use client';

import '@styles/Footer.css';
import Svgs from '@utils/Svgs';
import Instagram from '../assets/icons/instagram.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Facebook from '../assets/icons/facebook.svg';
import Snapchat from '../assets/icons/snapchat.svg';
import Image from 'next/image';
import LogoIconEN from '../assets/icons/mohab_logo_en.png';
import LogoIconAR from '../assets/icons/mohab_logo_ar.png';
import LogoIconARDark from '../assets/icons/mohab_logo_ar_dark_mode.png';
import LogoIconENDark from '../assets/icons/mohab_logo_en_dark_mode.png';
import { useContext } from 'react';
import { Context } from '@utils/Context';
import { getConstName } from '@utils/getLangItems';


const Footer = () => {

  const { isArabic, isDarkMode } = useContext(Context);
  
  const getImage = (name) => {

    switch(name){
      case 'Facebook':
        return Facebook;
      case 'LinkedIn':
        return LinkedIn;
      case 'Instagram':
        return Instagram;
      case 'Snapchat':
        return Snapchat;
      default:
        return null;  
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: -128,
      behavior: 'smooth'
    })
  };

  return (

    <div className='footer'>
      
      <div className='sub'>
        <label>{getConstName('Join Us', isArabic)}</label>
        <div>
          <input placeholder={getConstName('Enter your Email', isArabic)}></input>
          <button>{getConstName('Subscribe', isArabic)}</button>
        </div>
        <ul>
          {['Facebook', 'Instagram', 'LinkedIn', 'Snapchat'].map((item) => (
            <li key={item}>
              <Image src={getImage(item)} width={32} height={32} alt={`${item} icon`}/>
            </li>
          ))}
        </ul>
      </div>

      <span/>

      <div className='details'>

        <div className='logo' onClick={handleLogoClick}>
          <Image src={isArabic ? (isDarkMode ? LogoIconARDark : LogoIconAR) : (isDarkMode ? LogoIconENDark : LogoIconEN)} alt='Mohab footer logo'/>
        </div>

        <p>{getConstName('Mohab 2024', isArabic)}</p>

      </div>

    </div>
  )
};

export default Footer;

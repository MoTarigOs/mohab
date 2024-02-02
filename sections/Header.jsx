'use client';

import { getConstName } from "@utils/getLangItems";
import { useContext, useEffect, useState } from "react";
import LogoIconEN from '../assets/icons/mohab_logo_en.png';
import LogoIconAR from '../assets/icons/mohab_logo_ar.png';
import LogoIconARDark from '../assets/icons/mohab_logo_ar_dark_mode.png';
import LogoIconENDark from '../assets/icons/mohab_logo_en_dark_mode.png';
import Image from "next/image";
import '@styles/Header.css';
import ToggleButton from "@components/ToggleButton";
import { Context } from "@utils/Context";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  
  const { 
    isArabic, setIsArabic, isDarkMode, setIsDarkMode, 
    selectedRouter, setSelectedRouter,isMenu, setIsMenu, isMobile, setIsMobile
  } = useContext(Context);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {

    const settingMobile = () => {
      console.log("resized");
      if(window.innerWidth <= 960){
        setIsMobile(true);
        setIsMenu(false);
      } else {
        setIsMobile(false);
      }
    };

    settingMobile();

    window.addEventListener('resize', settingMobile);
    return () => window.removeEventListener('resize', settingMobile);
  }, []);

  const handleLogoClick = () => {
    if(selectedRouter !== 'Home'){
      location.href = '/';
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  };

  const handleSignUpClick = () => {
    setSelectedRouter('SignUp');
    setIsLogin(false);
    setIsMenu(false);
  };

  return (
    
    <div className="HeaderContainer">
    
      <div className="header">

        {isLogin && <span id="loginSpan" onClick={() => setIsLogin(false)}/>}

        <Link href={'/'}><div className="headerLogo">
          <Image src={isArabic ? (isDarkMode ? LogoIconARDark : LogoIconAR) : (isDarkMode ? LogoIconENDark : LogoIconEN)} alt="Mohab logo"/>
        </div></Link>

        {!isMobile && <><ul className="headerButtons">

          {['Home', 'Services', 'Cart', 'About'].map((item) => (
            <li key={item} className={selectedRouter === item ? 'selected' : null}>
              <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                {getConstName(item, isArabic)}
              </Link>
            </li>
          ))}

          <select onChange={(e) => setIsArabic(e.target.value === 'en' ? false : true)}
            value={isArabic ? 'ar' : 'en'}
          >
            <option value="en" style={{ textAlign: 'left' }}>Engllish</option>
            <option value="ar">العربية</option>
          </select>

        </ul>

        <div className="headerRight">

          <ToggleButton isActive={isDarkMode} setIsActive={setIsDarkMode} isArabic={isArabic}/>

          <h3 onClick={() => setIsLogin(!isLogin)}>{getConstName('Login', isArabic)}</h3>

          <motion.div className="loginDiv"
          style={{ right: isArabic && 'unset', left: isArabic && 0 }}
            initial={{ y: 32, opacity: 0, scale: 0 }}
            animate={{ y: isLogin ? 0 : 32, opacity: isLogin ? 1 : 0, scale: isLogin ? 1 : 0 }}
          >

                <label>{getConstName('Email', isArabic)}</label>
                <input placeholder={getConstName("Enter your email", isArabic)}/>
                
                <label>{getConstName('Password', isArabic)}</label>
                <input placeholder={getConstName('Enter your password', isArabic)}/>

                <button>{getConstName('Login', isArabic)}</button>

                <Link href={'/sign-up'} onClick={handleSignUpClick}>{getConstName(('Sign up'), isArabic)}</Link>

          </motion.div>

        </div></>}

        {isMobile && <div className="mobileHeader">
          
          <div className="menuIconDiv" onClick={() => setIsMenu(!isMenu)}>

            <motion.span 
            initial={{ rotateZ: 0, y: 0 }} animate={{ 
              rotateZ: isMenu ? '-45deg' : 0,
              y: isMenu ? 11 : 0
            }}/>

            <motion.span 
            initial={{ opacity: 1 }} 
            animate={{ opacity: isMenu ? 0 : 1 }}/>

            <motion.span 
            initial={{ rotateZ: 0, y: 0 }} animate={{ 
              rotateZ: isMenu ? '45deg' : 0,
              y: isMenu ? -11 : 0
            }}/>

          </div>

          <motion.div
            className="mobileSideNav"
            style={{ left: isArabic && 'unset', right: isArabic && 0 }}
            initial={{ x: isArabic ? '110%' : '-110%' }}
            animate={{ x: isMenu ? 0 : isArabic ? '110%' : '-110%', transition: { type: "tween", duration: 0.15 } }}
          >

            <ul>

              {['Home', 'Services', 'Cart', 'About'].map((item) => (
                <li key={item}>
                  <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className={selectedRouter === item ? 'selected' : null}
                  onClick={handleSignUpClick}>
                    {getConstName(item, isArabic)}
                  </Link>
                </li>
              ))}

              <li>
                <select onChange={(e) => setIsArabic(e.target.value === 'en' ? false : true)}
                value={isArabic ? 'ar' : 'en'}
                >
                  <option value="en" style={{ textAlign: 'left' }}>Engllish</option>
                  <option value="ar">العربية</option>
                </select>
              </li>

              <li>
                <label>{getConstName('Dark mode', isArabic)}</label>
                <ToggleButton isActive={isDarkMode} setIsActive={setIsDarkMode} isArabic={isArabic}/>
              </li>

              <div className="loginDiv">

                <label>{getConstName('Email', isArabic)}</label>
                <input placeholder={getConstName("Enter your email", isArabic)}/>
                
                <label>{getConstName('Password', isArabic)}</label>
                <input placeholder={getConstName('Enter your password', isArabic)}/>

                <button>{getConstName('Login', isArabic)}</button>

                <Link href={'/sign-up'} onClick={handleSignUpClick}>{getConstName(('Sign up'), isArabic)}</Link>

              </div>

            </ul>

          </motion.div>

        </div>}

      </div>
    
    </div>

  )
};

export default Header;

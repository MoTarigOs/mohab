'use client';

/* 
    Container file to use context and trigger language changes
*/

import Footer from "@sections/Footer";
import Header from "@sections/Header";
import { Context } from "@utils/Context";
import { useContext, useEffect, useRef } from "react";

const Main = ({ children, isRtl, setIsRtl }) => {

    const { isDarkMode, isArabic } = useContext(Context);

    useEffect(() => {
        if(isArabic){
            setIsRtl(true);
        } else {
            setIsRtl(false);
        }
    }, [isArabic]);

    return (

        <div className={`main ${isDarkMode ? 'DarkMode' : 'colors'}`}>

            <p style={{ display: 'none' }}>{isRtl}{isDarkMode}</p>
                        
            <Header />

            <main className='app'>
                {children}
            </main>

            <Footer />

        </div>

    )
};

export default Main;

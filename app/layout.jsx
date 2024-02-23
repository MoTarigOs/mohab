'use client';

import '@styles/MainLayout.css';
import DataContext from '@utils/Context';
import Main from './Main';
import { useState } from 'react';

/* 
    The main entry for the website 
    - handle RTL direction language changes
*/

const MainLayout = ({ children }) => {

    const [isRtl, setIsRtl] = useState(false);

    return (

        <html lang={isRtl ? 'ar' : 'en'}>

            <head>

                <title>Mohab</title>

                <meta name="description" content="A brief description of the page content." />

                <meta name="keywords" content="Print, Design, Ads, Website" />

                <meta property="og:title" content="Mohab" />
                
                <meta property="og:description" content="Printing & designing services provider" />
                
                <meta property="og:image" content="https://f003.backblazeb2.com/file/personal-use-mot-tarig/mohab_logo_en.png"/>

                <link rel="icon" sizes='96x96' href="/myicon.png" />

                <meta name="google-site-verification" content="0w8spI0ZzVdpUgQwLPmSbE6MtmYd6_HHVgRwsD1uFss" />

            </head>

            <body dir={isRtl ? 'rtl' : null}>

                <DataContext>

                    <Main children={children} isRtl={isRtl} setIsRtl={setIsRtl}/>

                </DataContext>

            </body>
            
        </html>

    )
}

export default MainLayout;

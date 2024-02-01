import '@styles/AboutSection.css';
import Image from 'next/image';
import PrintImage1 from '../assets/images/services_bg.jpg';
import PrintImage2 from '../assets/images/print_image2.jpg';
import { aboutUsDetails } from '@utils/Constants';
import Link from 'next/link';
import { getConstName } from '@utils/getLangItems';

const AboutSection = ({ isArabic }) => {
  return (

    <div className='AboutSection'>
      
        <div className='images'>

            <Image src={PrintImage1} alt='image of printed papers'/>

            <Image className='secondImage' src={PrintImage2} alt='image of priting machien'/>
            
        </div>

        <div className='texts'>

            <h2>{getConstName('About Us', isArabic)}</h2>

            <p>{aboutUsDetails('home-page-paragraph', isArabic)}</p>

            <span>{aboutUsDetails('home-page-short', isArabic)}</span>

            <Link href="/about">{getConstName('More Details', isArabic)}</Link>

        </div>

    </div>

  )
}

export default AboutSection

import Image from "next/image";
import '@styles/LandingSection.css';
import PrintIllustrator from '../assets/images/printer_image.png';
import Link from "next/link";
import { getConstDetails, getConstName } from "@utils/getLangItems";
import AdsIcon from '../assets/icons/advertising_icon.svg';
import PrintingIcon from '../assets/icons/printing_icon.svg';
import DesignIcon from '../assets/icons/design_icon.svg';
import { aboutUsDetails } from "@utils/Constants";

const LandingSection = ({ isArabic }) => {

  const getImage = (name) => {

    switch(name){
      case 'Print':
        return PrintingIcon;
      case 'Design':
        return DesignIcon;
      case 'Advertise':
        return AdsIcon;
    };

  };

  return (

    <div className="landingSection">

        <div className="left">

            <h1>{getConstDetails('LandingHeaderDetails', isArabic)}</h1> 
            
            <p>{aboutUsDetails('home-page-landing', isArabic)}</p>

            <div className="buttons">
              <Link href="/services">{getConstName('Check Our Services', isArabic)}</Link>
              <Link href="/about" style={{background: '#adf20a', color: '#474747', maxWidth: '40%'}}>{getConstName('Contact Us', isArabic)}</Link>
            </div>

            <div className="prototypeServices">
              
              <h2>{getConstName('What we do ?', isArabic)}</h2>

              <ul>
                {['Print', 'Design', 'Advertise'].map((item) => (
                  <li key={item}>
                    <Image src={getImage(item)} alt={`${item} service landing page image`}/>
                    <h3>{getConstName(item, isArabic)}</h3>
                  </li>
                ))}
              </ul>
            
            </div>

        </div>

        <div className="printerImage">
          <Image src={PrintIllustrator}/>
          <span id="orangeSpan" onClick={() => location.href='/services'}/>
          <span id="greenSpan" onClick={() => location.href='/about'}/>
        </div>

    </div>

  )
}

export default LandingSection;

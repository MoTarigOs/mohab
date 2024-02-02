import Image from "next/image";
import { getConstDetails, getConstName } from "@utils/getLangItems";
import '@styles/component/ServiceCard.css';
import { getServiceSaleBgColor } from "@utils/Constants";
import Link from "next/link";

const ServiceCard = ({ item, isArabic }) => {

  return (
    
    <li className="serviceCard">
        
        <Image src={item.pic} alt={`${item.title} image`}/>

        <div>

            <h2>{getConstName(item.title, isArabic)}</h2>

            <p>{getConstDetails(item.title, isArabic)}</p>
            
            <button>
              <Link href={`/services/${item.title.replaceAll(' ', '-').toLowerCase()}`}>
                  <p>
                  {getConstName('View Details', isArabic)}
                  </p>
              </Link>              
            </button>

        </div>

        {item.sale && <span style={{
            background: getServiceSaleBgColor(item.sale)
        }}>{item.sale}</span>}

    </li>

  )

};

export default ServiceCard;

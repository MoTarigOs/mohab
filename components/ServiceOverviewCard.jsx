import Image from "next/image";
import Link from "next/link";
import '@styles/component/ServiceOverviewCard.css';
import { getServiceSaleBgColor } from "@utils/Constants";
import { getConstName } from "@utils/getLangItems";

const ServiceOverviewCard = ({ item, isArabic }) => {
  return (
    <li className="overviewServiceCard">
        <Link href={`/services/${item.title.replaceAll(' ', '-').toLowerCase()}`}>
            <h2>{getConstName(item.title, isArabic)}</h2>
            <Image src={item.pic} alt={`${item.title} preview image`}/>
            <button>{getConstName('View details', isArabic)}</button>
        </Link>
        {item.sale && <span style={{
        background: getServiceSaleBgColor(item.sale)
        }}>{item.sale}</span>}
    </li>
  )
};

export default ServiceOverviewCard;

'use client';

import { catagoriesArray, servicesArray } from '@utils/Constants';
import './Services.css';
import ServiceOverviewCard from '@components/ServiceOverviewCard';
import Image from 'next/image';
import searchIcon from '../../assets/icons/search_icon.svg';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { handleSearchByCatgories, handleSearchByText } from '@utils/Logic';
import { Context } from '@utils/Context';
import { getConstName } from '@utils/getLangItems';
import Link from 'next/link';

const page = () => {

  const [catagories, setCatagories] = useState([]);
  const [services, setServices] = useState(servicesArray);
  const [isCatagory, setIsCatagory] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { setSelectedRouter, isArabic } = useContext(Context);

  const searchByText = () => {
    setServices(handleSearchByText(searchText));
  };

  const searchByCatagories = () => {
    setServices(handleSearchByCatgories(catagories));
  };

  useEffect(() => {
    setSelectedRouter('Services');
  }, []);

  useEffect(() => {
    searchByCatagories();
  }, [catagories]);

  return (

    <div className='services'>
      
      <div className='best_deal'>

        <div>
          <h2>{getConstName('Best Deal', isArabic)}<Link href={'/services/document-print'}>{getConstName('View details', isArabic)}</Link></h2>
          <p><span>{getConstName('20% off', isArabic)}</span>{getConstName('for every 1000 unit printed', isArabic)}</p>
        </div>
        
      </div>

      <div className='servicesListDiv'>

        <div className='searchDiv'>

          <div className='searchInput'>
            <input placeholder={getConstName('Search', isArabic)} onChange={(e) => setSearchText(e.target.value)}/>
            <Image src={searchIcon} onClick={searchByText}/>
          </div>

          <button onClick={() => {
            setIsCatagory(!isCatagory)
          }}>{getConstName('Catagories', isArabic)}<span style={{
            transform: `rotateZ(${isCatagory ? '180deg' : '0deg'}) translateX(${isCatagory ? '-4px' : '0'})`
          }}/></button>

          <motion.ul
            initial={{ y: -64, opacity: 0, transformOrigin: 'top center' }}
            animate={{
              y: isCatagory ? 0 : 32,
              opacity: isCatagory ? 1 : 0
            }}
          >
            {catagoriesArray.map((item) => (
              <li key={item}>
                <button style={{
                  background: !catagories.find(i => i === item) ? null : 'orange',
                  color: !catagories.find(i => i === item) ? null : 'white'
                }} onClick={() => {
                  if(!catagories.find(i => i === item)){
                    setCatagories([...catagories, item]);
                  } else {
                    setCatagories(catagories.filter(i => i !== item));
                  }
                }}>{getConstName(item, isArabic)}</button>
              </li>
            ))}
          </motion.ul>

        </div>
          
        <ul>
          {services.map((item) => (
            <ServiceOverviewCard key={item._id} item={item} isArabic={isArabic}/>
          ))}
        </ul>

      </div>

    </div>

  )
}

export default page;

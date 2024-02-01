'use client';

import CartCard from '@components/CartCard';
import './Cart.css';
import ServiceOverviewCard from '@components/ServiceOverviewCard';
import Checkout from '@components/Checkout';
import { useContext, useEffect, useState } from 'react';
import { Context } from '@utils/Context';
import { getRecomendedServices } from '@utils/Logic';
import { getConstName } from '@utils/getLangItems';

const page = () => {

    const { setSelectedRouter, isMobile, cartItems, setCartItems, isArabic } = useContext(Context);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [isMobile680, setIsMobile680] = useState(false);
    const [recomdedServices, setRecomendedServices] = useState([]);

    const handleQuantityChange = (quantity, itemId) => {
      console.log("handle quantity changes, itemId: ", itemId, " quantity: ", quantity);
      let arr = cartItems;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]._id === itemId){
          console.log("old quantity: ", arr[i].quantity);
          arr[i].quantity = quantity;
          setCartItems([...arr]);
        }
      }
    };

    const handleRemove = (removeThisItem) => {
      console.log("handling remove, itemId: ", removeThisItem);
      setCartItems(
        cartItems.filter(i => i !== removeThisItem)
      );
    };

    const handleRecomndation = () => {

      let catagories = [];
      for (let i = 0; i < cartItems.length; i++) {
        for (let j = 0; j < cartItems[i].catagory.length; j++) {
          if(!catagories.find(c => c === cartItems[i].catagory[j])){
            catagories.push(cartItems[i].catagory[j]);
          }
        }
      };

      if(catagories.length <= 0) catagories = ['Print', 'Design', 'Ads'];

      setRecomendedServices(getRecomendedServices(catagories));

    };

    useEffect(() => {

        setSelectedRouter('Cart');

        handleRecomndation();

        const settingMobile = () => {
          console.log("resized");
          if(window.innerWidth <= 680){
            setIsMobile680(true);
          } else {
            setIsMobile680(false);
          }
        };
    
        settingMobile();
    
        window.addEventListener('resize', settingMobile);
        return () => window.removeEventListener('resize', settingMobile);
    }, []);

    useEffect(() => {
      console.log(cartItems);
      let p = 0;
      for (let i = 0; i < cartItems.length; i++) {
        p += cartItems[i].price * cartItems[i].quantity;
      };
      setSubTotalPrice(p);
    }, [cartItems]);

  return (

    <div className='cart'>
      
        <div className='items'>

            <h1>{getConstName('Cart', isArabic)}</h1>

            <div className='myTable'>

                    <div className='row'>
                        <h2 className='details'>{getConstName('Services', isArabic)}</h2>
                        {!isMobile680 && <><h2 className='price'>{getConstName('Price', isArabic)}</h2>
                        <h2 className='quantity'>{getConstName('Quantity', isArabic)}</h2>
                        <h2 className='totalPrice'>{getConstName('Total', isArabic)}</h2></>}
                    </div>

                    <hr/>

                    {cartItems.map((item) => (
                        <><CartCard item={item} isMobile680={isMobile680} 
                        setIsMobile680={setIsMobile680} handleQuantityChange={handleQuantityChange}
                        handleRemove={handleRemove} isArabic={isArabic}/>
                        <hr/></>
                    ))}

            </div>

            {isMobile && <div className='checkoutDiv'><Checkout subTotalPrice={subTotalPrice} isArabic={isArabic}/></div>}

            <div className='recomendation'>

                <h2>Recomendation</h2>

                <ul>
                    {recomdedServices.map((item) => (
                        <ServiceOverviewCard key={item._id} item={item} isArabic={isArabic}/>
                    ))}
                </ul>

            </div>

        </div>

        {!isMobile && <Checkout subTotalPrice={subTotalPrice} isArabic={isArabic}/>}

    </div>

  )
};

export default page;

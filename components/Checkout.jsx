import Image from "next/image";
import PayPalIcon from '../assets/images/paypal.svg';
import VisaIcon from '../assets/images/visa.svg';
import '@styles/component/Checkout.css';
import { useState } from "react";
import { getConstName } from "@utils/getLangItems";

const Checkout = ({ 
  type, item, quantity, handleAddToCart, addingToCart, 
  subTotalPrice, isArabic
}) => {


  return (
    
    <div className='checkout'>

        {type !== 'preview' && <h2>{getConstName('Checkout', isArabic)}</h2>}
            
        {type !== 'preview' && <div className='coupon'>
            <input placeholder={getConstName('Enter Coupon', isArabic)}/>
            <button>{getConstName('Use coupon', isArabic)}</button>
        </div>}

        <div className='feilds'>
            <div>{type !== 'preview' ? getConstName('Sub Total', isArabic) : getConstName('Price', isArabic)}
              <h3>${(type !== 'preview' 
              ?  subTotalPrice
              : quantity * item.price).toFixed(2)}</h3>
            </div>
            <div>{getConstName('Shipping fee', isArabic)}<h3 style={{color: 'red'}}>
              +${(type !== 'preview' ? subTotalPrice / 7 : (quantity * item.price) / 7).toFixed(2)}
            </h3></div>
            <div>{getConstName('Discount', isArabic)}<h3>-$0</h3></div>
            <div>{getConstName('Tax fee', isArabic)}<h3 style={{color: 'red'}}>+${(type !== 'preview' ? subTotalPrice / 6 : (quantity * item.price) / 6).toFixed(2)}</h3></div>
            {type === 'preview' && <div>{getConstName('Delivery time', isArabic)}<h3>30 days</h3></div>}
            <div style={{fontWeight: 600, color: 'var(--black)', fontSize: '1.2rem', marginBottom: type !== 'preview' ? null : 0}}>
              {getConstName('Overall Total', isArabic)}
            <h3 style={{color: 'var(--black)', fontWeight: 600, fontSize: '1.2rem'}}>
              ${type !== 'preview'
                ? (subTotalPrice + (subTotalPrice / 7) + (subTotalPrice / 6)).toFixed(2)
                : ((quantity * item.price) + (quantity * item.price / 7) + (quantity * item.price / 6)).toFixed(2)}</h3></div>
        </div>

        {type !== 'preview' && <div className='paywith'>

            <h3>{getConstName('Pay with', isArabic)}</h3>

            <span><Image src={PayPalIcon} alt="paypal image"/></span>
            <span><Image src={VisaIcon} alt="visa image"/></span>
            <span>{getConstName('Other', isArabic)}</span>

        </div>}

        {type === 'preview' && <button className="addToCart" onClick={() => handleAddToCart(item)}>
          {getConstName('Add to cart', isArabic)}
        </button>}

    </div>

  )
}

export default Checkout;

'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import '@styles/component/CartCard.css';
import { getConstDetails, getConstName } from "@utils/getLangItems";

const CartCard = ({ 
    item, isMobile680, handleRemove, handleQuantityChange, isArabic
}) => {

    const [quantity, setQuantity] = useState(item.quantity);
    const [isMoreDetails, setIsMoreDetails] = useState(false);

    useEffect(() => {
        console.log("quantity changed");
        handleQuantityChange(quantity, item._id);
    }, [quantity]);

    return (

        <div className="CartCardContainer">

            <div className="row cartCard">

                <div className="details">
                    <Image src={item.pic} alt={`${item.title} cart image`}/>
                    <div className='texts'>
                        <h2>{getConstName(item.title, isArabic)}</h2>
                        <p>{getConstDetails(item.title, isArabic)}</p>
                        <div>
                            <button onClick={() => handleRemove(item)}>{getConstName('Remove', isArabic)}</button>
                            <button style={{
                                background: 'orange'
                            }} onClick={() => setIsMoreDetails(!isMoreDetails)}>{getConstName('View details', isArabic)}</button>
                        </div>
                    </div>
                </div>
                            
                {!isMobile680 && <><h4 className="price">${item.price.toFixed(3)}</h4>

                <div className='quantity'>
                    <span onClick={() => setQuantity(quantity + item.quantityStep)} id="plus"></span>
                    <h4>{quantity}</h4>
                    <span id="minus" style={{
                        borderColor: quantity <= item.minQuantity ? '#efefef' : null,
                        cursor: quantity <= item.minQuantity ? 'default' : null,
                    }} onClick={() => {
                        if(quantity > item.minQuantity) setQuantity(quantity - item.quantityStep)
                    }}></span>
                </div>

                <h4 className="totalPrice">${(quantity * item.price).toFixed(2)}</h4></>}

                {isMobile680 && <div className="mobileDiv">
                    
                    <div className="containerDiv">
                        <label>{getConstName('Price', isArabic)}</label>
                        <h4 className="price">${item.price.toFixed(3)}</h4>
                    </div>

                    <div className="containerDiv">
                        <label>{getConstName('Quantity', isArabic)}</label>
                        <div className='quantity'>
                            <span onClick={() => setQuantity(quantity + item.quantityStep)} id="plus"></span>
                            <h4>{quantity}</h4>
                            <span id="minus" style={{
                                borderColor: quantity <= item.minQuantity ? '#efefef' : null,
                                cursor: quantity <= item.minQuantity ? 'default' : null,
                            }} onClick={() => {
                                if(quantity > item.minQuantity) setQuantity(quantity - item.quantityStep)
                            }}></span>
                        </div>
                    </div>

                    <div className="containerDiv">
                        <label>{getConstName('Total', isArabic)}</label>
                        <h4 className="totalPrice">${(quantity * item.price).toFixed(2)}</h4>
                    </div>
                </div>}

            </div>

            {isMoreDetails && <ul className="moreDetailsUL" dir="ltr">
                <li><h3>width</h3> <p>{item.width > 0 ? item.width : '-'}</p></li>
                <li><h3>height</h3> <p>{item.height > 0 ? item.height : '-'}</p></li>
                <li><h3>material</h3> <p>{item.material?.length > 0 ? item.material : '-'}</p></li>
                <li><h3>address</h3> <p>{item.address?.length > 0 ? item.address : '-'}</p></li>
                <li><h3>orientation</h3> <p>{item.orientation?.length > 0 ? item.orientation : '-'}</p></li>
                <li><h3>borderRadius</h3> <p>{item.borderRadius > 0 ? item.borderRadius : '-'}</p></li>
            </ul>}

        </div>

    )
};

export default CartCard;

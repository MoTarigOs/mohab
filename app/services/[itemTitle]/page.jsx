'use client';

import './Details.css';
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import Checkout from '@components/Checkout';
import { Context } from '@utils/Context';
import { getServiceDetails } from '@utils/Logic';
import { getConstDetails, getConstName } from '@utils/getLangItems';

const page = ({ params }) => {

    const { itemTitle } = params;
    const [selectedImage, setSelectedImage] = useState(''); 
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [item, setItem] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    const [itemWidth, setItemWidth] = useState(0);
    const [itemHeight, setItemHeight] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [itemOrientation, setItemOrientation] = useState('');
    const [material, setMaterial] = useState('');
    const [address, setAddress] = useState('');
    
    const { isMobile, setSelectedRouter, cartItems, setCartItems, isArabic } = useContext(Context);
    const inputRef = useRef(null);

    useEffect(() => {

      setSelectedRouter('Service Details');

      const fetchedItem = getServiceDetails(itemTitle);

      setItem(fetchedItem);
      setQuantity(fetchedItem.minQuantity);

    }, []);

    const handleAddToCart = (cartItem) => {
      //update or add
      let arr = cartItems;

      for (let i = 0; i < arr.length; i++) {
        if(arr[i]._id === cartItem._id){

          arr[i] = cartItem;
          arr[i].width = itemWidth;
          arr[i].height = itemHeight;
          arr[i].borderRadius = rangeValue;
          arr[i].orientation = itemOrientation;
          arr[i].material = material;
          arr[i].address = address;
          arr[i].quantity = quantity;

          setCartItems(arr);
      
          setAddedToCart(true);
          setTimeout(() => {
            setAddedToCart(false);
          }, 5000);

          return;

        }
      };

      cartItem.width = itemWidth;
      cartItem.height = itemHeight;
      cartItem.borderRadius = rangeValue;
      cartItem.orientation = itemOrientation;
      cartItem.material = material;
      cartItem.address = address;
      cartItem.quantity = quantity;

      setCartItems([cartItem, ...cartItems]);
      
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 5000);
    };

    if(!item) {
      return (
        <div className='Loading'>
          Loading...
        </div>
      )
    };

    return (

      <div className='ServiceDetails'>

        <div className='images_cost'>

          <h1>{getConstName(item.title, isArabic)}</h1>
            
          <p>{getConstDetails(item.title, isArabic)}</p>

          <div className='images' style={{
            height: !item.images && 'fit-content',
            maxHeight: !item.images && '360px',
            overflow: 'hidden'
          }}>

            <div className='preview'>
              <Image src={item.pic} alt={`${item.title} preview image`}/>
            </div>

            {item.images && <ul className='imagesList'>
              {item.images.map((item) => (
                <li key={item._id} style={{
                  border: selectedImage === item._id 
                  ? '2px solid black' : null
                }} onClick={() => setSelectedImage(item._id)}>
                  <Image src={item.pic}/>
                </li>
              ))}
            </ul>}

          </div>

          {!isMobile && <div className='cost'>
            <Checkout type={'preview'} item={item} 
              quantity={quantity} handleAddToCart={handleAddToCart}
              isArabic={isArabic}
              />
             {addedToCart && <h4 className='added'>{getConstName('Added Successfully', isArabic)}</h4>} 
          </div>}
          
        </div>
        
        <div className='details'>

          <h2>{getConstName('Customize', isArabic)}</h2>

          <div className='coordinates'>

            <div>

              <label>width (pixels)</label>
              <input type='number' placeholder={item.width ? item.width : 'width'} onChange={(e) => setItemWidth(Number(e.target.value))}/>

              <label>height (pixels)</label>
              <input type='number' placeholder={item.height ? item.height : 'height'} onChange={(e) => setItemHeight(Number(e.target.value))}/>

              <label>Borders Radius ({rangeValue} pixels)</label>
              <input type='range' placeholder={item.borderRadius ? item.borderRadius : '0'}
              min={0} max={100}
              onChange={(e) => setRangeValue(Number(e.target.value))}/>

              <label>Orientation</label>
              <select value={item.orientation ? item.orientation : null} onChange={(e) => setItemOrientation(e.target.value)}>
                <option value="Portrait">Portrait</option>
                <option value="Landscape">Landscape</option>
              </select>

            </div>

            <span style={{
              borderRadius: rangeValue
            }}/>

          </div>

          <label>Material</label>
          <input placeholder={item.material ? item.material : 'Material'} onChange={(e) => setMaterial(e.target.value)}/>

          <label>Select design</label>
          <div className='selectDesign' onClick={() => inputRef.current.click()}
          style={{ padding: !selectedImageUrl ? '8px 12px' : null }}>

            <input ref={inputRef} type='file' onChange={(e) => {
              setSelectedImageUrl(URL.createObjectURL(e.target.files[0]))
            }}/>

            {selectedImageUrl 
            ? <Image src={selectedImageUrl} width={120} height={120}/>
            : <p>Select design</p>}

          </div>

          <label>Quantity (no less than {item.minQuantity})</label>
          <input type='number' placeholder={item.quantity ? item.quantity : item.minQuantity} 
          onChange={(e) => setQuantity(Number(e.target.value))}/>

          <label>Address</label>
          <input placeholder={item.address ? item.address : 'EX: 12th street, NewYork, USA'} 
          onChange={(e) => setAddress(e.target.value)}/>

        </div>

        {isMobile && <div className='cost'>
            <Checkout type={'preview'} item={item}
             quantity={quantity} handleAddToCart={handleAddToCart}
             isArabic={isArabic}
             />
             {addedToCart && <h4 className='added'>{getConstName('Added Successfully', isArabic)}</h4>} 
        </div>}

      </div>

    )

};

export default page;

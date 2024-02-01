'use client';

import { getConstName } from '@utils/getLangItems';
import './SignUp.css';
import { useContext } from 'react';
import { Context } from '@utils/Context';

const page = () => {

  const { isArabic } = useContext(Context);

  return (

    <div className='SignUp'>
      
      <div className='formDiv'>

        <h1>{getConstName('Register', isArabic)}</h1>

        <form>

          <label>{getConstName('Name', isArabic)}</label>
          <input placeholder='Enter a name'/>

          <label>{getConstName('Email', isArabic)}</label>
          <input type='email' placeholder={getConstName('Enter your email', isArabic)}/>
          
          <label>{getConstName('Password', isArabic)}</label>
          <input type='password' placeholder={getConstName('Enter your password', isArabic)}/>
          
          <label>{getConstName('Confirm Password', isArabic)}</label>
          <input type='password' placeholder={getConstName('Confirm the password', isArabic)}/>

          <div className='policies'>
            <input type='checkbox' style={{ 
              marginRight: isArabic && 'unset',
              marginLeft: isArabic && 8,
            }}/>
            <p>{getConstName('I agree to the', isArabic)}<span>{getConstName('terms of use', isArabic)}</span> & <span>{getConstName('policies', isArabic)}</span></p>
          </div>
          
          <button>{getConstName('Sign Up', isArabic)}</button>

        </form>

      </div>

    </div>

  )
}

export default page

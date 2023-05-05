import React, { useEffect, useState } from 'react';
import PricingCard from './pricing';
import axios from 'axios';
const Feature = () => {
  const [pricing,setPricing]=useState([]);
   const fetchP= async()=>{
    try {
        const response = await axios.get('https://dynamic-web-api.vercel.app/featuresData');
        setPricing(response.data);
        console.log(pricing);
        

    } catch (error) {
      
    } 
   }
   useEffect(()=>{
     fetchP(); 
   },[]) 
  return (
   
    <div className='features'>
    {pricing.map((item,index)=>{ return(
      <PricingCard plan={item.title} price={item.price} feature1={item.description
} img={item.img}/>)
    })}
      
    </div>
    
  )
}

export default Feature
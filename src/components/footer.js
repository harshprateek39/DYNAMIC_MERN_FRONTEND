import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
    const x="https://meet.google.com/";
    
    const [dataa,setDataa]=useState({})
   const getContact= async()=>{
     try {
        const a = await axios.get("https://dynamic-web-api.vercel.app/contact");
        setDataa(a.data);
     } catch (error) {
        
     }
   }
   useEffect(()=>{
    getContact();
   },[])
console.log(dataa.name);
  return (
    <div className='footer'>
    <div className='left'>
   
    
    <>{dataa.name}</><br/>
     <>{dataa.phone}</><br/>
     <>{dataa.email}</>
     
     </div>
     <div className='Copyright'> Copyright @ HarshPrateek</div>
    <div className='right'>
    <Link to={dataa.insagram}><BsInstagram/></Link>
    <Link to={dataa.facebook}><BsTwitter/></Link>
    <Link to={dataa.linkdin}><BsLinkedin/></Link>
   
        </div>
    </div>
  )
}

export default Footer
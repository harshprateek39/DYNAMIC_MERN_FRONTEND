import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [myData, setMyData] = useState({});
    const [myContent, setMyContent] = useState([]);
    
    const getApi=()=>{
        axios.get('https://dynamic-web-api.vercel.app/home')
      .then(res=>{
            
            setMyData(res.data);
        })
      .catch(err=>{
            console.log(err)
        })
    }
    const getmessg=()=>{
      axios.get('https://dynamic-web-api.vercel.app/card')
    .then(res=>{
          const a=res.data;
          const mergedList = [...myContent, ...a];
          setMyContent(mergedList); 
          
      })
    .catch(err=>{
          console.log(err)
      })
  }
    useEffect(()=>{
    getApi();
    getmessg();
   
    },[]) 
    

    
    
  return (

    <div className='home'>
        <h1>{myData.heading}</h1>
         <div className='home-content'>
        {myContent?.map((item,index)=>{
          return(
            <div className='home-content-item' key={index}>
              <img className='home-images' src= {item.img}></img>
              <p>{item.content}</p>
              
            </div>)
        })}
         </div>
    </div>
  )
}

export default Home;
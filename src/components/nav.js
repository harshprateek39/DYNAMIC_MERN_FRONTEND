import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import Media from 'react-media';
const Nav = () => {
      const [ click,setClick]=useState(false) 
      const slide=()=>{
        if(click){
        document.getElementById("navp").style.right = "-500px";
        setClick(!click);}
        else{
        document.getElementById("navp").style.right = "0px";
        setClick(!click);  }
      }
      const close=()=>{  
              setClick(!click);  }
  return (
    <div className='nav'>
    <Media query="(max-width:1000px)">
    {matches=>{return !matches?
    <>
        <div className='navBrand'>
            <span >Galactic</span><span style={{"fontWeight":"100"}}>Jobs</span>
        </div>
        <div className='navLinks'>
            <Link className='linkchanger' to='/'>Home</Link>
            <Link to='/' className='linkchanger'>How it works</Link>
            <Link to='/features' className='linkchanger'>Features</Link>
            <Link to='/contact' className='linkchanger'>Contact</Link>
        </div>
        <div ><button  className="navBtn">Read More</button></div></>:
        <>
        <div className='navBrand'><span >Galactic</span><span style={{"fontWeight":"100"}}>Jobs</span></div>
        <div className="toggle"> <button className="toggle" onClick={slide}><GiHamburgerMenu/>  </button>
        <div className='navPannel' id="navp">
        <Link  className='linkchanger' to='/'>Home</Link>
            <Link  to='/'  className='linkchanger'>How it works</Link>
            <Link  to='/features' className='linkchanger'>Features</Link>
            <Link  to='/contact' className='linkchanger'>Contact</Link>
        </div>
        </div>
        
        </>}}
        </Media>
    </div>
  )
}

export default Nav
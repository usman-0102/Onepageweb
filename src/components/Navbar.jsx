import { Link, animateScroll as scroll} from 'react-scroll'
import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
export default function Header() {
  const[toggle,setToggle]=useState(false);
  return (
    <div className='fixed  w-full z-10 bg-zinc-200 h-[80px] p-4 drop-shadow-lg'>
      <div className="py-2 items-center max-w-[1240px] flex justify-between mx-auto">
        <div className="text-3xl font-bold text-black" >
          DevDen
        </div>
        {
          toggle ?
          <AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-black text-3xl md:hidden block'/> 
          :
        <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-black text-3xl md:hidden block'/>
         }
        <ul className='hidden md:flex text-black gap-10 font-semibold justify-center m-auto'>
          
          <li className='pt-2'>
          <Link to="home"  smooth={true}  duration={200} >
           Home
        </Link>
          </li>
          <li className='pt-2'>
          <Link to="about"  smooth={true} offset={-200} duration={500} >
           About
        </Link>
          </li> 
          <li className='pt-2'>
          <Link to="support"  smooth={true} offset={-100} duration={500} >
           Support
        </Link>
          </li>   
          <li className='pt-2'>
          <Link to="platform"  smooth={true} offset={-100} duration={500} >
           Platform
        </Link>
          </li>   
          <li className='pt-2'>
          <Link to="pricing"  smooth={true} offset={-50} duration={500} >
           Pricing
        </Link>
          </li>
           
        </ul>
        <div className='hidden md:flex' >
               
              <button className="bg-indigo-600 rounded-md p-2 px-5 text-white font-semibold mr-2">Sign-in</button>         
              <button className="bg-indigo-600 rounded-md p-2 px-5 text-white font-semibold">Sign-Up</button>
        </div>
        {/*Responsive */}
        <ul className={ `font-semibold  duration-700 md:hidden text-black h-screen w-full fixed bg-[#d6cbcb] top-20 ${toggle ? "left-[0]": "left-[-100%]"}`}>
         
        <li className='pt-2'>
          <Link to="home"  smooth={true} offset={50} duration={500} >
           Home
        </Link>
          </li>
          <li className='pt-2'>
          <Link to="about"  smooth={true} offset={50} duration={500} >
           About
        </Link>
          </li> 
          <li className='pt-2'>
          <Link to="support"  smooth={true} offset={50} duration={500} >
           Support
        </Link>
          </li>   
          <li className='pt-2'>
          <Link to="platform"  smooth={true} offset={50} duration={500} >
           Platform
        </Link>
          </li>   
          <li className='pt-2'>
          <Link to="pricing"  smooth={true} offset={50} duration={500} >
           Pricing
        </Link>
          </li>
          
            <div className=' mx-8 mt-2' >
               
               <button className="w-full text-black mb-3 border-2 border-indigo-600 rounded-md p-2 px-5 font-semibold">Sign-Up</button>
               <button className="w-full bg-indigo-600 rounded-md p-2 px-5 text-white font-semibold mr-2">Sign-in</button>         
         </div>
        </ul>
      </div>
    </div>
  )
}

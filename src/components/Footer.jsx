import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaTwitch
} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='bg-slate-900 w-full mt-24 text-gray-300 py-4 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul className='pl-4'>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
             
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul className='pl-4'>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul className='pl-4'>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul className='pl-4'>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
              <h1 className='uppercase font-bold'>Subscribe to our NewsLetter</h1>
              <p className='py-4'>The latest news, articles, and resources, will be sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
                <input type="Email" placeholder='Email' className='placeholder-slate-700 w-full text-black p-2 rounded-md mb-4'/>
                 <button className='ml-2 bg-indigo-600 text-white font-bold p-2 mb-4 rounded-md'>Subscribe</button>
            </form>
            
            </div>
        </div>
        
        <div className='flex max-w-[1240px] m-auto Justify-between sm:flex-row text-center text-gray-200'>
           <p>2022, Copyright UTech. All Rights Reserved.</p>
        <div className='flex items-centerjustify-between sm:max-w-[300px] pt-4 text-2xl '>
            <FaFacebook className='p-2 text-4xl mt-2'/>
            <FaGithub className='p-2 text-4xl mt-2'/>
            <FaInstagram className='p-2 text-4xl mt-2'/>
            <FaTwitch className='p-2 text-4xl mt-2'/>
            <FaTwitter className='p-2 text-4xl mt-2'/>
        </div>
        </div>
    </div>
  )
}

export default Footer
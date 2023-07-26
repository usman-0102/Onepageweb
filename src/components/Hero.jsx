import React from 'react'
import bgimg from '../assets/cyber-bg.png'
import {HiCloudUpload,HiServer,HiPaperAirplane} from "react-icons/hi";
import{BsFillDatabaseFill} from "react-icons/bs"

const Hero = () => {
  return (
    <div   name='home'  className='w-full h-screen bg-zinc-200 flex flex-col justify-between pb-[800px]'>
      <div   className='mt-24 grid m-auto md:grid-cols-2'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 ml-8'>
         <p  className='text-2xl'>Unique Sequencing and Production</p>
         <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
         <p  className='text-2xl'>This is the Best Software House</p>
         <button className='bg-indigo-600 py-3 px-6 sm:w-[60%] text-white font-bold rounded-lg mt-2'>Get Started</button>
        </div>
        <div>
            <img className='w-full' src={bgimg} alt="/" />
        </div>
        <div className=' flex flex-col py-8 
        bottom-[5%] mx-1 md:left-1/2 transform md:translate-x-1/2 bg-zinc-200
        border border-slate-400 rounded-xl text-center shadow-xl mt-4 '>
        <p className='font-bold text-xl pb-2'>Data Services</p>
        <div className='flex justify-between flex-wrap px-4'>
          <p className='flex px-4 py-2 text-slate-500'><HiCloudUpload className='text-indigo-600 text-3xl'/> App Security </p>
          <p className='flex px-4 py-2 text-slate-500'> <BsFillDatabaseFill className='text-indigo-600 text-3xl'/>Dashboard</p>
          <p className='flex px-4 py-2 text-slate-500'><HiServer className='text-indigo-600 text-3xl'/>Cloud Design</p>
          <p className='flex px-4 py-2 text-slate-500'><HiPaperAirplane className='text-indigo-600 text-3xl'/>API</p>

        </div>
        </div>
        <br />
        <br />

      </div>
    </div>
  )
}

export default Hero
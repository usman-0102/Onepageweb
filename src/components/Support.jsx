import React from "react";
import { BsArrowRight,BsTelephone } from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
import { FaMicrochip } from "react-icons/fa";
import supportimg from "../assets/support.jpg";
const Support = () => {
  return (
    <div name='support' className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportimg} alt="/" />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative ">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-slate-200 text-center text-3xl font-bold">SUPPORT</h2>
          <h2 className="text-5xl text-center font-bold py-8">Finding the right team</h2>
          <h2 className="text-center text-3xl text-slate-200">
            We understand how important it is to have a smooth and enjoyable
            experience with our platform, and we're here to ensure just that.
            Our support page is designed to provide you with all the assistance
            and guidance you may need on your journey with us.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:m-4 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 ">
            <div className="bg-white rounded-xl shadow-2xl hover:scale-[110%] duration-150">
                <div>
                    <BsTelephone className="w-16 pt-4 pb-4 text-6xl ml-8  bg-indigo-600  rounded-lg mt-[-2rem] text-white"/>
                    <h3 className="text-black pl-9 font-bold p-2 text-2xl">Sales</h3>
                    <p className="text-black px-4 pl-9 text-xl">  We understand how important it is to have a smooth and enjoyable
                      experience with our platform, and we're here to ensure just that.</p>
                    
                </div>
                <div className="bg-slate-200 pl-8 py-4">
                    <p className="text-indigo-600 flex items-center font-bold">Contact Us <BsArrowRight className="pl-4 text-4xl"/></p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl hover:scale-[110%] duration-150">
                <div>
                    <HiSupport className="w-16 pt-4 pb-4 text-6xl ml-8  bg-indigo-600  rounded-lg mt-[-2rem] text-white"/>
                    <h3 className="text-black pl-9 font-bold p-2 text-2xl">Technical Support</h3>
                    <p className="text-black px-4 pl-9 text-xl">  We understand how important it is to have a smooth and enjoyable
                      experience with our platform, and we're here to ensure just that.</p>
                    
                </div>
                <div className="bg-slate-200 pl-8 py-4">
                    <p className="text-indigo-600 flex items-center font-bold">Contact Us <BsArrowRight className="pl-4 text-4xl"/></p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl hover:scale-[110%] duration-150">
                <div>
                    <FaMicrochip className="w-16 pt-4 pb-4 text-6xl ml-8  bg-indigo-600  rounded-lg mt-[-2rem] text-white"/>
                    <h3 className="text-black pl-9 font-bold p-2 text-2xl">Media Inquiries</h3>
                    <p className="text-black px-4 pl-9 text-xl">  We understand how important it is to have a smooth and enjoyable
                      experience with our platform, and we're here to ensure just that.</p>
                    
                </div>
                <div className="bg-slate-200 pl-8 py-4">
                    <p className="text-indigo-600 flex items-center font-bold">Contact Us <BsArrowRight className="pl-4 text-4xl"/></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

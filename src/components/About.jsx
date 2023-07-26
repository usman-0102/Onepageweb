import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center"> 
            <h2 className="text-3xl font-bold">Trusted by developers across the world</h2>
            <p className="text-gray-500 text-3xl py-8">We help startups and SMEs get their ideas off the ground and help maintain their products by providing them with exemplary support and services.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-2 text-center">
            <div className="py-8 border rounded-xl shadow-xl hover:scale-[110%] duration-150 ">
                <p className="text-6xl text-indigo-600 font-bold">100%</p>
                <p className="text-2xl font-bold">Completion</p>
            </div>
            <div className="py-8 border rounded-xl shadow-xl hover:scale-[110%] duration-150">
                <p className="text-6xl text-indigo-600 font-bold">24/7</p>
                <p className="text-2xl font-bold">Delivery</p>
            </div>
            <div className="py-8 border rounded-xl shadow-xl hover:scale-[110%] duration-150">
                <p className="text-6xl text-indigo-600 font-bold">100K</p>
                <p className="text-2xl font-bold">Transactions</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            "Cutting Edge Digital Solutions & Defence Consultancy"
          </h1>
          <p className="mb-8 leading-relaxed">
            MERN STACK Experts | Digital Marketing - Google, LinkedIn, Meta |
            Cloud |Cyber Security | Mobile Apps | CMS Websites | SAP ERP
          </p>
          <p className="mb-8 leading-relaxed">
            Defence Procurement | RFI Response | Bid Prep | Trials Support |
            Inspections & Product Delivery Support
          </p>
          <p className="mb-8 leading-relaxed">
            Supercharge your business with Maxima’s Solutions. Startups,
            businesses and organization trust us to deliver solutions they
            desire. And we work till we make it happen.
          </p>

          <div className="flex justify-center">
            <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
              Contact Us!
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src="/web1.png" alt="logo" width={600} height={300}></Image>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;

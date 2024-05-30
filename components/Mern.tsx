import React from "react";
import Image from "next/image";

const Mern = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image src="/Mern.png" alt="logo" width={600} height={300}></Image>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          MERN Stack Development, Digital Ads, Creative Design, & Defence Consultancy
          </h1>
          <p className="mb-8 leading-relaxed">We Know Your Business Challenges Are Unique. And You Require Attention To Detail All The Way Through. That’s Where We Come To Play. As A Trusted Global Digital Company, Work With The Team That Understands Your Needs Best. </p>
          <p className="mb-8 leading-relaxed">Get Branding, Digital Marketing, Mobile App Development & Web App Development Solutions, Custom Designed To Empower Your Growth. </p>
          <p className="mb-8 leading-relaxed">Ex Defence Officers Assist In Equipment Introduction To Defense Organizations, Field Trials, Defence Procurement And Documentation Process. </p>
          <div className="flex justify-center">
            <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
              Read More!
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mern;

import React from "react";
import Image from "next/image";

const Brig = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src="/Brig.png"
            alt="logo"
            width={600}
            height={300}
          ></Image>{" "}
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Director, Stratergy and Panning- Brig. Ajit Kapoor(Retd)
          </h1>
          <p className="mb-8 leading-relaxed">
          34 years of experience in defence. A decorated Gunner Officer, who possess precisely the experience and expertise needed to pinpoint and understand the nature of the opportunities or challenges in Defence Acquisition. He has a reservoir of first-hand knowledge combined with sophisticated analytical skills and strategic insights to help firms increase certainty around vital Defence business decisions. His approach to projects are pragmatic and open-minded, and he has a natural urge to excel against tight timeframes.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Brig;

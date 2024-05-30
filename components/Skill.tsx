import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              The Leading Source For Our Skill
            </h1>
            <div className="leading-relaxed">
              OURSKILL The Leading Source For Our Skill We Are Never Happy With
              Just Good. We Know There Is Always Room For Improvement. We Strive
              For Excellence In Everything We Do. And That’s Our Promise To You.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              Full Stack 
            </h2>
            <p className="leading-relaxed">100%</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              UI/UX
            </h2>
            <p className="leading-relaxed">90%</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              ERP Consultants
            </h2>
            <p className="leading-relaxed">100%</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              Cyber Security Solutions
            </h2>
            <p className="leading-relaxed">100%</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image src="/skill.png" alt="logo" width={600} height={300}></Image>{" "}
        </div>
      </div>
    </section>
  );
};

export default Skill;

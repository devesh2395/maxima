import React from "react";
import Image from "next/image";

const Process2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-grow pl-4">
                <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                  <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                    <span className="text-5xl font-bold">1.</span>
                    <p className="text-amber-300 font-thin">Prototype</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="flex-grow pl-4">
                <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                  <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                    <span className="text-5xl font-bold">2.</span>
                    <p className="text-amber-300 font-thin">
                      Develop
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="flex-grow pl-4">
                <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                  <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                    <span className="text-5xl font-bold">3.</span>
                    <p className="text-amber-300 font-thin">
                      Launch!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src="/steps.png" alt="logo" width={600} height={300}></Image>
        </div>
      </div>
    </section>
  );
};

export default Process2;

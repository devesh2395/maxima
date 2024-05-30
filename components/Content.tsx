import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image src="/innovation.png" alt="logo" width={1200} height={500}></Image>{" "}
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  For the Love of Innovation!
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Who we are?</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Maxima Business Solutions Was Established In 2009 To Craft
                Interactive Digital Transformation To The World. With A Perfect
                Blend Of Technology & Exquisite Talent, We Empower Organizations
                Around The World With Impeccable End-To-End Digital Solutions
                That Helps Them Take Their Ventures To The Next Level. We
                Envision, Prototype, Develop & Test Digital Products And
                Solutions To Find A New Competitive Edge For Your Business.
              </p>
              <br></br>
              <p className="leading-relaxed text-lg mb-4">
                We Know The Impact Emotion Has On Influencing Buying Decisions.
                That’s Why We Stay True To Your Purpose And Create & Empower
                Your Brand By Leading With Purpose. We Create Custom Branding
                Strategies- Designed To Curate A Positive & Powerful Impact On
                The Audience.
              </p>
              <br></br>
              <p className="leading-relaxed text-lg mb-4">
                Scale Your Business To New Heights With Performance-Driven
                Applications We Bring To The Table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

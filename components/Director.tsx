import React from 'react'
import Image from 'next/image'

const Director = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Director- Mr. Rajesh Shivpalan
        
      </h1>
      <p className="mb-8 leading-relaxed">23 years of experience in the IT domain. Rajesh is a digital transformation enthusiast, Rajesh spent the last one and half decades assisting clients with their digital transformation journey- from a humble website designing to social media marketing and sophisticated mobile applications, ERP Solutions, SAP Implementation, Cyber Security, Lead Gen Google / FB Ads and much more.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image src="/Director.png" alt="logo" width={600} height={300}></Image>
    </div>
  </div>
</section>
  )
}

export default Director

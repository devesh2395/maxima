import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
        <Link href="/">
        <Image src="/maxima-logo-wp-retina.png" alt="logo" width={200} height={50} />
      </Link>
          <span className="ml-3 text-xl">Digital Solutions</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">Home</a>
          <a href="/Leadership" className="mr-5 hover:text-gray-900">Leadership</a>
          <a href="/Services" className="mr-5 hover:text-gray-900">Services</a>
          <a href="/Blog" className="mr-5 hover:text-gray-900">Blog</a>
          <a href="/Contact" className="mr-5 hover:text-gray-900">Contact</a>
        </nav>

        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Free Call +919657480645
        </button>
      </div>
    </header>
  );
};

export default Navbar;

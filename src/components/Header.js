import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
const Header = () => {
  const handleTwitterClick = () => {
    
    window.location.href = 'https://x.com/MutableTechEnt?t=Ayzz__Lem62tPpLNDAkU0A&s=09';
  };
  const handleGoogleClick = () => {
    
    window.location.href = 'https://mutabletech.co.ke';
  };
  return (
    <div className="absolute top-5 left-0 bg-lightsteelblue w-full h-[214px] mix-blend-normal text-left text-smi text-white font-open-sans">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 w-full h-[214px] mix-blend-normal">
        <img
          className="absolute top-3 left-[0px] w-[340px] h-[127px] object-cover float-left"
          alt=""
          src="/mutabletechlogo-1-1@2x.png"
        />
        <div className="flex items-center justify-end space-x-4">
        <div className="flex items-center justify-center space-x-2 leading-[32px]   hover:text-blue transition duration-300  ease-in-out text-white">
         <MdLocationPin className="text-9xl text-blue font-bold" />
          <div className="text-12xl font-bold">
            <span className="card-text  no-underline">Thika Road</span>
            <span className="card-text  block">Nairobi, Kenya</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 leading-[32px]   hover:text-blue transition duration-300  ease-in-out text-white">
          <CiClock2 className="text-9xl text-blue" />
          <div className="text-12xl font-bold">
            <span className="relative ">Mon - Sat 9.00 - 18.00</span>
            <span className="relative leading-[32px] block">Sunday CLOSED</span>
          </div>
        </div>
          <div className="flex items-center text-white">
          
            <div className="text-9xl mr-2 p-2  hover:text-blue transition duration-300 ">
              <FaFacebookF />
            </div>
            <div className="text-9xl p-2  hover:text-blue transition duration-300  "onClick={handleTwitterClick}>
              <FaXTwitter />
            </div>
            <div className="text-9xl p-2  hover:text-blue transition duration-300 "onClick={handleGoogleClick}>
              <IoLogoGoogleplus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

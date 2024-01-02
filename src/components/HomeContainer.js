import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const HomeContainer = () => {
  return (
    <div className="absolute top-[170px] left-[50%] transform -translate-x-1/2 bg-steelblue shadow-[0px 0px 5px rgba(0, 0, 0, 0.52)] w-[1091px] h-16 overflow-hidden mix-blend-normal text-left text-smi text-white font-bold z-[999]">
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center space-x-6 ml-2">
          <div className="leading-[15px] text-orangered hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            HOME
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            ABOUT
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            REVIEWS
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            CONTACT
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            PRICING
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            OTHER PRODUCTS
          </div>
          <div className="leading-[15px] hover:text-orange-500 transition duration-300 ease-in-out no-underline">
            POS SOFTWARE
          </div>
          <div className="w-px h-[27px] border-l-[2px] border-solid border-gray-500" />
          <div className="flex-col p-2">
          <div className="relative mb-2">
            <FaPhoneAlt className="mr-1 text-3xl text-blue" />
            <span className="card-text   no-underline">+254-769-764285</span>
          </div>
          <div className="relative   ">
            <MdMarkEmailUnread className="mr-1 text-base text-blue" />
            <span className="card-text  no-underline leading-[15px]">info@mutabletech.co.ke</span>
          </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

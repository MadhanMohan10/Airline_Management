import React from "react";
import { GoPaperAirplane } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";

const ValuesWeProvide = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Top Values for You</h1>
        <p className="mt-2 text-lg">Experience a variety of benefits using our services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <GoPaperAirplane className="text-2xl text-black transform -rotate-35" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Airport Pickup</h2>
          <p className="mt-2 text-sm text-center">
            We provide escort from the airport to the hotel
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <IoWalletOutline className="text-2xl text-black" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Easy Payment</h2>
          <p className="mt-2 text-sm text-center">
            Quick and easy booking of flights for upcoming dates
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <MdOutlinePeople className="text-2xl text-black" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Best Tour Guide</h2>
          <p className="mt-2 text-sm text-center">
            Best tour guide is ready to guide your trip
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <CiDiscount1 className="text-2xl text-black" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Lots of Promos</h2>
          <p className="mt-2 text-sm text-center">
            Various promotions and discounts available
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesWeProvide;

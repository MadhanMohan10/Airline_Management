import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const FormHeader = ({ currentActiveForm }) => {
  return (
    <div className="my-5 bg-white border-1 border-gray-200 rounded-30 p-5">
      <div>
        <ul className="flex justify-between items-center overflow-x-scroll sm:overflow-hidden">
          <li className={`min-w-100 text-xl ${currentActiveForm === 0 ? "text-blue-500 font-semibold" : ""}`}>
            Seat Booking
          </li>
          <li className={`min-w-50 flex justify-center items-center ${currentActiveForm === 0 ? "text-blue-500" : ""}`}>
            <IoIosArrowForward size={20} />
          </li>
          <li className={`min-w-100 text-xl ${currentActiveForm === 1 ? "text-blue-500" : ""}`}>
            Traveller Details
          </li>
          <li className={`min-w-50 flex justify-center items-center ${currentActiveForm === 1 ? "text-blue-500" : ""}`}>
            <IoIosArrowForward size={20} />
          </li>
          <li className={`min-w-100 text-xl text-center ${currentActiveForm === 2 ? "text-blue-500" : ""}`}>
            Review
          </li>
          <li className={`min-w-50 flex justify-center items-center ${currentActiveForm === 2 ? "text-blue-500" : ""}`}>
            <IoIosArrowForward size={20} />
          </li>
          <li className={`min-w-100 text-xl ${currentActiveForm === 3 ? "text-blue-500" : ""}`}>
            Payment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormHeader;

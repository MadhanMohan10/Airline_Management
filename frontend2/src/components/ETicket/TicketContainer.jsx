import React from "react";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

const TicketContainer = ({ ticketData, bookingsData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const calcDuration = (departTime, arriveTime) => {
    if (!departTime || !arriveTime) {
      return "Duration not available";
    }

    const [departHour, departMinute] = departTime.split(":").map(Number);
    const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

    let departTotalMinutes = departHour * 60 + departMinute;
    let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

    if (arriveTotalMinutes < departTotalMinutes) {
      arriveTotalMinutes += 24 * 60; // Add 24 hours worth of minutes
    }

    let durationMinutes = arriveTotalMinutes - departTotalMinutes;
    const durationHour = Math.floor(durationMinutes / 60);
    const durationMinute = durationMinutes % 60;

    return `${durationHour}h ${durationMinute}m`;
  };

  return (
    <div className="flex flex-col md:flex-row mt-5">
      {/* Ticket Details */}
      <div className="w-full md:w-60% flex flex-col justify-between items-center bg-white overflow-hidden rounded-20">
        {/* Ticket Header */}
        <div className="flex justify-start items-center gap-3 bg-gray-100 py-3 px-5 rounded-t-20 w-full">
          <img
            src="https://phshirt.com/wp-content/uploads/2022/11/Air-Asia-Logo.png"
            alt="AirAsia"
            className="w-80 h-40 object-contain object-center"
          />
          <p className="text-18 font-semibold">{ticketData.airlineName} Airlines</p>
        </div>
        {/* Ticket Body */}
        <div className="p-10 flex-1 rounded-b-20 flex flex-col justify-center">
          <div className="flex max-w-800 m-auto justify-between items-center relative z-10">
            {/* Departure Info */}
            <div className="text-center">
              <p className="text-18 font-semibold">{ticketData.from}</p>
              <p className="text-12">Depart</p>
              <p className="text-18 font-semibold">{ticketData.departTime}</p>
              <p className="text-14 text-gray-600">{formatDate(ticketData.departDate)}</p>
            </div>
            {/* Duration and Line */}
            <div className="flex items-center my-5 lg:my-0">
              <div className="w-15 h-15 rounded-full bg-blue-300"></div>
              <div className="w-15 h-1 border-1 border-blue-400 border-dashed lg:w-30"></div>
              <div className="text-12 px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-14 lg:px-3 text-center">
                {calcDuration(ticketData.departTime, ticketData.arriveTime)}
              </div>
              <div className="w-15 h-1 border-1 border-blue-400 border-dashed lg:w-30"></div>
              <div className="w-15 h-15 rounded-full bg-blue-300"></div>
            </div>
            {/* Arrival Info */}
            <div className="text-center">
              <p className="text-18 font-semibold">{ticketData.to}</p>
              <p className="text-12">Arrival</p>
              <p className="text-18 font-semibold">{ticketData.arriveTime}</p>
              <p className="text-14 text-gray-600">{formatDate(ticketData.arriveDate)}</p>
            </div>
          </div>
          {/* Instructions */}
          <div className="mt-5 flex flex-col md:flex-row">
            <div className="w-full bg-gray-100 p-2 rounded-15 flex gap-2 justify-start items-center">
              <MdOutlineAirplaneTicket size={20} className="text-gray-700" />
              <p className="text-10 text-gray-700">
                Show e-ticket and passenger identity during check-in
              </p>
            </div>
            <div className="w-full bg-gray-100 p-2 rounded-15 flex gap-2 justify-start items-center mt-2 md:mt-0">
              <CiClock2 size={20} className="text-gray-700" />
              <p className="text-10 text-gray-700">
                Please be at the boarding gate at least 15 minutes before the boarding time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t-2 md:border-l-2 border-black border-dashed my-0 mx-20 md:my-20"></div>

      {/* Ticket Footer */}
      <div className="w-full md:w-40% bg-white rounded-20">
        <div className="p-5 w-full bg-gray-100 rounded-t-20 flex justify-end items-center">
          <p className="text-blue-500">Economy class</p>
        </div>
        {/* Passenger Details */}
        <div className="p-5 w-full">
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            {/* Name */}
            <div>
              <p className="text-14 font-semibold max-w-150">Name</p>
              <p className="text-14">{bookingsData.fName} {bookingsData.lName}</p>
            </div>
            {/* Email */}
            <div>
              <p className="text-14 font-semibold max-w-150">Email</p>
              <p className="text-14">{bookingsData.email}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-between mt-3">
            {/* Passport Number */}
            <div>
              <p className="text-14 font-semibold max-w-150">Passport Number</p>
              <p className="text-14">{bookingsData.passportNumber}</p>
            </div>
            {/* Booking Code */}
            <div>
              <p className="text-14 font-semibold max-w-150">Airline Booking Code</p>
              <p className="text-14">{bookingsData._id}</p>
            </div>
          </div>
          {/* Seat and QR Code */}
          <div className="flex justify-between mt-3">
            {/* Seat */}
            <div className="w-full bg-gray-100 rounded-15 p-3 flex flex-col justify-center items-center">
              <p className="text-18 font-semibold text-center">Seat</p>
              <p className="text-22 font-bold text-center">{bookingsData.seat}</p>
            </div>
            {/* QR Code */}
            <div className="w-full bg-gray-100 rounded-15 p-3 flex justify-center items-center">
              <img
                src={`https://quickchart.io/qr?text=https://abvssystem.web.app/verify-ticket/${bookingsData._id}`}
                alt="QR Code"
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;

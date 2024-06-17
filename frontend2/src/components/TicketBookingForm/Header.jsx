import React from "react";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const calcDuration = (departTime, arriveTime) => {
  if (!departTime || !arriveTime) return "Duration not available";

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

const Header = ({ currentFlight }) => {
  if (!currentFlight) return null; // Handle case where currentFlight is not defined

  return (
    <div className="overflow-hidden rounded-30 border-1 border-gray-200">
      <div className="w-full h-fit bg-e1e7ee p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={currentFlight.airline.airlineLogo}
            alt="Airline Logo"
            className="w-60 h-40 object-contain"
          />
          <p className="text-18 font-semibold">
            {currentFlight.airline.airlineName} Airlines
          </p>
        </div>
        <div>
          <p className="text-14">Economy class</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex max-w-800 w-full m-auto justify-between items-center relative z-10">
          <div className="text-center">
            <p className="text-12">Depart</p>
            <p className="text-18 font-semibold mt-2">
              {currentFlight.departTime}
            </p>
            <p className="text-14 text-gray-600">
              {formatDate(currentFlight.departDate)}
            </p>
          </div>
          <div className="flex items-center my-5 lg:my-0">
            <div className="w-15 h-15 rounded-full bg-blue-300"></div>
            <div className="w-15 h-1 border-1 border-blue-400 border-dashed lg:w-30"></div>
            <div className="text-12 px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-14 lg:px-3 text-center">
              {calcDuration(currentFlight.departTime, currentFlight.arriveTime)}
            </div>
            <div className="w-15 h-1 border-1 border-blue-400 border-dashed lg:w-30"></div>
            <div className="w-15 h-15 rounded-full bg-blue-300"></div>
          </div>
          <div className="text-center">
            <p className="text-12">Arrive</p>
            <p className="text-18 font-semibold mt-2">
              {currentFlight.arriveTime}
            </p>
            <p className="text-14 text-gray-600">
              {formatDate(currentFlight.arriveDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

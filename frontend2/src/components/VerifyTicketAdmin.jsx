import { useEffect, useState } from "react";
import { BACKENDURL } from "../Config/Config";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyTicketAdmin = () => {
  const { ticketId } = useParams();

  const [data, setData] = useState({
    passenger: {},
    flightData: {},
  });

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/api/v1/tickets/getSingleFlightForVerification/${ticketId}`)
      .then((response) => {
        const { bookings, ...flightData } = response.data;
        setData({
          passenger: bookings[0],
          flightData,
        });
      })
      .catch((error) => {
        console.error("Error fetching ticket data:", error);
      });
  }, [ticketId]);

  const { passenger, flightData } = data;

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-5">
        <h1 className="text-center my-10 text-4xl font-bold">Verify Ticket</h1>
        <div>
          {/* Traveller Details */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor="firstName" className="block text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.fName || ''}
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="lastName" className="block text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Lastname"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.lName || ''}
                disabled
              />
            </div>
          </div>

          {/* Traveller Details */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor="dob" className="block text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.dob || ''}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="passportNumber" className="block text-sm">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                placeholder="Passport Number"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.passportNumber || ''}
                disabled
              />
            </div>
          </div>

          {/* Traveller Details */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor="country" className="block text-sm">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value="India"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="state" className="block text-sm">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.state || ''}
                disabled
              />
            </div>
          </div>

          {/* Traveller Details */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor="phone" className="block text-sm">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.phoneNumber || ''}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.email || ''}
                disabled
              />
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <label htmlFor="passportSizePhoto" className="block text-sm">
              Passport Size Photo
            </label>
            <img
              src={passenger.passportSizePhoto}
              alt="Passport Size"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 h-[500px]"
            />
          </div>

          <div className="mt-5">
            <p className="mb-2">Booked seat:</p>
            <div className="bg-blue-500 w-[60px] h-[60px] flex justify-center items-center text-white rounded-md">
              {passenger.seat}
            </div>
          </div>

          {/* Flight Details */}
          <h1 className="text-center my-10 text-4xl font-bold">FLIGHT DATA</h1>

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor="fromSource" className="block text-sm">
                From Source
              </label>
              <input
                type="text"
                id="fromSource"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={flightData.from || ''}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="toDestination" className="block text-sm">
                To Destination
              </label>
              <input
                type="text"
                id="toDestination"
                placeholder="Destination"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={flightData.to || ''}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTicketAdmin;

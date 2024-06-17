import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import PassengerDataForm from "./PassengerDataForm";

const TravellerDetail = ({
  setCurrentActiveForm,
  numberOfPassengers,
  formData,
  setFormData,
}) => {
  const handlePassengerDataChange = (passengerNumber, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [`passenger${passengerNumber}`]: {
        ...prevData[`passenger${passengerNumber}`],
        ...data,
      },
    }));
  };

  const requiredFields = [
    { name: "firstName", displayName: "First Name" },
    { name: "lastName", displayName: "Last Name" },
    { name: "country", displayName: "Country" },
    { name: "state", displayName: "State" },
    { name: "phoneNumber", displayName: "Phone Number" },
    { name: "email", displayName: "Email" },
    { name: "dob", displayName: "Date of Birth" },
    { name: "passportNumber", displayName: "Passport Number" },
    { name: "passportSizePhoto", displayName: "Passport Size Photo" },
  ];

  const validatePassengerData = (data) => {
    let isValid = true;

    for (let i = 1; i <= numberOfPassengers; i++) {
      const passengerKey = `passenger${i}`;
      const passengerData = data[passengerKey];
      if (!passengerData) {
        toast.error(`Passenger ${i} data is missing`);
        isValid = false;
        continue;
      }
      for (const field of requiredFields) {
        if (!passengerData[field.name] || passengerData[field.name].trim() === "") {
          toast.error(`Please enter passenger ${i} ${field.displayName}`);
          isValid = false;
          break;
        }
      }
    }

    if (Object.keys(data).length === 0) {
      toast.error("Fields cannot be kept empty, please fill all fields");
      isValid = false;
    }

    if (isValid) {
      setCurrentActiveForm(2);
    }
  };

  const travelerForms = Array.from({ length: numberOfPassengers }, (_, i) => (
    <div key={i + 1}>
      <PassengerDataForm
        passengerNumber={i + 1}
        handlePassengerDataChange={handlePassengerDataChange}
        formData={formData[`passenger${i + 1}`] || {}}
      />
    </div>
  ));

  return (
    <div>
      {travelerForms}
      <div className="flex justify-start items-center gap-2 mt-10">
        <button
          className="border border-blue-300 text-blue-400 px-10 py-2 rounded-full hover:bg-blue-400 duration-300 hover:text-white"
          onClick={() => setCurrentActiveForm(0)}
        >
          Previous
        </button>
        <button
          className="bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300"
          onClick={() => validatePassengerData(formData)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

TravellerDetail.propTypes = {
  setCurrentActiveForm: PropTypes.func.isRequired,
  numberOfPassengers: PropTypes.number.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default TravellerDetail;

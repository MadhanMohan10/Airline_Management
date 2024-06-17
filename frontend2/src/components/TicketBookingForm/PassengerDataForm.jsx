import React from "react";
import PropTypes from "prop-types";
import { countries } from "../../assets/data/Countries";

const PassengerDataForm = ({ passengerNumber, handlePassengerDataChange, formData }) => {
  const handleChange = (e, field) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileData = event.target.result;
          handlePassengerDataChange(passengerNumber, { [field]: fileData });
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { value } = e.target;
      handlePassengerDataChange(passengerNumber, { [field]: value });
    }
  };

  return (
    <div className="my-5 bg-white border-1 border-gray-200 rounded-30 p-5">
      <div>
        <p className="mb-5 text-4xl">Traveller Details - Passenger {passengerNumber}</p>
      </div>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`firstName-${passengerNumber}`} className="block text-sm">First Name</label>
            <input
              type="text"
              id={`firstName-${passengerNumber}`}
              placeholder="First Name"
              value={formData.firstName}
              className="input-field"
              onChange={(e) => handleChange(e, "firstName")}
            />
          </div>
          <div>
            <label htmlFor={`lastName-${passengerNumber}`} className="block text-sm">Last Name</label>
            <input
              type="text"
              id={`lastName-${passengerNumber}`}
              placeholder="Last Name"
              value={formData.lastName}
              className="input-field"
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`dob-${passengerNumber}`} className="block text-sm">Date of Birth</label>
            <input
              type="date"
              id={`dob-${passengerNumber}`}
              value={formData.dob}
              className="input-field"
              onChange={(e) => handleChange(e, "dob")}
            />
          </div>
          <div>
            <label htmlFor={`passportNumber-${passengerNumber}`} className="block text-sm">Passport Number</label>
            <input
              type="text"
              id={`passportNumber-${passengerNumber}`}
              placeholder="Passport Number"
              value={formData.passportNumber}
              className="input-field"
              onChange={(e) => handleChange(e, "passportNumber")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`country-${passengerNumber}`} className="block text-sm">Country</label>
            <select
              id={`country-${passengerNumber}`}
              value={formData.country}
              className="input-field"
              onChange={(e) => handleChange(e, "country")}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`state-${passengerNumber}`} className="block text-sm">State</label>
            <input
              type="text"
              id={`state-${passengerNumber}`}
              placeholder="State"
              value={formData.state}
              className="input-field"
              onChange={(e) => handleChange(e, "state")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`phoneNumber-${passengerNumber}`} className="block text-sm">Phone Number</label>
            <input
              type="tel"
              id={`phoneNumber-${passengerNumber}`}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              className="input-field"
              onChange={(e) => handleChange(e, "phoneNumber")}
            />
          </div>
          <div>
            <label htmlFor={`email-${passengerNumber}`} className="block text-sm">Email</label>
            <input
              type="email"
              id={`email-${passengerNumber}`}
              placeholder="Email"
              value={formData.email}
              className="input-field"
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor={`passportSizePhoto-${passengerNumber}`} className="block text-sm">Passport Size Photo</label>
            <input
              type="file"
              id={`passportSizePhoto-${passengerNumber}`}
              accept=".jpg,.png"
              className="input-field"
              onChange={(e) => handleChange(e, "passportSizePhoto")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PassengerDataForm.propTypes = {
  passengerNumber: PropTypes.number.isRequired,
  handlePassengerDataChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default PassengerDataForm;

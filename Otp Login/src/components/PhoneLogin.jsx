import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Form");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit =(otp) =>{
console.log("login successfull",otp)
  }

  return (
    <div className="input">

      {
        !showOtpInput ?  <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
        <button type="submit">Submit</button>
      </form> : <div>
        <p>Enter otp sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
      </div>
      }
     
    </div>
  );
};

export default PhoneLogin;

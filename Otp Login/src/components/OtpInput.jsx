import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (i, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[i] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) {
      onOtpSubmit(combineOtp);
    }

    if (value && i < length - 1 && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(0, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;

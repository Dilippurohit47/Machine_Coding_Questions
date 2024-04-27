import React, { useEffect, useState } from "react";
import "../App.css";

const Number = ({ number = 30 }) => {
  const generateRandomNumbers = (n) => {
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  };

  const [checked, setChecked] = useState([0]);
  const [wrongClick, setWrongClicked] = useState(0);

  const check = (num) => {
    if (num === checked[checked.length - 1] + 1) {
      setChecked((prev) => [...prev, num]);
    } else {
      setWrongClicked((prev) => prev + 1);
    }
  };

  const [randomNumbers, setRandomNumbers] = useState([]);
  useEffect(() => {
    if (checked.length == 1) {
      setRandomNumbers(generateRandomNumbers(number));
    }
  }, [checked]);

  useEffect(()=>{
    if(checked[checked.length - 1] === number){
alert("You won")
        setChecked([0])
    }
  },[checked])
  console.log(checked);
  console.log(checked[checked.length - 1]);
  return (
    <div>
      <h1> Wrong Clicked : {wrongClick}</h1>
      <div className="boxes">
        {randomNumbers.map((num, i) => (
          <p
            key={i}
            className={` box ${checked.includes(num) ? "active" : ""}`}
            onClick={() => check(num)}
          >
            {num}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Number;

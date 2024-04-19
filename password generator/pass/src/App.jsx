import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [length, setlength] = useState(8);
  const [pass, setpass] = useState("");
  const [number, setnumber] = useState(false);
  const [special, setspecial] = useState(false);
  const [uppercase, setUppercase] = useState(false);


  const [show, setShow] = useState(false);
  const [copiedPass, setCopiedPass] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMONOPQRSTUVWXYZ";

   str = str.toLowerCase();

   if(uppercase) str += str.toUpperCase()
    if (number) str += "0123456789";
    if (special) str += "_@-";

    console.log(str)
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      console.log(char)
      pass += str.charAt(char);
    }
    setpass(pass);
  }, [length, number, special , uppercase]);

  const copy = () => {
    setCopiedPass(pass);
    window.navigator.clipboard.writeText(pass);
  };

  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center ">
      <div className=" bg-[#25232B]  text-white px-[5vw] py-[5vh]  h-1/2 w-1/2">
      <h1 className="text-[2rem] font-medium text-center mb-3">Password Generator</h1>

        <div>
          <input
            type="text"
            className="border-2 py-2 w-1/2  text-black  px-2 rounded-[20px] border-black"
            readOnly
            value={pass}
          />
          <button
            className="bg-[#298A8C] text-[1.2rem] hover:bg-[#245b5c] py-1  text-center rounded px-4 ml-2"
            onClick={() => {
              copy(), setShow(true);
            }}
          >
            copy
          </button>
        </div>

        <div className="mt-4 ml-3 flex gap-1" >
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
          <label htmlFor="">{length}</label>

          <input
            type="checkbox"
            name=""
            id=""
            className="ml-4"
            onChange={(e) => setnumber((prev) => !prev)}
          />
          <label htmlFor="">Number</label>

          <input
            type="checkbox"
            name=""
            id=""
            className="ml-4"
            onChange={(e) => setspecial((prev) => !prev)}
          />
          <label htmlFor="">special</label>

          <input
            type="checkbox"
            name=""
            id=""
            className="ml-4"
            onChange={(e) => setUppercase((prev) => !prev)}
          />
          <label htmlFor="">Uppercase</label>

        </div>

<div className="mt-3 ml-3">
{show && <p>copied Password : {copiedPass}</p>}

</div>
      </div>
    </div>
  );
}

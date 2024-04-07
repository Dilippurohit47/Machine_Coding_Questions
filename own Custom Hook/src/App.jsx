import {  useState } from "react";
import useCustomMemo from "./hooks/useCustomMemo";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squarevalue = () => {
    console.log("expensive function");
    return counter * counter;
  };

  const memoSquare = useCustomMemo(squarevalue,[counter]) 
  return (
    <div>
      <h1>Counter 1 : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2> square counter: {memoSquare}</h2>
      <h2>Counter 2 :{counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment</button>
    </div>
  );
}

export default App;

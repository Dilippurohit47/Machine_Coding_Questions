import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./Components/Notes";
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hide the body in garden at 3am",
    },
    {
      id: 2,
      text: "Devil appears naked in the corner of the  room",
    },
    {
      id: 3,
      text: "Dog got 5 legs so I cut three",
    },
  ]);
  const [input, setInput] = useState("");

  const AddNote = (e) => {
    const newId = notes.length + 1;

    const newNote = {
      id: newId,
      text: input,
    };
    setNotes([...notes, newNote]);
    setInput("");
   
  };

 

  return (
    <div>
      <div className="input">
        <input
        value={input}
          type="text"
          placeholder="Enter your note here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => AddNote()}>Add</button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}
export default App;

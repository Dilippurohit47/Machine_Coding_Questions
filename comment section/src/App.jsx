import { useState } from "react";
import "./App.css";
import AllComments from "./components/AllComments";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "hi you are dark",
      reply: [],
    },
  ]);

  const [input, setInput] = useState("");

  const addComment = () => {
    setComments((prev) => [...prev, { id: prev.length + 1, comment: input ,reply:[]}]);
    setInput("");
  };
  return (
    <div className="main">
      <AllComments comments={comments} />
      <div>
        <textarea
          value={input}
          className="input"
          type="text"
          placeholder="write here"
          onChange={(e) => setInput(e.target.value)}
        />
        {input && <button onClick={addComment}>Add</button>}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    if (value.trim() !== "") {
      onAddTask(value);
      setValue("");
    }
  };

  return (
    <div className="input_box">
      <input
        type="text"
        placeholder="Add new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
const App = () => {
  const [task, setTask] = useState([]);

  const Addtask = (tasks) => {
    setTask([...task, tasks]);
  };



  const DelTask = (index) => {
    const newTask = task;
    newTask.splice(index, 1);
    setTask([...newTask]);
  };

  console.log(task);
  return (
    <div className="main">
      <div className="Addtask">
        <h1>Todo List</h1>
        <AddTask onAddTask={Addtask} />
      </div>
      <TodoList task={task} DelTask={DelTask} />
    </div>
  );
};

export default App;

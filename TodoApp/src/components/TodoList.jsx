import React from "react";

const TodoList = ({ task,DelTask }) => {
  const del = (index) => {
    DelTask(index)
  };
  return (
    <div className="tasks">
      {task.length <=0 ? <p>All tasks completed!</p>: task.map((task, index) => (
        <div className="task" key={index}>
          {index+1}:{task} <button onClick={()=>del(index)}>del</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

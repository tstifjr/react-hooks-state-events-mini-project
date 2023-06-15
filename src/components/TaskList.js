import React from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const handleDelete = (e) => {
    const parent = e.target.parentNode;
    // while (parent.hasChildNodes())
    // parent.removeChild(parent.firstChild)
    parent.remove();
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => <Task text={task.text} category={task.category} key={index} handleDelete={handleDelete}/>)}
    </div>

  );
}

export default TaskList;

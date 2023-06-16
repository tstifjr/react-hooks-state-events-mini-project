import React from "react";
import Task from "./Task";

function TaskList({tasks, filterTasks=()=>{return true}, handleDelete}) {

  const renderedTasks = tasks.map((task, index) => <Task key={index} text={task.text} category={task.category} id={index}  handleDelete={handleDelete}/>)

  const updatedTasks = renderedTasks.filter(filterTasks)
  return (
    <div className="tasks">
      {updatedTasks}
    </div>

  );
}

export default TaskList;

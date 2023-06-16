import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectState, setSelectBtn] = useState("")
  const [tasks, setTasks] = useState(TASKS)

  const handleSelectState = (e) => setSelectBtn(e.target.value)
  function onTaskFormSubmit(taskObj) {
    setTasks([...tasks, taskObj])
  }

  //delete functionality
  const copyTasks = [...tasks];
  const handleDelete = (e) => {
    const parent = e.target.parentNode;
    // while (parent.hasChildNodes())
    // parent.removeChild(parent.firstChild)
    //parent.remove();
    copyTasks.splice(parent.id, 1);
    setTasks(copyTasks)
  }

  //filter funtionality
  const filterTasks = (task) => {
    if (selectState === "All" || selectState === "") return true;
    else return (task.props.category === selectState)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelectState={handleSelectState} selectState={selectState} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} filterTasks={filterTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

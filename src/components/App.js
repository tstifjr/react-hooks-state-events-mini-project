import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectBtn, setSelectBtn] = useState("")
  const [tasks, setTasks] = useState(TASKS)

  function filterTasks(task) {
    if (selectBtn === "All" || selectBtn === "") return true;
    else return (task.category === selectBtn)
  }

  const handleSelectState = (e) => setSelectBtn(e.target.value)
  
  function onTaskFormSubmit(taskObj){
    setTasks([...tasks, taskObj])
  }

  const updatedTasks = tasks.filter(filterTasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelectState={handleSelectState} state={selectBtn}/> 
      {/*   /> */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={updatedTasks} />
    </div>
  );
}

export default App;

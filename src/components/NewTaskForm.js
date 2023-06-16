import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({text : "", category : "Code"})

  function handleChange(e){
    if(e.target.name === "text"){
     setNewTask({text : e.target.value, category : newTask.category})
    }
    if(e.target.name === "category"){
     setNewTask({text : newTask.text, category : e.target.value})
    }
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const taskObj = {...newTask}
    onTaskFormSubmit(taskObj);
   setNewTask({text : "", category : taskObj.category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories.slice(1).map((category) =><option value={category} key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

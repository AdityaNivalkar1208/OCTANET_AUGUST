import React, { useState } from "react";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (taskName && dueDate) {
      const newTask = {
        name: taskName,
        priority: priority,
        dueDate: dueDate
      };

      setTasks([...tasks, newTask]);
      setTaskName("");
      setPriority("low");
      setDueDate("");
    }
  };

  return (
    <>

      <div className="app-container">

        <div className="head-container">
          <h1 className="todo-app">Todo List</h1>
        </div>

        <div className="task-input">

          <div className="task-1">
            <input
            type="text"
            value={taskName}
            onChange={handleTaskNameChange}
            placeholder="Task name......"
            className="input"
            />
          </div>

          <div className="task-2">
            <select value={priority} onChange={handlePriorityChange} className="input-select">
            <option value="low" className="selected">Low</option>
            <option value="medium" className="selected">Medium</option>
            <option value="high" className="selected">High</option>
          </select>

          <input type="date" value={dueDate} onChange={handleDueDateChange} className="input-task" />
          <button onClick={addTask} className="btn">Add Task</button>
          </div>

        </div>

      <div className="task-content">

        <h2 className="task-title">Tasks</h2>
        
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="list-item">
              <p className="task-name">{task.name}</p>
              <div className="boxes">
                <p className="task-priority">Priority: {task.priority}</p>
                <p className="task-date">Due:{" "}{task.dueDate}</p>
                <AiOutlineClose onClick={() => handleDeleteTask(index)} className="task-icon"></AiOutlineClose>
              </div>
            </li>
          ))}
        </ul>

      </div>

      </div>

    </>
  );
}

export default App;


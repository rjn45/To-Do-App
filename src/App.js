import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") {
      alert("Please enter your tas k");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");

    alert("Task added successfull");
  }; 

  const handleComplete = (id) => {
    setTodos(
      todos.map((t) => 
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }; 

  return (
    <div className="todo-container">
      <h1>To-Do App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="list-section">
        {todos.map((item) => (
          <div
            key={item.id}
            className={`todo-item ${item.completed ? "done" : ""}`}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleComplete(item.id)}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

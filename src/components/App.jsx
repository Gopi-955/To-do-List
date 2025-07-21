import React, { useState } from "react";


const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  function addTask() {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <h1>TO-DO List</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
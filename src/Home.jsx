import React, { useState } from 'react';
import Create from './Create';
import './App.css';

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    // Apply class for container styling
    <div className="home-container">
      {/* Apply class for heading styling */}
      <h2 className="home-heading">To do list</h2>

      <div className="create-container">
        <Create />
      </div>

      {
        todos.length === 0
          ? <p>No todos yet.</p>
          : (
            <>
              {/* Apply class for list styling */}
              <ul className="todo-list">
                {todos.map((todo, index) => (
                  // Apply class for item styling
                  <li key={index} className="todo-item">{todo}</li>
                ))}
              </ul>
            </>
          )
      }
    </div>
  );
}

export default Home;

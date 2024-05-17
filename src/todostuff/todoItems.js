import React, { useState } from 'react';
import './todoItems.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, text, completed } = todo;
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleDelete = () => {
    setIsFadingOut(true);
    setTimeout(() => deleteTodo(id), 500); 
  };

  return (
    <div className={`todo-Item ${isFadingOut ? 'fade-out' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;

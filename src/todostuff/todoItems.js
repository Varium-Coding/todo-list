import React from 'react';
import './todoItems.css'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, text, completed } = todo;

  return (
    <div className='todo-Item'>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

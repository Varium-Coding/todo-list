import React, { useState } from 'react';
import TodoList from './todostuff/todoList';
import TodoItem from './todostuff/todoItems';
import './App.css'
import 'C:/Users/Mglve/OneDrive/Desktop/GCE/TodoApp/todo-list/src/App.css'
const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div class='Content'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;

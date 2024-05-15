import React from 'react';
import TodoItem from './todoItems';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

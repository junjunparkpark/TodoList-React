import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = (props) => {
  return (
    <div>
      { props.todos.map(todo => <TodoListItem currentTodo={todo} handleClick={props.handleClick}/>) }
    </div>
  );
}

export default TodoList
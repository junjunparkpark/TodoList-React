import React from 'react';

const TodoListItem = (props) => {
  return (
    <div>
      <h3>{props.currentTodo.description}</h3>
      <button onClick={function(){ props.handleClick(props.currentTodo._id) } }>Complete</button>
    </div>
  );
};

export default TodoListItem;
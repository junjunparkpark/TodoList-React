import React from 'react';

class Todo extends React.Component {


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.props.handleSubmit} >
          <input onChange={this.props.handleValueChange}/>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Todo;
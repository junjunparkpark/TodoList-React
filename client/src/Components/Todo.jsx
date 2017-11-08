import React from 'react';

class Todo extends React.Component {


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.props.handleSubmit} >
          <input onChange={function(event) { this.props.handleValueChange(event) }} />

          {
            {/* window.on('change', function(event) {
              this.props.handleValueChange(event)
            }) */}
          }
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Todo;
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Components/Todo.jsx'
import TodoList from './Components/TodoList.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodoDescription: '',
      todos: []
    };
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  handleValueChange(e) {
    this.setState({
      currentTodoDescription: e.target.value
    });
  }

  handleSubmit(e) {
    // POST request to the server which will then store the data in our MongoDB
    e.preventDefault();
    console.log('Handle submit was invoked!!!')
    $.ajax({
      type: "POST",
      url: '/api/todo',
      data: this.state,
      success: (data) => {
        console.log(data);
        this.fetchAllTodos();
      },
      failure: (err) => {
        console.log(err)
      }
    });
  }

  handleCompleteButtonClick(id) {
    $.ajax({
      type: "DELETE",
      url: `/api/todo/${id}`,
      success: (data) => {
        console.log(data);
        this.fetchAllTodos();
      },
      failure: (err) => {
        console.log(err)
      }
    });
  }

  fetchAllTodos() {
    $.ajax({
      type: "GET",
      url: "/api/todo",
      success: (data) => {
        console.log(data);
        this.setState({
          todos: data
        })
      },
      failure: (err) => {
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div>
        <Todo handleSubmit={this.handleSubmit.bind(this)} handleValueChange={this.handleValueChange.bind(this)}/>
        <TodoList todos={this.state.todos} handleClick={this.handleCompleteButtonClick.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




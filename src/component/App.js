import React from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDeleteOneItem = this.handleDeleteOneItem.bind(this)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)

    this.state = { 
      todos: [],
      nextId: 1,
    };
  }

  handleSubmit(todo) {
    this.setState({
      todos: [...this.state.todos,
      {id: this.state.nextId, content: todo, isDone: false},
      ],
      nextId: this.state.nextId + 1,
    })
  }

  handleCheck(index) {
    const todo = this.state.todos[index]
    todo.isDone = !todo.isDone
    this.setState({todos: this.state.todos})
  }

  handleEdit(index, item) {
    const todos = [...this.state.todos]
    const newItem = {...todos[index], content: item}
    todos[index] = newItem
    this.setState({todos})
  }

  handleDeleteOneItem = (index) => {
    const newArr = [...this.state.todos]
    newArr.splice(index, 1)
    this.setState({todos: newArr})
  }

  handleDeleteAll() {
    this.setState({
      todos: [],
      nextId: 1,
    })
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Main
            todos={this.state.todos}
            onSubmit={this.handleSubmit}
            onCheck={this.handleCheck}
            onEdit={this.handleEdit}
            onDelete={this.handleDeleteOneItem}
            onDeleteAll={this.handleDeleteAll} />
        </div>
      </Router>
    )
  }

}

export default App;

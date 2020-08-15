import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {tasks: ['task 1', 'task 2', 'task 3', 'task 4']};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(task) {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  handleDelete() {
    this.setState({tasks: []})
  }

  render() {
    return (
      <Router>
        <div>
          <Header tasks={this.state.tasks} onSubmit={this.handleSubmit} onDelete={this.handleDelete} />
        </div>
      </Router>
    )
  }

}

export default App;

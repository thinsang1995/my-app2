import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.tasks === '') return
    this.props.onSubmit(this.state.tasks)
    this.setState({tasks: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create your to do list</h2>
        <input
          value={this.state.tasks}
          placeholder="Enter Item"
          onChange={(e) => this.setState({tasks: e.target.value})} />
        <button className="button">Submit</button>
      </form>
    )
  }
}

export default Todo;
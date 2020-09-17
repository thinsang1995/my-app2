import React from 'react';
import { withRouter } from 'react-router-dom';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.content === '') return
    this.props.onSubmit(this.state.content)
    this.setState({content: ''})
    this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="card-header">Create new item</h2>
        <input
          className="add-input"
          value={this.state.content}
          placeholder="Enter Item"
          onChange={(e) => this.setState({content: e.target.value})} />
        <button className="add-button">Submit</button>
      </form>
    )
  }
}

export default withRouter(AddItem);
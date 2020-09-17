import React from 'react';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      content: `${this.props.content}`
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleEdit() {
    this.setState({editing: true})
  }

  handleSave(id, content) {
    this.setState({
      editing: false,
      content: `${this.state.content}`
    })
    this.props.onEdit(id, content)
  }

  render() {
    if(this.state.editing) {
      return(
        <div className="list-item">
          <input
          className="save-input"
          value={this.state.content}
          placeholder="Enter Item"
          onChange={(e) => this.setState({content: e.target.value})} />
          <button className="save-button" onClick={() => this.handleSave(this.props.id, this.state.content)}>Save</button>
      </div>
      )
    }
    
    return (
      <div className="list-item">
        <span className='icon' onClick={() => this.props.onCheck(this.props.id)} />
        <div className="text" style={{textDecoration: this.props.isDone ? 'line-through' : '' }} >
          {this.props.content}
        </div>
        <button className="delete-button" onClick={() => this.props.onDelete(this.props.id)}>X</button>
        <button className="edit-button" onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
}

export default Items;
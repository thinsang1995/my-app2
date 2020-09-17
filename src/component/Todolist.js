import React from 'react';
import Items from './Items'

function Todolist(props) {

  const todoItems = props.todos.map((todo, index) => {
    return <Items 
      content={todo.content}
      key={index}
      id={index} 
      isDone={todo.isDone}
      onCheck={props.onCheck}
      onEdit={props.onEdit}
      onDelete={props.onDelete} />
  })

  return (
    <div>
      <div className="list-wrapper">
        {todoItems}
      </div>
      <button className="delete-all-button" onClick={props.onDeleteAll}>Delete All</button>
    </div>
  )
}

export default Todolist;
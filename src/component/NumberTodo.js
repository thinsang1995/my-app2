import React from 'react';

function NumberTodo(props) {

  const numberTodo= (props.todos.length) - (props.todos.filter(item => item.isDone).length)
  if(numberTodo !== 0) {
    return <h2 className="card-header">
      You have {numberTodo} todos!
      </h2>
  }

  return <h2 className="card-header">
    You have nothing todo!
    </h2>
}

export default NumberTodo;
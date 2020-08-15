import React from 'react';

function DeleteList(props) {
  return (
    <div>
      <h3>Do you want to delete all todo list?</h3>
      <button onClick={() => props.onDelete()}>Yes</button>
      {' '}
      <button>No</button>
    </div>
  )
}

export default DeleteList;
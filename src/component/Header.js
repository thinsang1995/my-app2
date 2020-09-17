import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-div">
      <div className="list-view">
        <Link to="/">My Todolist</Link>
      </div>
      <div className="add-view">
        <Link to="/add-new-todo">Add new Todo</Link>
      </div>
    </div>
  );
}

export default Header;
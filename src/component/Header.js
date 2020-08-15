import React from 'react';
import Todo from './Todo';
import Todolist from './Todolist';
import DeleteList from './DeleteList';
import { Link, Switch, Route } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">To Do</Link>
          </li>
          <li>
            <Link to="/todo-list">Todo List</Link>
          </li>
          <li>
            <Link to="/delete-list">Delete List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Todo onSubmit={props.onSubmit} />
        </Route>
        <Route path="/todo-list">
          <Todolist tasks={props.tasks} />
        </Route>
        <Route path="/delete-list">
          <DeleteList onDelete={props.onDelete} />
        </Route>
      </Switch>
    </header>

  );
}

export default Header;
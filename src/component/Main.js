import React from 'react';
import AddItem from './AddItem';
import NumberTodo from './NumberTodo';
import Todolist from './Todolist';
import { Switch, Route } from 'react-router-dom';

function Main(props) {
  return (
    <div className="todolist">
      <Switch>
        <Route exact path="/">
          <NumberTodo todos={props.todos} />
          <Todolist
           todos={props.todos}
           onCheck={props.onCheck}
           onEdit={props.onEdit}
           onDelete={props.onDelete}
           onDeleteAll={props.onDeleteAll} />
        </Route>
        <Route path="/add-new-todo">
          <AddItem
           className="add-todo"
           onSubmit={props.onSubmit} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
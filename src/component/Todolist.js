import React from 'react';

function Todolist(props) {
  const todos = props.tasks.map((todo, index) => {
    return(
      <li key={index}>
        {todo}
      </li>
    )
  });
  return (
    <div>
      <ul>
        {todos}
      </ul>
    </div>
  );
}

// function List(props) {
//   const todos = props.tasks.map((todo, index) => {
//     return(
//       <li key={index}>
//         {todo}
//       </li>
//     )
//   });
//   return (
//     <ul>
//       {todos}
//     </ul>
//   );
// }

export default Todolist;
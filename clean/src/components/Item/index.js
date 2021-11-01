// import React from 'react';
import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const Todo = () => {
  const [toDos, setToDos] = useState([
    { id: 1, name: "sleep" },
    { id: 2, name: "Walk" },
  ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: toDos.length + 1,
      name: e.target.task.value,
    };

    setToDos([...toDos, todo]);
    e.target.task.value = ""; //// تفضي اللسته
  };

const handleDelete = (id) => {
    setToDos( toDos.filter((toDo) => toDo.id !== id));
}
const handleUpdate = (id, e) => {
console.log(id);
setToDos( toDos.splice(2,1," e.target.task.value"));
}

return (
    
  <div className="todo">
    <form onSubmit={handleSubmit}>
      <input className="input" type="text" name="task" />
      <button className="addBtn">Add Task </button>
    </form>
    <ul className="todos">
      {toDos.map((todo, i) =>{
          return (
            <TodoItem todo={todo} key={i} handleDelete={handleDelete} handleUpdate={handleUpdate}
            />
          )
      } )} 
    </ul>
  </div>
);
 
      }

export default Todo;

import React from 'react';

// import "./style.css";

const TodoItem = (props) => {
    return ( 
        <>
        {props.todo ? <li className="list">
            <h3>{props.todo.name}</h3>
            <h3 className ='todoClose' onClick={()=> props.handleDelete(props.todo.id)}>  X </h3>
            <h3 className ='todoUp' onClick={()=> props.handleUpdate(props.todo.id)}>  Update </h3>
            </li> :""}
        </>
        ); 
} 
export default TodoItem;
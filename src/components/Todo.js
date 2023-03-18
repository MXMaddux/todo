import React from 'react'
import { Button } from 'react-bootstrap';
import {AiFillCheckCircle, AiFillCloseCircle, AiFillEdit} from "react-icons/ai"

const Todo = ({todo, index, completeTodo, deleteTodo}) => {
  return (
      <div className="todo-section" >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
        
          <Button className='' variant="outline-success" onClick={() => completeTodo(index)}><AiFillCheckCircle style={{fontSize: 17, color: "hsl(125, 67%, 44%)"}}/></Button>{' '}
          <Button variant="outline-danger" onClick={() => deleteTodo(index)}><AiFillCloseCircle style={{fontSize: 17, color: "hsl(360, 67%, 44%)"}} /></Button>
        </div>
      </div>
    );
  };


export default Todo

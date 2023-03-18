import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import {  Card } from "react-bootstrap";
import "./index.css";
import data from "./data.json";

const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
};

const App = () => {
  const [todos, setTodos] = useState(getLocalStorage());
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    setIsDone(!isDone);
    setTodos(newTodos);
  };

//   const editTodo = (text) => {
//     setIsDone(!isDone);
//   };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <div className="container">
        <h1 className="heading">To Do List </h1>
        <TodoForm createTodo={createTodo} onSubmit={createTodo} />
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <Card className="todo-container">
                  <Card.Body>
                    <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                    />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

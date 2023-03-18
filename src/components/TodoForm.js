import React from 'react'
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({createTodo}) => {
    const [value, setValue] = React.useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if (!value) return;
    createTodo(value);
    setValue("");
  };
  return (
        <Form onSubmit={handleSubmit} className="todo-section">
        <div className="form-group">
          <Form.Label><b>Add Todo</b></Form.Label>
          <Form.Control type="text" className="input" value={value} onChange={e =>setValue(e.target.value)} placeholder="Add new todo" />
        </div>
        <div style={{marginTop:"10px"}}>
        <Button variant="primary mb-3" type="submit">
          Add
        </Button>
        </div>
      </Form>
      );
    }


export default TodoForm

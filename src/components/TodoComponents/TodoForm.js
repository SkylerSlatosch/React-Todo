import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input className = "inputB"
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className= "buttonB" onClick={props.handleAddTodo}>Add Todo</button>
      <button className= "buttonB" onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
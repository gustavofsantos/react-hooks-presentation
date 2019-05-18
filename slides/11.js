import React, { useState, useCallback } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = useCallback(ev => {
    setTodo(ev.target.value);
  });

  const addTodo = useCallback(
    ev => {
      ev.preventDefault();
      setTodos([...todos, todo]);
      setTodo("");
    },
    [todo]
  );

  const removeTodo = useCallback(
    toRemove => () => {
      setTodos(todos.filter(todo => todo !== toRemove));
    },
    [todos]
  );

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={todo} onChange={handleChangeTodo} />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <p key={`${todo}_${index}`} onClick={removeTodo(todo)}>
            {todo}
          </p>
        ))}
      </ul>
    </div>
  );
}

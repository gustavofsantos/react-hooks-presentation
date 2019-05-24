import React, { useState, useCallback } from "react";
import useTodos from "./13";

/**
 *
 * Exemplo: Lista de afazeres
 */
export default function TodoList() {
  const [todo, setTodo] = useState("");

  // useTodos custom hook
  const { todos, addTodo, removeTodo } = useTodos();

  const handleChangeTodo = useCallback(ev => {
    setTodo(ev.target.value);
  }, []);

  return (
    <div>
      <form onSubmit={() => addTodo(todo)}>
        <input value={todo} onChange={handleChangeTodo} />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={`${todo}_${index}`}>
            <button
              type="button"
              className="todo-item"
              onClick={() => removeTodo(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

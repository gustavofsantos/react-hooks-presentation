import React, { useState, useCallback } from "react";
import useTodos from "./13";

/**
 *
 * Exemplo: Lista de afazeres
 */
export default function TodoList() {
  // ☝ useState insere uma lógica de gerencia de estado
  // de forma independente
  const [todo, setTodo] = useState("");
  const { todos, addTodo, removeTodo } = useTodos();

  const handleChangeTodo = useCallback(ev => {
    setTodo(ev.target.value);
  });

  const removeTodo = useCallback(
    toRemove => () => {
      setTodos(todos.filter(item => item !== toRemove));
    },
    [todos]
  );

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

import React, { useState, useCallback } from 'react';

/**
 *
 * Exemplo: Lista de afazeres
 */
export default function TodoList() {
  // ☝ useState insere uma lógica de gerencia de estado
  // de forma independente
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = useCallback((ev) => {
    setTodo(ev.target.value);
  }, []);

  const addTodo = useCallback(
    (ev) => {
      ev.preventDefault();
      setTodos([...todos, todo]);
      setTodo('');
    },
    [todo],
  );

  const removeTodo = useCallback(
    toRemove => () => {
      setTodos(todos.filter(item => item !== toRemove));
    },
    [todos],
  );

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={todo} onChange={handleChangeTodo} />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={`${todo}_${index}`}>
            <button
              type="button"
              className="todo-item"
              onClick={removeTodo(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

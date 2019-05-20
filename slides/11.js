import React, { useState, useEffect, useCallback } from 'react';

const TODOS_STORAGE_KEY = 'TODO_EXAMPLE_KEY';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = useCallback((ev) => {
    setTodo(ev.target.value);
  });

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

  useEffect(() => {
    const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

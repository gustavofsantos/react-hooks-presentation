import { useState, useCallback } from 'react';

/**
 *
 * @param {object?} props useTodo Custom Hook Properties
 * @param {string[]?} props.INITIAL_STATE Todos initial state;
 */
export default function useTodos(props = {}) {
  const [todos, setTodos] = useState(props.INITIAL_STATE || []);

  const addTodo = useCallback((todo) => {
    setTodos([...todos, todo]);
  }, [todos]);

  const removeTodo = useCallback((todo) => {
    setTodos(todos.filter(item => item !== todo));
  }, [todos]);

  return { todos, addTodo, removeTodo };
}

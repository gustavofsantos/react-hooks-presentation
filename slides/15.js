import React, { useState, useCallback } from "react";
import useTodos from "./13";

/**
 *
 * Exemplo: Lista de afazeres
 */
export default function TodoList() {
  const { todos, addTodo, removeTodo } = useTodos();

  return (
    <div>
      <CreateTodo onCreate={addTodo} />
      <ListTodos todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

/**
 *
 * @param {object} props
 * @param {function} props.onCreate
 */
function CreateTodo(props) {
  const [todo, setTodo] = useState("");

  const handleCreate = useCallback(
    ev => {
      ev.preventDefault();
      if (props.onCreate) {
        props.onCreate(todo);
      }
      setTodo("");
    },
    [todo]
  );

  const handleChange = useCallback(
    ev => {
      setTodo(ev.target.value);
    },
    [todo]
  );

  return (
    <form onSubmit={handleCreate}>
      <input value={todo} onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  );
}

function ListTodos(props) {
  const { todos, removeTodo } = props;

  return (
    <ul>
      {todos.map((item, index) => (
        <li key={`${item}_${index}`}>
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
  );
}

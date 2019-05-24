import React, { useReducer, useCallback } from "react";

export default function Formulario() {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);

  const handleSubmit = useCallback(
    ev => {
      ev.preventDefault();
      console.log("submit: ", state);
    },
    [state]
  );

  const handleReset = useCallback(() => {
    dispatch(actionReset());
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.firstName}
        placeholder="Primeiro nome"
        type="text"
        title="Primeiro nome"
        onChange={ev => dispatch(actionSetFirstName(ev.target.value))}
      />
      <input
        value={state.lastName}
        placeholder="Último nome"
        type="text"
        title="Último nome"
        onChange={ev => dispatch(actionSetLastName(ev.target.value))}
      />
      <input
        value={state.email}
        placeholder="E-mail"
        type="email"
        title="E-mail"
        onChange={ev => dispatch(actionSetEmail(ev.target.value))}
      />
      <input
        value={state.isHuman}
        title="É humano?"
        type="checkbox"
        onChange={() => dispatch(toggleIsHuman())}
      />
      <button type="submit">submit</button>
      <br />
      <button onClick={handleReset}>reset</button>
    </form>
  );
}

const FORM_INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  isHuman: false
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return Object.assign({}, state, { firstName: action.payload });
    case "SET_LAST_NAME":
      return Object.assign({}, state, { lastName: action.payload });
    case "SET_EMAIL":
      return Object.assign({}, state, { email: action.payload });
    case "TOGGLE_IS_HUMAN":
      return Object.assign({}, state, { isHuman: !state.isHuman });
    case "RESET":
      return FORM_INITIAL_STATE;
    default:
      return state;
  }
}

function actionSetFirstName(payload) {
  return {
    type: "SET_FIRST_NAME",
    payload
  };
}
function actionSetLastName(payload) {
  return {
    type: "SET_LAST_NAME",
    payload
  };
}
function actionSetEmail(payload) {
  return {
    type: "SET_EMAIL",
    payload
  };
}
function toggleIsHuman() {
  return {
    type: "TOGGLE_IS_HUMAN"
  };
}
function actionReset() {
  return {
    type: "RESET"
  };
}

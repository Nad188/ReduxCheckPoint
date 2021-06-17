import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../JS/Action/Action";

const Form = () => {
  const [addURTodo, setAddNewTodo] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    let newTodo = {
      text: addURTodo,
      id: Math.random(),
      isDone: false,
    };
    dispatch(addNewTodo(newTodo));
    setAddNewTodo("");
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={addURTodo}
        onChange={(e) => setAddNewTodo(e.target.value)}
      />
      <button className="button-add" onClick={(e) => add(e)}>
        Add
      </button>
    </form>
  );
};

export default Form;

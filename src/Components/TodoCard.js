import React from "react";
import { MdDoneAll } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { isDoneoRNotTtodo, removeTodo } from "../JS/Action/Action";

const TodoCard = ({ singleTodo }) => {
  const dispatch = useDispatch();

  return (
    <div className="list-Items">
      <li className="list-Item">
        <span
          className="list"
          style={{ textDecoration: singleTodo.isDone ? "line-through" : null }}
        >
          {singleTodo.text}
        </span>
        <Edit singleTodo={singleTodo} className="button-Complite task-button" />
        <div>
          <button
            onClick={() => dispatch(isDoneoRNotTtodo(singleTodo.id))}
            className="button-Complite task-button"
          >
            <MdDoneAll />
          </button>
          <button
            className="button-Remove task-button"
            onClick={() => dispatch(removeTodo(singleTodo.id))}
          >
            <BsFillTrashFill />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;

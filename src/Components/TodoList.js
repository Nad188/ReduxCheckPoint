import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = ({ done, unDone }) => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {done === unDone
        ? todoList.map((singleTodo) => (
            <TodoCard singleTodo={singleTodo} key={singleTodo.id} />
          ))
        : done
        ? todoList
            .filter((singleTodo) => singleTodo.isDone === true)
            .map((singleTodo) => (
              <TodoCard singleTodo={singleTodo} key={singleTodo.id} />
            ))
        : todoList
            .filter((singleTodo) => singleTodo.isDone === false)
            .map((singleTodo) => (
              <TodoCard singleTodo={singleTodo} key={singleTodo.id} />
            ))}
    </div>
  );
};

export default TodoList;
//  {todoList.map((singleTodo) => (
//         <TodoCard singleTodo={singleTodo} key={singleTodo.id} />
//       ))}

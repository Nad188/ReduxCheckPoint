import {
  Add_New_Todo,
  Edit_Todo,
  isDoneoRNot_todo,
  Remove_Todo,
} from "../Action/ActionType";
const initialState = {
  todoList: [
    { text: "React Props", id: Math.random(), isDone: false },
    { text: "React State", id: Math.random(), isDone: false },
    { text: "React Hooks", id: Math.random(), isDone: false },
    { text: "React Redux", id: Math.random(), isDone: false },
  ],
};

const ReducerTodoList = (state = initialState, { type, payload }) => {
  switch (type) {
    case Add_New_Todo:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    case Remove_Todo:
      return {
        ...state,
        todoList: state.todoList.filter(
          (singleTodo) => singleTodo.id !== payload
        ),
      };
    case Edit_Todo:
      return {
        ...state,
        todoList: state.todoList.map((singleTodo) =>
          singleTodo.id === payload.id
            ? { ...singleTodo, text: payload.text }
            : singleTodo
        ),
      };
    case isDoneoRNot_todo: {
      return {
        ...state,
        todoList: state.todoList.map((singleTodo) =>
          payload === singleTodo.id
            ? { ...singleTodo, isDone: !singleTodo.isDone }
            : singleTodo
        ),
      };
    }
    default:
      return state;
  }
};

export default ReducerTodoList;

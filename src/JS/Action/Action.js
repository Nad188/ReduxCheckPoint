import {
  Add_New_Todo,
  Edit_Todo,
  isDoneoRNot_todo,
  Remove_Todo,
} from "./ActionType";

export const addNewTodo = (payload) => {
  return {
    type: Add_New_Todo,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: Edit_Todo,
    payload,
  };
};
export const removeTodo = (payload) => {
  return {
    type: Remove_Todo,
    payload,
  };
};
export const isDoneoRNotTtodo = (payload) => {
  return {
    type: isDoneoRNot_todo,
    payload,
  };
};

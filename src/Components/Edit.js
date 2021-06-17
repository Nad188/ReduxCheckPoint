import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editTodo } from "../JS/Action/Action";

const Edit = ({ singleTodo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editTheTodo, setEditTheTodo] = useState(singleTodo.text);
  const dispatch = useDispatch();
  const modify = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editTheTodo, id: singleTodo.id }));
  };

  return (
    <div>
      <button className="button-Edit task-button" onClick={handleShow}>
        <FaEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <label
          style={{
            fontFamily: "fantasy",
            textAlign: "center",
            fontSize: "large",
            color: "#007bff",
          }}
        >
          Edit Todo
        </label>
        <input
          type="text"
          value={editTheTodo}
          style={{ padding: "10px" }}
          onChange={(e) => setEditTheTodo(e.target.value)}
        />

        <Modal.Footer>
          <Button onClick={(e) => modify(e)}>Save Changes</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;

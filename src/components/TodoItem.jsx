import React, { useState, useEffect } from "react";

import styles from "../styles/TodoItem.module.scss";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log("cleanup..");
    };
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  const { completed, id, title } = props.todo;

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => props.deleteTodoProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;

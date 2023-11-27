import { useState } from "react";
import "./Task.css";

function Task(props) {
  const [isChecked, setChecked] = useState(false);

  function checkboxHandler(event) {
    setChecked(event.target.checked);
  }

  return (
    <div className="task">
      <input type="checkbox" onChange={checkboxHandler} />
      <p
        className="task-text"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {props.task.text}
      </p>
      <button
        className="button button_delete"
        onClick={() => {
          props.deleteTaskHandler(props.task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;

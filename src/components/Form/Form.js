import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import "./Form.css";

function Form(props) {
  const [text, setText] = useState("");

  function UserInputHandler(event) {
    setText(event.target.value);
  }

  function FormSubmitHandler(event) {
    event.preventDefault();
    if (text.trim() !== "") {
      props.onSaveFormHandler({
        id: uuid(),
        // text: text.trim().slice(0, 200) + "...",
        text: text,
      });
      setText("");
    }
  }

  return (
    <form className="form" onSubmit={FormSubmitHandler}>
      <input
        autoFocus
        type="text"
        placeholder="Enter new task"
        onChange={UserInputHandler}
        value={text}
      />
      <button className="button button_default" type="submit">
        Add new task
      </button>
    </form>
  );
}

export default Form;

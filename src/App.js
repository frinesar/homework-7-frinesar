import { useState } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

import { v4 as uuidv4 } from "uuid";

const INITIAL_TASKS = [
  {
    id: uuidv4(),
    text: "Task 1",
  },
  {
    id: uuidv4(),
    text: "Task 2",
  },
  {
    id: uuidv4(),
    text: "Task 3",
  },
];

function App() {
  const [tasks, setTasks] = useState([...INITIAL_TASKS]);

  function onSaveFormHandler(InputTaskText) {
    setTasks((previousValue) => {
      return [InputTaskText, ...previousValue];
    });
  }

  function deleteTaskHandler(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1>TODO-LIST</h1>
      <Form onSaveFormHandler={onSaveFormHandler} />
      <TaskList deleteTaskHandler={deleteTaskHandler} tasks={tasks} />
    </div>
  );
}

export default App;

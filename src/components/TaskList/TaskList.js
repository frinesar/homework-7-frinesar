import Task from "../Task/Task";

import "./TaskList.css";

function TaskList(props) {
  return (
    <div className="task-list">
      {props.tasks.map((task) => {
        return (
          <Task
            deleteTaskHandler={props.deleteTaskHandler}
            key={task.id}
            task={task}
          />
        );
      })}
    </div>
  );
}

export default TaskList;

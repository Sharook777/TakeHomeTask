import React from "react";
import { useTask, taskReducer } from "../reducer/taskReducer";
import Datetime from "react-datetime";

import avatar from "../assets/ui.png";

const priority = {
  High: "#f06514",
  Normal: "#1cbc1c",
  Low: "#5252f0",
  Urgent: "#cf0202",
};

const Task = ({ task, colom }) => {
  const { taskDrag } = useTask({
    reducer(currentState, action) {
      const changes = taskReducer(currentState, action);
      return changes;
    },
  });

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
    taskDrag(id, colom);
  };

  return (
    <div
      className="task"
      onDragStart={(e) => onDragStart(e, task.taskId)}
      draggable
    >
      <div className="task-detail">
        <div
          className="priority"
          style={{ background: priority[task.priority] }}
        >
          {task.priority.toUpperCase()}
        </div>
        <div className="task-id">{"#" + task.taskId}</div>
        <div className="time-stamp">
          {Datetime.moment(task.created).fromNow()}
        </div>
      </div>
      <div className="task-name"> {task.name}</div>
      <div className="tags-wrapper">
        {task.tags.map((tag, index) => (
          <span key={"tag__" + index}>
            <span className="tag">{tag}</span>
            {task.tags.length - 1 === index ? null : ", "}
          </span>
        ))}
      </div>

      <div className="task-detail">
        <div className="count-details">{task.comments}</div>
        <div className="count-details">{task.attachments}</div>
        <img className="user-avatar" src={avatar} />
      </div>
    </div>
  );
};

export default Task;

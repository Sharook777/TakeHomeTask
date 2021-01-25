import Task from "./Task";
import { useTask, taskReducer } from "../reducer/taskReducer";

const KanbanBoard = () => {
  const { tasks, coloms, taskDrop, taskHover } = useTask({
    reducer(currentState, action) {
      const changes = taskReducer(currentState, action);
      return changes;
    },
  });

  const onDrop = (ev, colom) => {
    const id = ev.dataTransfer.getData("id");
    taskDrop(parseInt(id), colom);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const kanbanize = coloms.map((colom, index) => (
    <div
      key={"task__colom__" + index}
      className="task-colom"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => {
        onDrop(e, colom);
      }}
    >
      <div className="colom-head">{colom}</div>
      <div className="task-wrapper">
        {tasks
          .filter((task) => task.type === colom)
          .map((task) => (
            <Task key={"task__" + task.taskId} task={task} colom={colom} />
          ))}
      </div>
    </div>
  ));
  return <div className="kanban-board">{kanbanize}</div>;
};

export default KanbanBoard;

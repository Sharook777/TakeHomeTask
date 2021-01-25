import { useReducer } from "react";

import { tasks, coloms } from "../task-mock-data";

const actionTypes = {
  taskDrag: "TASKDRAG",
  taskDrop: "TASKDROP",
  taskHover: "TASKHOVER",
};

const INITIAL_STATE = { tasks, coloms, dropIndex: 0 };

function taskReducer(state, action) {
  switch (action.type) {
    case actionTypes.taskDrag: {
      return { ...state };
    }
    case actionTypes.taskDrop: {
      const { taskId, colom } = action;

      const changedState = state.tasks.map((task) => {
        return task.taskId === taskId ? { ...task, type: colom } : task;
      });
      return { ...state, tasks: changedState };
    }
    case actionTypes.taskHover: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

export default function useTask({ reducer = taskReducer } = {}) {
  const [{ tasks, coloms, dropIndex }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );
  const taskDrag = (taskId, colom) =>
    dispatch({ type: actionTypes.taskDrag, taskId, colom });
  const taskDrop = (taskId, colom) =>
    dispatch({ type: actionTypes.taskDrop, taskId, colom });
  const taskHover = (taskId, colom) =>
    dispatch({ type: actionTypes.taskHover, taskId, colom });
  return {
    tasks,
    coloms,
    taskDrag,
    taskDrop,
    taskHover,
  };
}

export { useTask, actionTypes, taskReducer };

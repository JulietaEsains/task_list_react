import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (newTaskTitle, newTaskDescription) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
      },
    ]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

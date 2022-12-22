import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Agregar una nueva tarea
        </h1>
        <input
          type="text"
          placeholder="Título de la tarea"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          name="description"
          placeholder="Descripción de la tarea"
          onChange={(e) => setNewTaskDescription(e.target.value)}
          value={newTaskDescription}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-500 px-2 py-1 rounded-md hover:bg-indigo-700 text-white"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

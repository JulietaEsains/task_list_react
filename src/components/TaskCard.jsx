import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-700"
        onClick={() => deleteTask(task)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;

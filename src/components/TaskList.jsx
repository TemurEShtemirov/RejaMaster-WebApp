import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, markAsDone } from "../services/api";

const TaskList = ({ onTaskDeleted, onTaskUpdated }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, [onTaskDeleted, onTaskUpdated]);

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    onTaskDeleted();
  };

  const handleMarkAsDone = async (taskId) => {
    await markAsDone(taskId);
    onTaskUpdated();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title} - {task.description} (Due:{" "}
          {new Date(task.deadline).toLocaleDateString()}, Priority:{" "}
          {task.priority}, Category: {task.category}, Completed:{" "}
          {task.completed.toString()})
          <button onClick={() => handleMarkAsDone(task._id)}>
            Mark as Done
          </button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

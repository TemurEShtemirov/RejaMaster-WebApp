import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, markAsDone } from "../services/api";
import '../assets/list.css';

const TaskList = ({ onTaskDeleted, onTaskUpdated }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, [onTaskDeleted, onTaskUpdated]);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      onTaskDeleted();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleMarkAsDone = async (taskId) => {
    try {
      await markAsDone(taskId);
      onTaskUpdated();
    } catch (error) {
      console.error("Failed to mark task as done:", error);
    }
  };

  return (
    <div className="container">
      <h1>The Order of Operations</h1>
      <ol>
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
      </ol>
    </div>
  );
};

export default TaskList;

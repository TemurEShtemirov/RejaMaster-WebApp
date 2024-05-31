import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  const [taskCreated, setTaskCreated] = useState(false);
  const [taskDeleted, setTaskDeleted] = useState(false);
  const [taskUpdated, setTaskUpdated] = useState(false);

  const handleTaskCreated = () => {
    setTaskCreated(!taskCreated);
  };

  const handleTaskDeleted = () => {
    setTaskDeleted(!taskDeleted);
  };

  const handleTaskUpdated = () => {
    setTaskUpdated(!taskUpdated);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList
        onTaskDeleted={handleTaskDeleted}
        onTaskUpdated={handleTaskUpdated}
      />
    </div>
  );
};

export default TaskPage;

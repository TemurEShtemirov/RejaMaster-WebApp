import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TaskPage from './pages/TaskPage';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from 'react';
import './assets/main.css'

const App = () => {

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
    <Router>
      <Routes>
        <Route path="/form" element={<TaskForm onTaskCreated={handleTaskCreated} />
        } />
        <Route path="/" element={<TaskList
          onTaskDeleted={handleTaskDeleted}
          onTaskUpdated={handleTaskUpdated}
        />} />
      </Routes>
    </Router>
  );
};

export default App;

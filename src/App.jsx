import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={TaskPage} />
      </Routes>
    </Router>
  );
};

export default App;

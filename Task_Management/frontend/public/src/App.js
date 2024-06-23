// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';
import './App.css'; // Optional: Import a global CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route path="/add" component={AddTask} />
          <Route path="/tasks/:id" component={TaskDetails} />
          <Route path="/edit/:id" component={EditTask} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// src/components/TaskDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };
    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to="/">Back to Task List</Link>
    </div>
  );
};

export default TaskDetails;

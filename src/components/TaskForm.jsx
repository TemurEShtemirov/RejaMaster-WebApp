import React, { useState, useEffect } from "react";
import { getCategories, createTask } from "../services/api";
import '../assets/form.css';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [categoryName, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, deadline, priority, categoryName };
    try {
      await createTask(newTask);
      onTaskCreated();
      setTitle("");
      setDescription("");
      setDeadline("");
      setPriority("");
      setCategory("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>Task Management</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
        /><br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Description"
        /><br />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          placeholder="Deadline"
        /><br />
        <input
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
          placeholder="Priority"
        /><br />
        <select
          value={categoryName}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select><br />
        <button type="submit">Create Task</button>
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default TaskForm;

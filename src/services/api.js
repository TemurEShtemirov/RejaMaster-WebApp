import axios from "axios";

const API_URL = "http://localhost:3000";

export const getTasks = async () => {
  return await axios.get(`${API_URL}/tasks`);
};

export const createTask = async (task) => {
  return await axios.post(`${API_URL}/tasks`, task);
};

export const updateTask = async (taskId, updates) => {
  return await axios.put(`${API_URL}/tasks/${taskId}`, updates);
};

export const deleteTask = async (taskId) => {
  return await axios.delete(`${API_URL}/tasks/${taskId}`);
};

export const markAsDone = async (taskId) => {
  return await axios.put(`${API_URL}/tasks/${taskId}/markasdone`);
};

export const getCategories = async () => {
  return await axios.get(`${API_URL}/categories`);
};

export const createCategory = async (category) => {
  return await axios.post(`${API_URL}/categories`, category);
};

export const deleteCategory = async (categoryId) => {
  return await axios.delete(`${API_URL}/categories/${categoryId}`);
};

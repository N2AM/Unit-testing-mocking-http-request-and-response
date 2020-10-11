
import axios from "axios";
import { BASE_URL } from "../environments/env";

//GET
export const getToDos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`); // Promise resolve
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// GET 
// return a promise
export const get = () => {
 return axios.get(`${BASE_URL}/users`);
   
}

// POST

export const postTodo = async (todo) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todo);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//DELETE

export const deleteToDo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//PUT

export const editToDo = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

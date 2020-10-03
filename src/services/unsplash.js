import axios from "axios";
import { BASE_URL } from "../environments/env";

//GET
export const getToDos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// POST

export const postTodo = async (todo) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todo);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//PUT

//DELETE

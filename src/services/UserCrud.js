import api from "./apiConfig.js";

export const getUser = async (id) => {//user id
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => { //date time auto, likes = 0 default
  try {
    const response = await api.post("/user", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (id) => {//user id
  try {
    const response = await api.put(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
  
};


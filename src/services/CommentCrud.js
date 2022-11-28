import api from "./apiConfig.js";

export const getComments = async () => { //pagination django rest limits all posts to (10)
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {//post id
  try {
    const response = await api.get(`/comment/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (userData) => { //date time auto, likes = 0 default
  try {
    const response = await api.post("/comment", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editComment = async (userData) => {
  try {
    const response = await api.post("/comment", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/comment/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
  
};





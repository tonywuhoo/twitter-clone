import api from "./apiConfig.js";

export const getPosts = async () => { //pagination django rest limits all posts to (10)
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getpost = async (id) => {//post id
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (userData) => { //date time auto, likes = 0 default
  try {
    const response = await api.post("/post", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
  
};





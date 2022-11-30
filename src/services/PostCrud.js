import api from "./apiConfig.js";
import Cookies from 'js-cookie'
import axios from "axios";

export const getPosts = async () => {
  try {
    let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/allposts/")
    return response
  } catch (error) {
    throw error;
  }
};

export const getpost = async (id) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (content) => {
  try {
    if (Cookies.get("AccessToken") === undefined || Cookies.get("AccessToken") === "loggedout") {
      alert("Please log in to create a post!")
    }
    const config = {
      headers: {
        "Authorization": `Bearer ${Cookies.get("AccessToken")}`,
      },
    };
    let response = await axios.post(`https://twitter-clone-backend-production-c9cc.up.railway.app/user/posts/`, content, config)
    console.log(response)
    if (response.status === 201) {
      alert("Post successful!")
    }
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





import api from "./apiConfig.js";
import Cookies from 'js-cookie'
import axios from "axios";

async function reverseObject(Input) {
  let output = []
  Input.reverse()
  for (let i = 0; i < Input; i++){
    output.push(Input[i])
    console.log(Input[i])
  }
  return output
}

export const getPosts = async () => {
  try {
    let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/allposts/")
    let reversedPost = await reverseObject(response.data)
    return response.data
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
    return response.data
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





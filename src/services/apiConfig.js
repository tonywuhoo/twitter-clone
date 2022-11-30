import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "",
  development: "https://twitter-clone-backend-production-0cca.up.railway.app/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
}
else {
  // apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
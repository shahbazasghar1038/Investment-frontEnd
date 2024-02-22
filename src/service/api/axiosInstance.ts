import axios from "axios";

// const baseURL = axios.create({
//   baseURL: "http://localhost:1337",
// });

const baseURL = axios.create({
  baseURL: "https://api.gwminings.com",
});

export default baseURL;


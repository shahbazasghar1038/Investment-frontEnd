import axios from "axios";

// const baseURL = axios.create({
//   baseURL: "http://localhost:1337",
// });
const baseURL = axios.create({
  baseURL: "13.200.247.126:1337",
});

export default baseURL;

// import axios from "axios";

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_API_BASE_URL_PROD
//     : process.env.REACT_APP_API_BASE_URL_LOCAL;

// const axiosInstance = axios.create({ baseURL });

// export default axiosInstance;

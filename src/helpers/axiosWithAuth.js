// IMPORTS
// axios
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: `http://localhost:5003/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};

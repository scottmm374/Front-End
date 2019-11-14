import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "https://immunizationtracker-bw.herokuapp.com/api",
    headers: {
      Authorization: getToken()
    }
  });
}

import axios from "axios";

export function getMedToken() {
  return localStorage.getItem("medtoken");
}

export default function() {
  return axios.create({
    baseURL: "https://immunizationtracker-bw.herokuapp.com/api",
    headers: {
      Authorization: getMedToken()
    }
  });
}

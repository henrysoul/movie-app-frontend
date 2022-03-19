import axios from "axios";
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const httpDmdb = axios.create({
  baseURL: process.env.REACT_APP_DMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "x-rapidapi-key": "ef80f9bccfmsh89d90c729ca45d0p10b916jsn8856a0e1a7a9",
    // "x-rapidapi-host": "unogsng.p.rapidapi.com",
  },
});

import axios from "axios"
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null

export const http = axios.create({
  baseURL: process.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

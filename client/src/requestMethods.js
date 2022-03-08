import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWExMWI5OTA0ODUxMTc0NWU4NDhjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjI0MjIyOCwiZXhwIjoxNjQ2NTAxNDI4fQ.aKiEj8x1GMvAML_6Szc7Lku2CT-RGNMAPVl7TojjxGk"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
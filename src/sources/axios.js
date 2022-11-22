import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.usa.gov/crime/fbi/sapi/api/",
});

export default instance;

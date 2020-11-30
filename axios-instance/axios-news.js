import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.nytimes.com/svc/seach/v2",
});

export default instance;

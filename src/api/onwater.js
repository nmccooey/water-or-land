import axios from "axios";

export default axios.create({
  baseURL: "https://api.onwater.io/api/v1/results/",
});

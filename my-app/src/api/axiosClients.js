import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://5fa27af5ba0736001613bb63.mockapi.io/",
    headers: {
      'Content-Type': 'application/json'
    }
});


export default axiosClient;
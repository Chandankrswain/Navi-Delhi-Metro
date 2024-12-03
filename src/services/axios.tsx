import axios from "axios";

// Create an Axios instance (API client)
const apiClient = axios.create({
  baseURL: "https://backend.delhimetrorail.com/api", // Common API URL for all requests
  timeout: 10000, // Timeout set for requests (10 seconds)
  headers: {
    "Content-Type": "application/json", // Common headers for all requests
  },
});

export default apiClient;

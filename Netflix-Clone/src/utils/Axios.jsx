// Importing axios for making HTTP requests.
import axios from "axios";

// Creating an axios instance with a custom configuration, setting the base URL for The Movie Database (TMDb) API.
const instance = axios.create({
  // TMDb base URL
  baseURL: "https://api.themoviedb.org/3", // TMDb base URL
});

export default instance;
// Exporting the axios instance for use in API calls throughout the app.
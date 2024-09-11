// Importing necessary React hooks and dependencies for fetching data and managing state.
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";// Custom axios instance for making API requests.
import requests from "../../utils/requests";// API endpoint configurations.
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]); // State to hold the selected movie.
  // useEffect hook to fetch a random movie from Netflix Originals when the component mounts.
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures it runs only once on component mount.

  console.log(movie);
  // JSX rendering the banner background and movie information.
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "path/to/fallback_image.jpg" // Fallback image
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
};
// Helper function to truncate long movie descriptions.
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default Banner;

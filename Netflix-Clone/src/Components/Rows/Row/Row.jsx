// Importing necessary React hooks, CSS for styling, and external dependencies.
import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios"; // Axios instance for API requests.
import YouTube from "react-youtube";// For embedding YouTube player.
import movieTrailer from "movie-trailer"; //  For finding movie trailers

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]); // State to store fetched movie data.
  const [trailerUrl, setTrailerUrl] = useState(""); // State to store the YouTube trailer URL.

  const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for movie images.

  // useEffect hook to fetch movie data when the component mounts or fetchUrl changes.
  useEffect(() => {
    async function fetchData() {
      try {
        // console.log(fetchUrl)
        const request = await axios.get(fetchUrl);
        // console.log(Request)
        setMovies(request.data.results); // Setting fetched movies to state.
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Function to handle click event and fetch trailer URL.
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // If a trailer is already playing, stop it.
    } else {
      // Using movie-trailer to find the movie trailer link
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v")); // Set the trailer URL if found.
        })
        .catch((error) => console.log("Error fetching trailer:", error));
    }
  };

  // YouTube player options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  // JSX rendering the row with movie posters and trailer player.
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"; // Import movie-trailer package

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetching data using useEffect
  useEffect(() => {
    async function fetchData() {
      try {
        // console.log(fetchUrl)
        const request = await axios.get(fetchUrl);
        // console.log(Request)
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Handle click event for trailers
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Using movie-trailer to find the movie trailer link
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
            console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
           console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
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

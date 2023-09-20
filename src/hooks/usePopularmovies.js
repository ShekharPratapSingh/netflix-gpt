import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularmovies = () => {
  const dispatch = useDispatch();

  const getNowMoviesdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log("response.results",response.results);
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    getNowMoviesdata();
  }, []);
};

export default usePopularmovies;

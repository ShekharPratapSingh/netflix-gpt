import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();

  const getNowMoviesdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log(response.results);
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    getNowMoviesdata();
  }, []);
};

export default useNowplayingMovies;

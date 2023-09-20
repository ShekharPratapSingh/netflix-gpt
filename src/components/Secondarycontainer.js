import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular=useSelector((store) => store.movies?.PopularMovies)

  return (
    <div className=" bg-black">
      <div className=" -mt-72 pl-12 relative z-20">
        <MovieLists title={"Now Playing"} movies={movies} />
        <MovieLists title={"Popular"} movies={popular} />
        <MovieLists title={"Horror"} movies={movies} />
      </div>
    </div>
  );
};

export default Secondarycontainer;

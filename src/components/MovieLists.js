import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  console.log("movies", movies);

  return (
    <div className=" p-6  ">
      <h1 className=" text-2xl font-bold my-5 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        <div className=" flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterpath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;

import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVedio } from "../utils/moviesSlice";
import useMovietrailer from "../hooks/useMovietrailer";

const VedioBackground = ({ movieId }) => {
  useMovietrailer(movieId);

  const trailer = useSelector((state) => state.movies.trailerVedio);

  return (
    <div>
      <iframe
        className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;

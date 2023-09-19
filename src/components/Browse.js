import React, { useEffect } from "react";
import Header from "./Header.";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies, addNowPlayingMovies } from "../utils/moviesSlice";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";


const Browse = () => {
  useNowplayingMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <Secondarycontainer></Secondarycontainer>
    </div>
  );
};

export default Browse;

import React, { useEffect } from "react";
import Header from "./Header.";

import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovie from "../hooks/usePopularmovies";


const Browse = () => {
 

  useNowplayingMovies();
  usePopularMovie();
  return (
    <div>
      <Header></Header>
     
        
          <MainContainer></MainContainer>
          <Secondarycontainer></Secondarycontainer>
      
      
    </div>
  );
};

export default Browse;

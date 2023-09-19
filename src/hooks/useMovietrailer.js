import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addtrailerVedio } from '../utils/moviesSlice';

const useMovietrailer = (movieId) => {

         const dispatch=useDispatch()
    
    const getMoviesvedio = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const response = await data.json();
      const filterData = response.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : response.results[0];
      dispatch(addtrailerVedio(trailer))
      console.log(trailer);
    };
  
    useEffect(() => {
      getMoviesvedio();
    }, []);
 
  
}

export default useMovietrailer
import React from 'react'
import Vediotitle from './Vediotitle'
import VedioBackground from './VedioBackground'
import { useSelector } from 'react-redux'


const MainContainer = () => {

  const movies= useSelector(state=>state.movies?.nowPlayingMovies);
  if(movies===null) return;
  const mainMovie=movies[0]
  console.log(mainMovie)
  const {original_title,overview,id}=mainMovie


  return (
    <div>
      <Vediotitle title={original_title} overview={overview}/>
      <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
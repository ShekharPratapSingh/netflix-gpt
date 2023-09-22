import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className=' w-48 pr-4 cursor-pointer'>
        <img src={IMG_CDN_URL+posterpath} alt="" />
    </div>
  )
}

export default MovieCard
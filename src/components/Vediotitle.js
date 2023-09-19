import React from 'react'

const Vediotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-44 px-10 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <p className=' py-7 text-xl w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-2 px-10 font-semibold text-lg  rounded-lg hover:bg-opacity-50'> ▶ Play</button>
            <button className='bg-white text-black p-2 px-10 font-semibold text-lg  rounded-lg mx-2 hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default Vediotitle
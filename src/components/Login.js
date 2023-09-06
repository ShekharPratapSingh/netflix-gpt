import { useState } from 'react'
import React from 'react'
import Header from './Header.'

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true)

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }



  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
        </div>
        
      <form className='absolute my-36 mx-auto right-0 left-0 w-3/12 p-12 bg-black  bg-opacity-80 rounded text-white'>
        <h1 className=' mx-2 font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        <input type="email" name="email" placeholder='Enter email address' className='p-2 my-4 w-full bg-gray-600  font-bold' />
        <input type="password" name="password" placeholder='enter password' className='p-2 my-4 w-full bg-gray-600  font-bold' />
        <button className=' p-2 my-6 bg-red-600 rounded text-white font-bold text-center w-full'>{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className=' py-4'>{isSignInForm?"New to Netflix ?":"Already an user"} <span className=' font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?'Sign up now':'Sign In now'}</span></p>
      </form>
    </div>
  )
}

export default Login
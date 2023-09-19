import { useRef, useState } from "react";
import React from "react";
import Header from "./Header.";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const dispatch =useDispatch()
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  
  // const name=useRef(null)

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName }));
            
          }).catch((error) => {
            setErrorMessage(error)
          });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth,    email.current.value,   password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto right-0 left-0 w-3/12 p-12 bg-black  bg-opacity-80 rounded text-white"
      >
        <h1 className=" mx-2 font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            name="fullname"
            placeholder="Fullname"
            className="p-2 my-4 w-full bg-gray-600  font-bold"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Enter email address"
          className="p-2 my-4 w-full bg-gray-600  font-bold"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="enter password"
          className="p-2 my-4 w-full bg-gray-600  font-bold"
        />
        <p className=" text-red-600 font-bold py-2">{errormessage}</p>
        <button
          className=" p-2 my-6 bg-red-600 rounded text-white font-bold text-center w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-4">
          {isSignInForm ? "New to Netflix ?" : "Already an user"}{" "}
          <span
            className=" font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

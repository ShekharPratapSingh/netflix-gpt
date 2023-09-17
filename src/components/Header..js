import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
 

  const handleSignout=()=>{
    signOut(auth).then(() => {
     console.log("Signour successfull")
     navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

const user = useSelector(state=>state.user)
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
     { user &&( <div className=" flex">
     <p className=" text-center font-bold text-white px-5 my-5">Hello {user?.displayName}</p>
    
        
    <button onClick={handleSignout} className=" font-bold text-white">SignOut</button>
      </div>
      )}
    </div>
  );
};

export default Header;

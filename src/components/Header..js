import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
 
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>{
      unsubscribe()
    }
  },[dispatch]);

  const handleSignout=()=>{
    signOut(auth).then(() => {
     console.log("Signout successfull")
    
    }).catch((error) => {
   
    });
  }

const user = useSelector(state=>state.user)


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36 "
        src={LOGO}
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

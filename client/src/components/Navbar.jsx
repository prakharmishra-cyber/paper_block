import React, { useState } from "react";
import icon1 from "./icons8-paper-64.png";
import { Link, useNavigate } from "react-router-dom";
//import { app } from "../services/firebase.js";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [User, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(auth);
      })
      .catch((error) => {
        // Handle Errors here.
        //const errorCode = error.code;
        //const errorMessage = error.message;
        //const email = error.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  const handleLogOut = () => {

    signOut(auth).then(() => {
      setUser(null);
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });

  }

  return (
    <div className=" font-mono flex flex-col md:flex-row md:justify-between text-white items-center shadow-md">
      <div className="p-2 text-xl ml-2 flex font-semibold tracking-widest cursor-pointer bg-white rounded-sm text-indigo-600">
        <img
          src={icon1}
          width={40}
          height={20}
          className="pr-3"
          alt="paper_image"
        />
        Exam-Mate
      </div>
      <div className="flex  flex-col items-center md:flex-row md:justify-between m-3">
        {User !== null ? (
          <Link to="/view">
            <div className="p-2 cursor-pointer text-indigo-600 hover:border-2 hover:border-indigo-600 hover:border-solid">
              View Papers
            </div>
          </Link>
        ) : null}

        {User !== null ? (
          <Link to="/upload">
            <div className="p-2 cursor-pointer text-indigo-600 hover:border-2 hover:border-indigo-600 hover:border-solid">
              Upload Papers
            </div>
          </Link>
        ) : null}

        {User == null ? (
          <div
            onClick={handleSignIn}
            className="p-2 mr-2 cursor-pointer text-indigo-600 hover:border-2 hover:border-indigo-600 hover:border-solid"
          >
            Sign In
          </div>
        ) : null}

        {User !== null ? (
          <div
            onClick={handleLogOut}
            className="p-2 mr-2 cursor-pointer text-indigo-600 hover:border-2 hover:border-indigo-600 hover:border-solid"
          >
            Log Out
          </div>
        ) : null}


      </div>
    </div>
  );
};

export default Navbar;



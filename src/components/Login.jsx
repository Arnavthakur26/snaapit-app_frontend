import React from "react";
import "./Login.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { client } from "../client";

import jwt_decode from "jwt-decode";

import logo from "../assets/logowhite.png";
import LoadingBar from "react-top-loading-bar";

const Login = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const createORgetUser = async (response, addUser) => {
    const decodedData = jwt_decode(response.credential);
    const { name, picture, sub } = decodedData;
    localStorage.setItem("user", JSON.stringify(decodedData));
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    setProgress(70);
    setProgress(100);

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`}
    >
      <LoadingBar
        color="#f11946"
        progress={progress}
        loaderSpeed={600}
        shadow={true}
        height={3}
        waitingTime={600}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="animated-gradient z-50 w-full h-full overflow-hidden container ">
        <div className="flex justify-start items-center flex-col h-screen ">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 ">
              <div className="shadow-2xl shadow-slate-500 rounded-2xl w-1/4 bg-gradient-to-tr from-gray-800 to-teal-800  min-w-350 z-50 bg-clip-content">
                <div className=" h-96 rounded-2xl flex flex-col items-center justify-center gap-16 px-6 py-8">
                  <img className="mr-2 w-36" src={logo} alt="logo" />
                  <GoogleLogin
                    onSuccess={createORgetUser}
                    onError={createORgetUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

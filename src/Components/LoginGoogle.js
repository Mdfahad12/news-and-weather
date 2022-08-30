import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

import { Link } from "react-router-dom";

function LoginGoogle() {
  const [profile, setProfile] = useState(true);
  const clientId =
    "732573098292-uakhkt7o8ro3pmm29nroms62hks8rogn.apps.googleusercontent.com";

  const onSuccess = (res) => {
    setProfile(false);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(true);
  };
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div>
      {profile ? (
        <div>
          <center>
            <img
              style={{ width: "400px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt=""
            />
            <br></br>
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </center>
        </div>
       
      ) : (
        <div>
        <div className="row">
          <div
            className=" rounded float-left w-50 "
            style={{ textAlign: "center", display: "flex" }}
          >
            <div>
              <img
                className="d-block w-100 "
                style={{ width: "200px", height: "200px" }}
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/svlbsy9mrwxvtwxyx0z5"
                alt=""
              />
              <Link className="btn btn-sm btn-dark" to="/NewsApp">
                NewsApp
                <br></br>
              </Link>
            </div>
            <br></br>
            <div>
              <img
                className="d-block w-100 "
                style={{ width: "200px", height: "200px" }}
                src="https://play-lh.googleusercontent.com/HKQH9rgXZTJ8JSMTvN0Qlg7VPcZq1n1LK_jwiF5rCsaUZO0m1r8kJI_Sl3T2Oi7MxQ"
                alt=""
              />
              <Link className="btn btn-sm btn-dark" to="/TempApp">
                WeatherApp
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        <GoogleLogout
          clientId={clientId}
          buttonText="Log out"
          onLogoutSuccess={logOut}
        />
      </div>
      )}
    </div>
  );
}

export default LoginGoogle;

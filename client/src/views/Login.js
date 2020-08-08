import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";

const STATES = {
  initial: 0,
  visible: 1,
  removed: 2,
}

const Login = () => {
  const [aboutUsVisibility, setAboutUsVisibility] = useState(STATES.initial);
  const {
    user,
    isAuthenticated,
    loginWithRedirect
  } = useAuth0();

  // const toggle = () => setIsOpen(!isOpen);
  let aboutClassName = "";
  if (aboutUsVisibility === STATES.initial) {
    aboutClassName = "d-none";
  } else if (aboutUsVisibility === STATES.visible) {
      aboutClassName = "fade-in";
    } else {
      aboutClassName = "fade-out";
  }
  
  const showAboutUs = () => {
     setAboutUsVisibility(aboutUsVisibility === STATES.visible ? STATES.removed : STATES.visible); 
  }

  return (
    <div className="row no-gutters text-center login-container">
      <div className="col-md-6 col-lg-5 col-xl-4 login-display ">
        <div className="login-card card m-auto align-middle shadow">
          <div className="login card-header">
            <img className="img-fluid" src="./assets/images/curious-bunny.png" alt="EvenCuriouser logo" width="30%" />
            <h3 className="text-white">EvenCuriouser</h3>
          </div>
          <div className="card-body">
            <Button
              id="qsLoginBtn"
              color="primary"
              className="border-0 btn sign-in-btn w-75"
              onClick={() => loginWithRedirect()}
            >
              Log in with Google
            </Button>
            <button 
            className="btn sign-in-btn w-75"
            onClick={() => showAboutUs()}
            >
              {aboutUsVisibility === STATES.visible ? "Enough About Us" : "About Us"}
              </button>
          </div>
          <div className="login card-footer"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-7 col-xl-8 login-bunny">
        <div className={"about-us-container " + aboutClassName}>
          <div className="about-text">
            <h1 className="about-heading">Get Curious</h1>
            <hr className="pink-line" />
            <p>EvenCuriouser is a one-stop educational platform for elementary school students, teachers, and parents.
            </p>
            <p>
              We specialize in making distance learning as painless as possible for everyone
              involved by organizing your resources, assignments,
              communication, and schedules for you.
            </p>
            <p>For a seamless distance learning experience, get curious.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
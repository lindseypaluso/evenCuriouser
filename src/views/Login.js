import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
  <div className="row align-items-center no-gutters">
    <div className="col-md-4 login-display text-center">
      <div className="login-card card m-auto align-middle">
        <div className="login card-header">
          <img className="img-fluid" src="./assets/images/curious-bunny.png" alt="EvenCuriouser logo" width="30%" />
            <h3 className="text-white">EvenCuriouser</h3>
        </div>
          <div className="card-body">
          <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="border-0 btn sign-in-btn mt-4 text-dark"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in with Google
            </Button>
            <br />
            {/* <button className="btn sign-in-btn mt-4">Join with Google</button><br /> */}
              <button className="btn sign-in-btn">Sign In</button>
          </div>
            <div className="login card-footer"></div>
          </div>
        </div>
        <div className="col-md-8">
          <img src="./assets/images/Cool_Bunny.jpg" alt="bunny with sunglasses" className="bunny1 mr-0 img-fluid" />
      </div>
    </div>
);
};

export default Login;
import React from "react";

const Login = () => (
  <div className="row align-items-center no-gutters">
    <div className="col-4 login-display text-center">
      <div className="login-card card m-auto align-middle">
        <div className="login card-header">
          <img className="img-fluid" src="./assets/images/curious-bunny.png" alt="EvenCuriouser logo" width="30%" />
            <h3 className="text-white">EvenCuriouser</h3>
        </div>
          <div className="card-body">
            <button className="btn sign-in-btn mt-4">Join with Google</button><br />
              <button className="btn sign-in-btn">Sign In</button>
          </div>
            <div className="login card-footer"></div>
          </div>
        </div>
        <div className="col-8">
          <img src="./assets/images/Cool_Bunny.jpg" alt="bunny with sunglasses" className="bunny1 mr-0 img-fluid" />
      </div>
    </div>
);

export default Login;
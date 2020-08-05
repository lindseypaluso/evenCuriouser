import React, { Fragment } from "react";
import Dashboard from "../components/Dashboard";

const Home = (props) => (
  <div className="hero-image">
  <Fragment>
    
    <Dashboard user={props.user}/>
   
  </Fragment>
  </div>
);

export default Home;

import React, { Fragment } from "react";
import Loading from "../components/Loading";
import Dashboard from "../components/Dashboard";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const Home = (props) => (
  <div className="hero-image">
    <Dashboard user={props.user}/>
  </div>
);

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Loading />,
});

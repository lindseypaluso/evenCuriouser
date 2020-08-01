import React, { Fragment } from "react";

import WarholBunnies from "../components/WarholBunnies";
import Dashboard from "../components/Dashboard";

const Home = () => (
  <WarholBunnies>
  <Fragment>
    <Dashboard />
  </Fragment>
  </WarholBunnies>
);

export default Home;

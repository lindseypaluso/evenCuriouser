import React, { Fragment } from "react";
import WarholBunnies from "../components/WarholBunnies";
import Students from "../components/Students";

const StudentSearch = () => (
  <Fragment>
    
    <hr />
    <WarholBunnies>
        <Students />
    </WarholBunnies>
    
  </Fragment>
);

export default StudentSearch;

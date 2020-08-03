import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Chat from "./views/Chat";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import WarholBunnies from "./components/WarholBunnies";
import AllClasses from "./views/AllClasses";
import ClassAssignments from "./views/ClassAssignments";
import ClassGradeBook from "./views/ClassGradeBook";
import ClassView from "./views/ClassView";
import StudentProfile from "./views/StudentProfile";
import StudentSearch from "./views/StudentSearch";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/classes" component={AllClasses} />
            <Route path="/assignments" component={ClassAssignments} />
            <Route path="/gradebook" component={ClassGradeBook} />
            <Route path="/class-list" component={ClassView} />
            <Route path="/student-profile" component={StudentProfile} />
            <Route path="/student-search" component={StudentSearch} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;

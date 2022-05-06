import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

import { makeStyles } from "@material-ui/core";

const App = () => {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
      </div>
    </BrowserRouter>
  );
};

export default App;

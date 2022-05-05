import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
import { AnythingWorldState } from "../AnythingWorldContext";

import ReactJson from "react-json-view";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    paddingLeft: 40,
    paddingRight: 40,
  },
  sidebar: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },
}));

const NameDescription = () => {
  const { loading, nameObj } = AnythingWorldState();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {loading ? (
          <CircularProgress
            style={{ color: "#00ff4d" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>{nameObj ? <ReactJson theme="monokai" src={nameObj} /> : ""}</>
        )}
      </div>
    </div>
  );
};

export default NameDescription;

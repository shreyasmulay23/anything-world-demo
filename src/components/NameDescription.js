import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { AnythingWorldState } from "../AnythingWorldContext";

import ReactJson from "react-json-view";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const NameDescription = () => {
  const { loading, nameObj } = AnythingWorldState();
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
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
    </ThemeProvider>
  );
};

export default NameDescription;

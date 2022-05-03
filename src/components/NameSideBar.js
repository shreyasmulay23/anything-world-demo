import {
  Chip,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import { AnythingWorldState } from "../AnythingWorldContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Poppins",
    color: "#00ff4d",
  },
  description: {
    width: "100%",
    fontFamily: "Poppins",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
    color: "white",
  },
  marketData: {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
  chips: {
    display: "flex",
    flexDirection: "column",
  },
  individualChip: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8px",
    marginBottom: "8px",
    color: "black",
    fontFamily: "Poppins",
    backgroundColor: "#00ff4d",
  },
}));

const NameSideBar = () => {
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
          <>
            <img
              src={nameObj?.aw_thumbnail}
              alt={nameObj?.newName}
              height="200"
              style={{ marginBottom: 20 }}
            />
            <Typography variant="h3" className={classes.heading}>
              {nameObj?.newName}
            </Typography>
            <div className={classes.marketData}>
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className={classes.heading}>
                  Author:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  {nameObj?.author === "AUTHOR_NOT_PROVIDED"
                    ? "-"
                    : nameObj?.author}
                </Typography>
              </span>
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className={classes.heading}>
                  Source:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  {nameObj?.source}
                </Typography>
              </span>
              <span className={classes.chips}>
                {nameObj?.tags?.map((it) => (
                  <Chip label={it} className={classes.individualChip} />
                ))}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NameSideBar;

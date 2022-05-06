import { AppBar, Container, Toolbar } from "@material-ui/core";
import {
  alpha,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import AutoCompleteSearch from "./AutoCompleteSearch";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#00ff4d",
    fontFamily: "Poppins",
    fontWeight: "bold",
    cursor: "pointer",
    width: "50%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  titleImg: {
    filter:
      "invert(100%) sepia(0%) saturate(7498%) hue-rotate(183deg) brightness(96%) contrast(103%)",
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

function Header() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar style={{ marginTop: "15px" }}>
            <img
              src="https://uploads-ssl.webflow.com/6101e033eba551a09cbbe91c/61797f782c4de5ab8ee34cfc_AW_Logo_New_B_400x400.svg"
              loading="lazy"
              width="116"
              alt=""
              className={classes.titleImg}
              onClick={() => history.push("/")}
            />
            <div className={classes.search}>
              <AutoCompleteSearch />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
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

function Header() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar style={{ marginTop: "15px" }}>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Anything World Demo
            </Typography>
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

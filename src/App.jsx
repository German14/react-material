import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

import NewMenu from "./components/menu";
import LabTabs  from "./tabs";
import useStyles from './styles'



const App = () => {

  const classes = useStyles();
  return (
    // <div>
    //     <Typography variant="h1">Hello world a</Typography>
    // </div>
    <>
      <CssBaseline>
        <AppBar position="relative">
                  <Toolbar>
                   <NewMenu />
                      <PhotoCamera className={classes.icon}>
              <Typography color="textSecondary" variant="h6">
                Photo Album
              </Typography>
            </PhotoCamera>
          </Toolbar>
        </AppBar>
       < LabTabs/>
              <footer className={classes.footer}>
                  <Typography variant="h6" align="center" gutterBottom>
                      Footer

                  </Typography>
                  <Typography variant="subtitle1" align="center" color="primary">
                      Something here to give the footer a purpose!
                  </Typography>
              </footer>
      </CssBaseline>
    </>
  );
};
export default App;

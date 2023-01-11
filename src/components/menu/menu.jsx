import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Typography, AppBar, CssBaseline, Toolbar, Box } from "@mui/material";
import useStyles from "../../styles";
const NewMenu = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
        <CssBaseline>
          <AppBar position="relative">
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ minWidth: 100 }}>
                  <Link to="/">Home</Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                  {" "}
                  <Link to="/photos">Photos</Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                  {" "}
                  <Link to="/forms">Forms</Link>
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Outlet />
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
    </React.Fragment>
  );
};
export default NewMenu;

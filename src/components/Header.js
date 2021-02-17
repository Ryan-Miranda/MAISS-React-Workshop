import React, { useEffect } from 'react'

// Components we need from Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

// Link component needed for routing
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  link: {
    color: "white"
  },
  root: {
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  appBarDark: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0.65)',
  },
  button: {
    margin: 5,
    color: "white",
    letterSpacing: 2,
    '&:hover': {
      backgroundColor: "rgb(0,0,0, 0.2)"
    }
  },
}));


export default function Header({ pageNum }) {
    const classes = useStyles();

    // Example of how to execute code every time the component loads in
    useEffect(() => {
      console.log(pageNum);
    });

    return (
      <AppBar position='static' className={classes.appBarDark} elevation={4}>
        
        <div className={classes.root}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
                <Box>

                  <Button size="large" className={classes.button} component={Link} to="/">Home</Button> 

                  <Button size="large" className={classes.button} component={Link} to="/profiles">Profiles</Button> 

                </Box>
            </Grid>
        
          </Grid>
        </div>

      </AppBar>
    )
}
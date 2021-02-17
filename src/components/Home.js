import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
}));

export default function Home({setPage}) {
    const classes = useStyles();

    // Call the setPage function defined in App.js to show how a child component can edit the state of a parent
    useEffect(() => {
        setPage("Home");
    });

    return (
        <Box mt={16} mb={16} className={classes.root}>
            <Typography variant="h1">Welcome!</Typography>
        </Box>
    )
}

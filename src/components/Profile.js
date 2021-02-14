import React from 'react'

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

export default function Profile({match}) {
    const classes = useStyles();

    return (
        <Box mt={16} mb={16} className={classes.root}>
            <Typography variant="h3">{match.params.username}'s Profile</Typography>
        </Box>
    )
}

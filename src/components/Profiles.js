import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';

import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#580C1F",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(150,74,93)"
        }
    },
}));

export default function Profiles({setPage}) {
    const [users, setUsers] = React.useState('');
    const classes = useStyles();

    useEffect(() => {
        setPage("Profiles");
    });

    const getData = async () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            dataType: "JSON",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            }
        })
        .then((resp) => {
            return resp.json()
        }) 
        .then((data) => {
            setUsers(data);      
        })
        .catch((error) => {
            console.log(error, "GET error")
        })
    }

    return (
        <Box mt={16} mb={16} className={classes.root}>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<PersonIcon />}
                onClick={getData}
            > Get Users
            </Button>

            <Box mt={10}></Box>

            {users && 
                users.map((user,i) => (
                    <Link component={RouterLink} to={`profiles/${user.username}`} color="inherit" key={i}>
                        <Typography variant="h5">{user.name}</Typography>
                    </Link>
                ))
            }

        </Box>
       
    )
}

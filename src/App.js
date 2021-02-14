import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import Header from './components/Header'

let theme = createMuiTheme({
    // typography: {
    //     fontFamily: "Source Sans Pro,sans-serif"
    // },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        minHeight: "100vh",
    },
}));


export default function LPNSite() {
    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    const pages = new Map(
        [
            ['Home', 0], ['Profiles', 1]
        ]
    )

    const setPage = (page) => {
        setPageNum(pages.get(page))
    }

    return (
       <BrowserRouter>
                      
            <div className={classes.app}>

                <Header pageNum={pageNum}></Header>

                <ThemeProvider theme={theme}>

                <Switch>

                    <Route exact path="/profiles/:username"
                        render={(props) => <Profile {...props} setPage={setPage} />}>
                    </Route>

                    <Route path="/profiles">
                        <Profiles setPage={setPage} />
                    </Route>

                    <Route path="/">
                        <Home setPage={setPage} />
                    </Route>

                </Switch>
    
                </ThemeProvider>
            
            </div>
        </BrowserRouter>
    );
}
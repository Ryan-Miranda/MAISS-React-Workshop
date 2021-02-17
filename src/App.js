import React, { useState } from 'react'

// Material-UI Imports
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

// React Router Imports
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My Components
import Home from './components/Home'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import Header from './components/Header'

// Load in a custom font other than Roboto if desired
let theme = createMuiTheme({
    // typography: {
    //     fontFamily: "Source Sans Pro,sans-serif"
    // },
});

theme = responsiveFontSizes(theme);

// JSX Styling, note the Strings
const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        minHeight: "100vh",
    },
}));


export default function App() {
    // pageNum is our state we want to keep track of, setPageNum is our setter
    const [pageNum, setPageNum] = useState(0);

    // call our useStyles function to get our classes JSON
    const classes = useStyles();

    // illustrates how child components can change state stored in parent components
    const pages = new Map(
        [
            ['Home', 0], ['Profiles', 1]
        ]
    )

    // used by child components to change pageNum
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
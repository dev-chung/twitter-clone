import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route expact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route expact path="/profile">
                            <Profile />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                ) : (
                    <>
                        <Route expact path="/">
                            <Auth />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
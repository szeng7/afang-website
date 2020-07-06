import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import MainPage from "./pages/main.jsx";

class App extends Component {
    render() {
        return (
            <Router basename="">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;

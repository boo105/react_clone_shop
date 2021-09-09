import React from "react";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import testPage from "../components/testPage";


const Layout = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={testPage} />
                <Route exact path={'/test'} component={Footer} />
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Layout
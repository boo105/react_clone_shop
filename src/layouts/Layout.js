import React from "react";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import SildePicturePage from "../components/SlidePicturePage";
import TestPage from "../components/TestPage";


const Layout = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={TestPage} />
                <Route exact path={'/slide'} component={SildePicturePage} />
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Layout
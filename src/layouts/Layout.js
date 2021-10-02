import React from "react";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Qna from "../components/Qna";
import SildePicturePage from "../components/SlidePicturePage";
import TestPage from "../components/TestPage";


const Layout = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={SildePicturePage} />
                <Route exact path={'/qna'} component={Qna} />
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Layout
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {DEFI_PROJECTS, MAIN_PAGE} from "config";
import Home from "pages/Home";
import DeFiProjects from "pages/DeFiProjects/DeFi-Projects";
import DataContextProvider from "context/poolsContext";
import Footer from "components/layouts/Footer";

import "./styles/Main.scss";
import "pure-react-carousel/dist/react-carousel.es.css";


let rootElement = document.getElementById("root");
ReactDOM.render(
    <DataContextProvider>
        <Router>
            <div>
                <Route exact path={MAIN_PAGE} component={Home}/>
                <Route path={DEFI_PROJECTS} component={DeFiProjects}/>
            </div>
            <Footer/>
        </Router>
    </DataContextProvider>, rootElement);

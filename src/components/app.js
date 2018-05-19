import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import {Route} from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import SecretDoc from "./secret_doc";
import OperativesList from "./onperative_list";
import auth from "../hoc/auth";

const App = () => (
    <div>
        <div>
            <Nav/>
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/secret-doc" component={auth(SecretDoc)}/>
                <Route path="/operative-list" component={OperativesList}/>
            </div>

        </div>
    </div>
);

export default App;

import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.min.js";
import  "bootstrap/dist/js/bootstrap.bundle.min.js";
//import  "bootstrap/js/dist/util.js";

//import "bootstrap";

//import './custom.scss'

import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
<App />
</BrowserRouter>), 
document.getElementById("suyt")
);

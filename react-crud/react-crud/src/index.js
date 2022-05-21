import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
reportWebVitals();

//import * as serviceWorker from "./serviceWorker";
//serviceWorker.unregister();
//// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.

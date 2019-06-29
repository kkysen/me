import {polyfill} from "./ts/main/polyfill/polyfills";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/index.css";
import {App} from "./ts/main/app/App";
import * as serviceWorker from "./ts/util/serviceWorker";

polyfill();

ReactDOM.render(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unRegister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
(async () => {
    await serviceWorker.unRegister();
})();

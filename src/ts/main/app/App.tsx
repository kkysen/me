import React, {FC} from "react";
import {HashRouter} from "react-router-dom";
import "../../../css/App.css";
import logo from "../../../media/logo.svg";
import {pageTree} from "../page/pages";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {RouteTree} from "./Routes";
import {Title} from "./Title";

export const OldApp: FC = () => {
    return <div>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    </div>;
};

export const App: FC = () => {
    return <Title>
        <HashRouter>
            <Header/>
            {/*<Route exact path="/" component={() => <Redirect to="/Home"/>}/>*/}
            {/*<Routes pages={pages.all}/>*/}
            <RouteTree pages={pageTree}/>
            <Footer/>
        </HashRouter>
    </Title>;
};

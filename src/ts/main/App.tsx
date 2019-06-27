import React, {FC} from "react";
import "../../css/App.css";
import logo from "../../media/logo.svg";
import {NQueens} from "./project/NQueens";

export const App: FC = () => {
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
        
        <NQueens/>
        
    </div>;
};

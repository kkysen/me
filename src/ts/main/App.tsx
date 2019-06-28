import React, {FC} from "react";
import {HashRouter, Link, Redirect, Route} from "react-router-dom";
import "../../css/App.css";
import logo from "../../media/logo.svg";
import {Baseball} from "./page/Baseball";
import {Home} from "./page/Home";
import {Internships} from "./page/Internships";
import {Projects} from "./page/Projects";
import {Resume} from "./page/Resume";
import {Writings} from "./page/Writings";
import {NQueens} from "./project/NQueens";

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
        
        <NQueens/>
    
    </div>;
};

const pages = {
    Home,
    Internships,
    Projects,
    Writings,
    Baseball,
    Resume,
};

type Pages = {[name: string]: FC};

const Routes: FC<{pages: Pages}> = ({pages}) => {
    return <>{
        Object.entries(pages)
            .map(([name, page]) => <Route exact path={`/${name}`} component={page} key={name}/>)}
    </>;
};

const NavBar: FC<{pages: Pages}> = () => {
    return <>
        {Object.keys(pages)
            .map(name => <Link to={`/${name}`} key={name}><button>{name}</button></Link>)}
    </>;
};

const Header: FC = () => {
    return <header>
        Khyber Sen
        <NavBar pages={pages}/>
    </header>;
};

const Footer: FC = () => {
    return <footer>
        Email: kkysen@gmail.com
    </footer>;
};

export const App: FC = () => {
    return <HashRouter>
        <Header/>
        <Route exact path="/" component={() => <Redirect to="/Home"/>}/>
        <Routes pages={pages}/>
        <Footer/>
    </HashRouter>;
};

import React, {FC, useState} from "react";
import Button from "react-bootstrap/es/Button";
import Nav from "react-bootstrap/es/Nav";
import Navbar from "react-bootstrap/es/Navbar";
import NavbarBrand from "react-bootstrap/es/NavbarBrand";
import NavbarCollapse from "react-bootstrap/es/NavbarCollapse";
import NavbarToggle from "react-bootstrap/es/NavbarToggle";
import NavDropdown, {NavDropdownProps} from "react-bootstrap/es/NavDropdown";
import NavItem from "react-bootstrap/es/NavItem";
import NavLink from "react-bootstrap/es/NavLink";
import {Redirect} from "react-router";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import {getPages, PageTree} from "../page/pages";

const MainLink: FC<{path: string}> = ({path}) => {
    return <>
        <NavLink>
            <LinkContainer to={path}>
                <NavItem>
                    <Button>
                        Main
                    </Button>
                </NavItem>
            </LinkContainer>
        </NavLink>
    </>;
};

type TopLevelProps = {Items: FC, title: string};

type DropDownProps = TopLevelProps & {path: string, level: number, addMainLink: boolean};

type RealNavDropdownProps = NavDropdownProps & {
    show?: boolean;
    drop?: "down" | "up" | "right" | "left";
    alignRight?: boolean;
    onSelect?: () => void;
    onToggle?: () => void;
    focusFirstItemOnShow?: boolean;
}

const NormalDropDown: FC<{args: DropDownProps}> = ({args}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
    
    const {Items, title, path, addMainLink, level} = args;
    
    const props: RealNavDropdownProps = {
        title,
        id: `nav-dropdown-${path}`,
        show: isOpen,
        drop: level < 2 ? "down" : "right",
        onToggle: () => {
            if (addMainLink) {
                setRedirect(true);
            }
        },
    };
    
    return <>
        {redirect && <Redirect to={path}/>}
        <div
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
        >
            <NavDropdown {...props}>
                <Items/>
            </NavDropdown>
        </div>
    </>;
};

const DropDown: FC<{args: DropDownProps & {TopLevel: FC<{args: TopLevelProps}>}}>
    = ({args}) => {
    const {level, TopLevel} = args;
    if (level === 0) {
        return <TopLevel args={args}/>;
    } else {
        return <NormalDropDown args={args}/>;
    }
};

const TreeLeaf: FC<{path: string, title: string}> = ({path, title}) => {
    return <LinkContainer to={path || "/"} key={path}>
        <NavItem>
            <Button variant="outline-dark">
                {title}
            </Button>
        </NavItem>
    </LinkContainer>;
};

function makeTree(TopLevel: FC<{args: TopLevelProps}>): FC<{pages: PageTree}> {
    const Tree: FC<{pages: PageTree, path: string, level: number}> = ({pages, path, level}) => {
        const {title, Page, children} = pages;
        if (!children) {
            return <TreeLeaf path={path} title={title}/>;
        } else {
            const Items: FC = () => <>
                {Object.entries(children)
                    .map(([name, pages]) => {
                        const subPath = `${path}/${name}`;
                        return <Tree pages={pages} path={subPath} level={level + 1} key={subPath}/>;
                    })
                }
            </>;
            return <DropDown args={{Items, title, addMainLink: !!Page, path, level, TopLevel}}/>;
        }
    };
    
    return ({pages}) => <Tree pages={pages} path={""} level={0}/>;
}

export const NavBarTree: FC<{pages: PageTree}> = ({pages}) => {
    
    const searchMap = new Map([...getPages(pages)].map(({path, title}) => [title, path]));
    
    // TODO add search bar to TopLevel using searchMap
    
    const TopLevel: FC<{args: TopLevelProps}> = ({args}) => {
        const {Items, title} = args;
        return <Navbar bg="light" expand="lg">
            <NavbarBrand>
                {title}
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav"/>
            <NavbarCollapse>
                <Nav className="mr-auto">
                    <Items/>
                </Nav>
            </NavbarCollapse>
        </Navbar>;
    };
    
    const Tree = makeTree(TopLevel);
    
    return <Tree pages={pages}/>;
};

export const NavBarTree2: FC = () => {
    return <div>
        {/*<div className="navbar navbar-default navbar-fixed-top" role="navigation">*/}
        {/*    <div className="container">*/}
        {/*        <div className="navbar-header">*/}
        {/*            <button type="button" className="navbar-toggle" data-toggle="collapse"*/}
        {/*                    data-target=".navbar-collapse">*/}
        {/*                <span className="sr-only">Toggle navigation</span>*/}
        {/*                <span className="icon-bar">Hello</span>*/}
        {/*                <span className="icon-bar"/>*/}
        {/*                <span className="icon-bar"/>*/}
        {/*            </button>*/}
        {/*            <a className="navbar-brand" href="#">NavBar</a>*/}
        {/*        </div>*/}
        {/*        <div className="collapse navbar-collapse">*/}
        {/*            <ul className="nav navbar-nav navbar-right">*/}
        {/*                <li>*/}
        {/*                    <a href="https://github.com/fontenele/bootstrap-navbar-dropdowns" target="_blank">*/}
        {/*                        GitHub Project*/}
        {/*                    </a>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*            <ul className="nav navbar-nav">*/}
        {/*                <li className="active"><a href="#">Home</a></li>*/}
        {/*                <li>*/}
        {/*                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">*/}
        {/*                        Menu 1 <b className="caret"/>*/}
        {/*                    </a>*/}
        {/*                    <ul className="dropdown-menu multi-level">*/}
        {/*                        <li><a href="#">Action</a></li>*/}
        {/*                        <li><a href="#">Another action</a></li>*/}
        {/*                        <li><a href="#">Something else here</a></li>*/}
        {/*                        <li className="divider"/>*/}
        {/*                        <li><a href="#">Separated link</a></li>*/}
        {/*                        <li className="divider"/>*/}
        {/*                        <li><a href="#">One more separated link</a></li>*/}
        {/*                        <li className="dropdown-submenu">*/}
        {/*                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>*/}
        {/*                            <ul className="dropdown-menu">*/}
        {/*                                <li><a href="#">Action</a></li>*/}
        {/*                                <li className="dropdown-submenu">*/}
        {/*                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>*/}
        {/*                                    <ul className="dropdown-menu">*/}
        {/*                                        <li className="dropdown-submenu">*/}
        {/*                                            <a href="#" className="dropdown-toggle"*/}
        {/*                                               data-toggle="dropdown">Dropdown</a>*/}
        {/*                                            <ul className="dropdown-menu">*/}
        {/*                                                <li><a href="#">Action</a></li>*/}
        {/*                                                <li><a href="#">Another action</a></li>*/}
        {/*                                                <li><a href="#">Something else here</a></li>*/}
        {/*                                                <li className="divider"/>*/}
        {/*                                                <li><a href="#">Separated link</a></li>*/}
        {/*                                                <li className="divider"/>*/}
        {/*                                                <li><a href="#">One more separated link</a></li>*/}
        {/*                                            </ul>*/}
        {/*                                        </li>*/}
        {/*                                    </ul>*/}
        {/*                                </li>*/}
        {/*                            </ul>*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </li>*/}
        {/*                <li>*/}
        {/*                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">*/}
        {/*                        Menu 2 <b className="caret"/>*/}
        {/*                    </a>*/}
        {/*                    <ul className="dropdown-menu">*/}
        {/*                        <li><a href="#">Action</a></li>*/}
        {/*                        <li><a href="#">Another action</a></li>*/}
        {/*                        <li><a href="#">Something else here</a></li>*/}
        {/*                        <li className="divider"/>*/}
        {/*                        <li><a href="#">Separated link</a></li>*/}
        {/*                        <li className="divider"/>*/}
        {/*                        <li><a href="#">One more separated link</a></li>*/}
        {/*                        <li className="dropdown-submenu">*/}
        {/*                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>*/}
        {/*                            <ul className="dropdown-menu">*/}
        {/*                                <li><a href="#">Action</a></li>*/}
        {/*                                <li><a href="#">Another action</a></li>*/}
        {/*                                <li><a href="#">Something else here</a></li>*/}
        {/*                                <li className="divider"/>*/}
        {/*                                <li><a href="#">Separated link</a></li>*/}
        {/*                                <li className="divider"/>*/}
        {/*                                <li className="dropdown-submenu">*/}
        {/*                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>*/}
        {/*                                    <ul className="dropdown-menu">*/}
        {/*                                        <li className="dropdown-submenu">*/}
        {/*                                            <a href="#" className="dropdown-toggle"*/}
        {/*                                               data-toggle="dropdown">Dropdown</a>*/}
        {/*                                            <ul className="dropdown-menu">*/}
        {/*                                                <li><a href="#">Action</a></li>*/}
        {/*                                                <li><a href="#">Another action</a></li>*/}
        {/*                                                <li><a href="#">Something else here</a></li>*/}
        {/*                                                <li className="divider"/>*/}
        {/*                                                <li><a href="#">Separated link</a></li>*/}
        {/*                                                <li className="divider"/>*/}
        {/*                                                <li><a href="#">One more separated link</a></li>*/}
        {/*                                            </ul>*/}
        {/*                                        </li>*/}
        {/*                                    </ul>*/}
        {/*                                </li>*/}
        {/*                            </ul>*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*        </div>*/}
        {/*/.nav-collapse*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className="container">*/}
        {/*    <div className="navbar-template text-center">*/}
        {/*        <h1>Bootstrap NavBar</h1>*/}
        {/*        <p className="lead text-info">NavBar with too many childs.</p>*/}
        {/*        <a target="_blank" href="https://bootsnipp.com/snippets/featured/multi-level-dropdown-menu-bs3">*/}
        {/*            Thanks to msurguy (Multi level dropdown menu BS3)</a>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>;
};

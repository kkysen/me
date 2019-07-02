import React, {FC, ReactElement} from "react";
import Button from "react-bootstrap/es/Button";
import Nav from "react-bootstrap/es/Nav";
import Navbar from "react-bootstrap/es/Navbar";
import NavbarBrand from "react-bootstrap/es/NavbarBrand";
import NavbarCollapse from "react-bootstrap/es/NavbarCollapse";
import NavbarToggle from "react-bootstrap/es/NavbarToggle";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import NavItem from "react-bootstrap/es/NavItem";
import NavLink from "react-bootstrap/es/NavLink";
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
        <NavDropdown.Divider/>
    </>;
};

const NavBarDropDown: FC<{Items: FC, mainLink: boolean, title: string, path: string}>
    = ({Items, mainLink, title, path}) => {
    return <NavDropdown title={title} id={`nav-dropdown-${path}`} key={path}>
        {mainLink && <MainLink path={path}/>}
        <Items/>
    </NavDropdown>;
};

function makeNavBarTree(pages: PageTree, TopLevel: FC<{Items: FC, title: string}>, path = ""): ReactElement {
    const {title, Page, children} = pages;
    
    if (!children) {
        return <LinkContainer to={path || "/"} key={path}>
            <NavItem>
                <Button variant="outline-dark">
                    {title}
                </Button>
            </NavItem>
        </LinkContainer>;
    } else {
        const Items: FC = () => <>
            {Object.entries(children)
                .map(([name, pages]) => makeNavBarTree(pages, TopLevel, `${path}/${name}`))}
        </>;
        if (path) {
            return <NavBarDropDown Items={Items} title={title} mainLink={!!Page} path={path} key={path}/>;
        } else {
            return <TopLevel Items={Items} title={title} key={path}/>;
        }
    }
}

export const NavBarTree: FC<{pages: PageTree}> = ({pages}) => {
    
    const searchMap = new Map([...getPages(pages)].map(({path, title}) => [title, path]));
    
    // TODO add search bar to TopLevel using searchMap
    
    return makeNavBarTree(pages, ({Items, title}) => {
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
    });
};

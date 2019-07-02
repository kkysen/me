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
import {PageTree} from "../page/pages";

const NavBarTopLevel: FC<{Items: FC, OwnLink: FC}> = ({Items, OwnLink}) => {
    return <Navbar bg="light" expand="lg">
        <NavbarBrand>
            <OwnLink/>
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav"/>
        <NavbarCollapse>
            <Nav className="mr-auto">
                <Items/>
            </Nav>
        </NavbarCollapse>
    </Navbar>;
};

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

function makeNavBarTree(pages: PageTree, path = ""): ReactElement {
    const {title, Page, children} = pages;
    
    const OwnLink: FC = () => <LinkContainer to={path || "/"}>
        <NavItem>
            <Button>
                {title}
            </Button>
        </NavItem>
    </LinkContainer>;
    
    if (!children) {
        return <OwnLink key={path}/>;
    } else {
        const Items: FC = () => <>
            {Object.entries(children)
                .map(([name, pages]) => makeNavBarTree(pages, `${path}/${name}`))}
        </>;
        if (path) {
            return <NavBarDropDown Items={Items} mainLink={!!Page} title={title} path={path} key={path}/>;
        } else {
            return <NavBarTopLevel Items={Items} OwnLink={OwnLink} key={path}/>;
        }
    }
}

export const NavBarTree: FC<{pages: PageTree}> = ({pages}) => {
    return makeNavBarTree(pages);
};

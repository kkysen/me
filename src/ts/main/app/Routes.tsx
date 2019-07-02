import React, {FC, ReactNode} from "react";
import {Route} from "react-router";
import {forEachPage, PageTree} from "../page/pages";

export const RouteTree: FC<{pages: PageTree}> = ({pages}) => {
    const routes: ReactNode[] = [];
    forEachPage(pages, (Page, path) => {
        routes.push(<Route key={path} exact path={path} component={Page}/>);
    });
    return <>{routes}</>;
};

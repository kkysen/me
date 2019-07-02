import React, {FC, ReactNode} from "react";
import {Route} from "react-router";
import {forEachPage, Pages, PageTree} from "../page/pages";
import {Title} from "./Title";

export const Routes: FC<{pages: Pages}> = ({pages}) => {
    return <>{
        Object.entries(pages)
            .map(([name, Page]) =>
                <Route exact path={`/${name}`} component={() => <Title title={name}>
                    <Page/>
                </Title>} key={name}/>
            )}
    </>;
};

export const RouteTree: FC<{pages: PageTree}> = ({pages}) => {
    const routes: ReactNode[] = [];
    forEachPage(pages, (Page, path) => {
        routes.push(<Route key={path} exact path={path} component={Page}/>);
    });
    return <>{routes}</>;
};

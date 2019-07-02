import React, {FC, ReactNode} from "react";
import {Route} from "react-router";
import {getPages, PageTree} from "../page/pages";

export const RouteTree: FC<{pages: PageTree}> = ({pages}) => {
    return <>
        {[...getPages(pages)].map(({Page, path}) =>
            <Route key={path} exact path={path} component={Page}/>
        )}
    </>;
};

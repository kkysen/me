import React, {FC} from "react";
import {Route} from "react-router";
import {Pages} from "../page/pages";
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

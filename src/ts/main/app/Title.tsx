import * as React from "react";
import {FC} from "react";
import DocumentTitle from "react-document-title";
import {me} from "./me";

export const Title: FC<{title?: string}> = ({title, children}) => {
    return <DocumentTitle title={title ? `${title} - ${me.name}` : me.name}>
        <>
            {children}
        </>
    </DocumentTitle>;
};

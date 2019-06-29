import {default as React, FC} from "react";
import {Link} from "react-router-dom";
import {separateCamelCase} from "../../util/variableNames";
import {Title} from "../app/Title";
import {Pages} from "../page/pages";

interface SimpleInternship {
    readonly Preview: FC;
    readonly Main: FC;
    readonly pages: Pages;
}

interface Props {
    name: string;
    prettyName?: string;
    time: string;
    url: {
        abstract: string;
        website: string;
    };
    img: {
        thumb: string;
        main: string;
    }
    AbstractAndRole: FC;
}

export function simpleInternship(props: Props): SimpleInternship {
    const {
        name,
        prettyName = separateCamelCase(name),
        time,
        url,
        img,
        AbstractAndRole,
    } = props;
    
    const path = `Internships/${name}`;
    
    const preview: FC = () => {
        return <>
            {prettyName} - {time}
            <img src={img.thumb}/>
            <br/>
            <Link to={`/${path}`}>Click here for my abstract and role on the project.</Link>
            <br/>
            <a href={url.abstract}>Click here for project abstract.</a>
            <br/>
            <a href={url.website}>Click here for project website.</a>
        </>;
    };
    
    const main: FC = () => {
        return <Title title={prettyName}>
            <img src={img.main}/>
            Abstract and Role
            <br/>
            <p>
                <AbstractAndRole/>
            </p>
        </Title>;
    };
    
    return {
        Preview: preview,
        Main: main,
        pages: {
            [path]: main,
        },
    };
}

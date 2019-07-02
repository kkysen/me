import {default as React, FC} from "react";
import {Link} from "react-router-dom";
import {separateCamelCase} from "../../util/variableNames";
import {Title} from "../app/Title";
import {Pages, PageTreeChildren} from "../page/pages";

interface SimpleInternship {
    readonly Preview: FC;
    readonly Main: FC;
    readonly pages: Pages;
    readonly pageTreeChildren: PageTreeChildren;
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

export function makeSimpleInternship(props: Props): SimpleInternship {
    const {
        name,
        prettyName = separateCamelCase(name),
        time,
        url,
        img,
        AbstractAndRole,
    } = props;
    
    const path = `Internships/${name}`;
    
    const imgAlt = `My ${prettyName} internship during ${time}`;
    
    const Preview: FC = () => {
        return <>
            {prettyName} - {time}
            <img src={img.thumb} alt={imgAlt}/>
            <br/>
            <Link to={`/${path}`}>Click here for my abstract and role on the project.</Link>
            <br/>
            <a href={url.abstract}>Click here for project abstract.</a>
            <br/>
            <a href={url.website}>Click here for project website.</a>
        </>;
    };
    
    const Main: FC = () => {
        return <Title title={prettyName}>
            <img src={img.main} alt={imgAlt}/>
            Abstract and Role
            <br/>
            <p>
                <AbstractAndRole/>
            </p>
        </Title>;
    };
    
    return {
        Preview,
        Main,
        pages: {
            [path]: Main,
        },
        pageTreeChildren: {
            [name]: {
                title: prettyName,
                Page: Main,
            },
        },
    };
}

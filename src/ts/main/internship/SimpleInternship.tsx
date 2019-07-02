import {default as React, FC} from "react";
import {Link} from "react-router-dom";
import {separateCamelCase} from "../../util/variableNames";
import {PageTreeChildren} from "../page/pages";

interface SimpleInternship {
    readonly Preview: FC<{path: string}>;
    readonly Main: FC;
    readonly pages: PageTreeChildren;
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
    
    const imgAlt = `My ${prettyName} internship during ${time}`;
    
    const Preview: FC<{path: string}> = ({path}) => {
        return <>
            {prettyName} - {time}
            <img src={img.thumb} alt={imgAlt}/>
            <br/>
            <Link to={`${path}/${name}`}>Click here for my abstract and role on the project.</Link>
            <br/>
            <a href={url.abstract}>Click here for project abstract.</a>
            <br/>
            <a href={url.website}>Click here for project website.</a>
        </>;
    };
    
    const Main: FC = () => {
        return <>
            <img src={img.main} alt={imgAlt}/>
            Abstract and Role
            <br/>
            <p>
                <AbstractAndRole/>
            </p>
        </>;
    };
    
    return {
        Preview,
        Main,
        pages: {
            [name]: {
                title: prettyName,
                Page: Main,
            },
        },
    };
}

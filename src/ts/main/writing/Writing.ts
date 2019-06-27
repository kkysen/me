import axios from "axios";
import * as fse from "fs-extra";
import docIDs from "../../../data/writings/docIDs.json";

export interface WritingMetadata {
    readonly docId: string;
    readonly title: string;
    readonly date: Date;
}

export interface Writing extends WritingMetadata {
    
    readonly url: string;
    
}

interface Paths {
    readonly root: string;
    readonly dir: string;
    readonly metadata: string;
    readonly html: string;
}

export function getWritingPaths(docId: string): Paths {
    const root = `src/data/writings`;
    const dir = `${root}/${docId}`;
    return {
        root,
        dir,
        metadata: `${dir}/metadata.json`,
        html: `${dir}/index.html`,
    };
}

class WritingHtml {
    
    constructor(private rawHtml: string) {}
    
    private getElement(name: string) {
        const html = this.rawHtml;
        const tag = {start: `<${name}>`, end: `</${name}>`};
        const check = (i: number) => {
            if (i === -1) {
                throw new Error(`no ${name}`);
            }
            return i;
        };
        const startTagStart = check(html.indexOf(tag.start));
        const endTagStart = check(html.indexOf(tag.end, startTagStart));
        return html.slice(startTagStart + tag.start.length, endTagStart).trim();
    }
    
    get title(): string {
        return this.getElement("title");
    }
    
    get date(): Date {
        const body = this.getElement("body");
        for (const pattern of [
            /(\d{2}\/\d{2}\/\d{4})/,
            /Works Cited.*Web. (\d{2} [A-Z][a-z]+\.? \d{4})./,
        ]) {
            const match = pattern.exec(body);
            if (!match) {
                continue;
            }
            const [_, dateString] = match;
            const date = new Date(dateString);
            if (isNaN(date.getTime()) || date.getFullYear() < 2010) {
                continue;
            }
            return date;
        }
        throw new Error(`can't find date for "${this.title}"`);
    }
    
    private static endOfHead(): string {
        return `
<script>
    document.body.style.margin = "10%";
</script>`;
    }
    
    get html(): string {
        const html = this.rawHtml;
        const headEndTagStart = html.indexOf("</head>");
        if (headEndTagStart === -1) {
            throw new Error("no head");
        }
        return [
            html.slice(0, headEndTagStart),
            WritingHtml.endOfHead(),
            html.slice(headEndTagStart),
        ].join("");
    }
    
}

async function downloadWriting(docId: string): Promise<WritingMetadata> {
    const url = `https://docs.google.com/document/d/e/2PACX-${docId}/pub`;
    const response = await axios.get<string>(url);
    const {title, date, html} = new WritingHtml(response.data);
    type Metadata = WritingMetadata & {overrideData?: Date};
    const metadata: Metadata = {docId, title, date};
    const paths = getWritingPaths(docId);
    if (await fse.pathExists(paths.dir)) {
        const oldMetadata: Metadata = await fse.readJson(paths.metadata);
        metadata.overrideData = oldMetadata.overrideData;
    } else {
        await fse.mkdir(paths.dir);
    }
    await Promise.all([
        fse.writeJson(paths.metadata, metadata),
        fse.writeFile(paths.html, html),
    ]);
    return metadata;
}

export async function downloadWritings(): Promise<void> {
    const writings = await Promise.all(docIDs.map(downloadWriting));
    writings.sort((a, b) => a.date.getTime() - b.date.getTime());
    const dir = getWritingPaths("").root;
    await fse.writeJson(`${dir}/metadata.json`, writings);
}

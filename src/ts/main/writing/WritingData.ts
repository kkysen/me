import axios from "axios";
import * as fse from "fs-extra";
import docIDs from "../../../data/writings/docIDs.json";
import {getWritingPaths} from "./WritingPaths";

export interface WritingMetadata {
    readonly docId: string;
    readonly title: string;
    readonly date: Date;
}

export interface WritingData extends WritingMetadata {
    
    readonly url: string;
    
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
            /(\d{1,2}\/\d{1,2}\/\d{4})/,
            /Works Cited.*Web\. (\d{1,2} [A-Z][a-z]+\.? \d{4})\./,
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
        console.warn(`can't find date for "${this.title}"`);
        return new Date(); // invalid date
    }
    
    private static endOfHead(): string {
        return `
<script>
    document.body.style.margin = "10%";
</script>`;
    }
    
    get html(): string {
        const html = this.rawHtml;
        const tag = "</body>";
        const i = html.lastIndexOf(tag);
        if (i === -1) {
            throw new Error(`no ${tag}`);
        }
        return [
            html.slice(0, i),
            WritingHtml.endOfHead(),
            html.slice(i),
        ].join("");
    }
    
}

export interface JsonWritingMetadata {
    docId: string;
    title: string;
    date: string;
}

export interface JsonWritingMetadataOverride {
    title?: string;
    date?: string;
}

async function downloadWriting(docId: string): Promise<WritingMetadata> {
    const url = `https://docs.google.com/document/d/e/2PACX-${docId}/pub`;
    const response = await axios.get<string>(url);
    const {title, date, html} = new WritingHtml(response.data);
    type Metadata = WritingMetadata & {override?: JsonWritingMetadataOverride};
    const metadata: Metadata = {docId, title, date};
    const {src: paths, public: publicPaths} = getWritingPaths(docId);
    if (await fse.pathExists(paths.dir)) {
        const oldMetadata: Metadata = await fse.readJson(paths.metadata);
        metadata.override = oldMetadata.override;
    }
    await Promise.all([
        fse.ensureDir(paths.dir),
        fse.ensureDir(publicPaths.dir),
    ]);
    await Promise.all([
        fse.writeJson(paths.metadata, metadata),
        fse.writeFile(paths.html, html),
        fse.writeFile(publicPaths.html, html),
    ]);
    return metadata;
}

export async function downloadWritings(): Promise<void> {
    const writings = await Promise.all(docIDs.map(downloadWriting));
    writings.sort((a, b) => a.date.getTime() - b.date.getTime());
    const {src, public: _public} = getWritingPaths("");
    await Promise.all([src, _public].map(async paths => {
        await fse.writeJson(`${paths.parentDir}/metadata.json`, writings);
    }));
}

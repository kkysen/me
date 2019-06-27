import writingsMetadata from "../../../data/writings/metadata.json";
import {getWritingPaths, Writing, WritingMetadata} from "./Writing";

class WritingImpl implements Writing {
    
    readonly docId: string;
    readonly title: string;
    readonly date: Date;
    
    constructor({docId, title, date}: WritingMetadata) {
        this.docId = docId;
        this.title = title;
        this.date = date;
    }
    
    get url() {
        return getWritingPaths(this.docId).html;
    }
    
}

export const writings: readonly Writing[] = writingsMetadata
    .map(({docId, title, date}) => new WritingImpl({docId, title, date: new Date(date)}));

import writingsMetadata from "../../../data/writings/metadata.json";
import {JsonWritingMetadata, JsonWritingMetadataOverride, WritingData, WritingMetadata} from "./WritingData";
import {getWritingPaths} from "./WritingPaths";

class WritingImpl implements WritingData {
    
    readonly docId: string;
    readonly title: string;
    readonly date: Date;
    
    constructor({docId, title, date}: WritingMetadata) {
        this.docId = docId;
        this.title = title;
        this.date = date;
    }
    
    get url() {
        return getWritingPaths(this.docId).dist.html;
    }
    
}

interface OverrideableJsonWritingMetadata extends JsonWritingMetadata {
    override?: JsonWritingMetadataOverride;
}

export function writingFromJson({docId, title, date, override = {}}: OverrideableJsonWritingMetadata): WritingData {
    return new WritingImpl({
        docId,
        title: override.title || title,
        date: new Date(override.date || date),
    });
}

export const writings: readonly WritingData[] = writingsMetadata.map(writingFromJson);

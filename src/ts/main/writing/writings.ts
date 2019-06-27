import writingsMetadata from "../../../data/writings/metadata.json";
import {Writing, writingFromJson} from "./Writing";

export const writings: readonly Writing[] = writingsMetadata.map(writingFromJson);

writings.forEach(writing => {
    console.log(`${writing.title}: ${writing.url}`);
});

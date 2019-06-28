interface WritingPaths {
    readonly parentDir: string;
    readonly dir: string;
    readonly metadata: string;
    readonly html: string;
}

interface AllWritingPaths {
    readonly src: WritingPaths;
    readonly public: WritingPaths;
    readonly dist: WritingPaths;
}

export function getWritingPaths(docId: string): AllWritingPaths {
    const make = (root: string): WritingPaths => {
        const parentDir = `${root}/data/writings`;
        const dir = `${parentDir}/${docId}`;
        return {
            parentDir,
            dir,
            metadata: `${dir}/metadata.json`,
            html: `${dir}/index.html`,
        };
    };
    return {
        get src() {
            return make("src");
        },
        get public() {
            return make("public");
        },
        get dist() {
            return make(process.env.PUBLIC_URL!!);
        },
    };
}

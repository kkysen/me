import {downloadWritings} from "./writing/Writing";

async function asyncMain(): Promise<void> {
    await downloadWritings();
}

export function main() {
    (async () => {
        try {
            await asyncMain();
        } catch (e) {
            console.error(e);
        }
    })();
}

main();

export function separateCamelCase(className: string): string {
    return className.replace(/([A-Z])/g, " $1").trim();
}

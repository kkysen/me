// import "react-app-polyfill/stable";
// import "core-js/features/array/flat-map";
// import "core-js/features/object/from-entries.js";

// my own polyfills are smaller and faster
import "./Array.prototype.flatMap"
import "./Object.fromEntries"

export function polyfill() {}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Session = exports.Innertube = exports.Parser = exports.YTNodes = void 0;
const Utils_1 = require("./src/utils/Utils");
// Polyfill fetch for node
if ((0, Utils_1.getRuntime)() === 'node') {
    // eslint-disable-next-line
    const undici = require('undici');
    Reflect.set(globalThis, 'fetch', undici.fetch);
    Reflect.set(globalThis, 'Headers', undici.Headers);
    Reflect.set(globalThis, 'Request', undici.Request);
    Reflect.set(globalThis, 'Response', undici.Response);
    Reflect.set(globalThis, 'FormData', undici.FormData);
    Reflect.set(globalThis, 'File', undici.File);
    try {
        // eslint-disable-next-line
        const { ReadableStream } = require('node:stream/web');
        Reflect.set(globalThis, 'ReadableStream', ReadableStream);
    }
    catch ( /* do nothing */_a) { /* do nothing */ }
}
const Innertube_1 = __importDefault(require("./src/Innertube"));
__exportStar(require("./src/utils"), exports);
var map_1 = require("./src/parser/map");
Object.defineProperty(exports, "YTNodes", { enumerable: true, get: function () { return map_1.YTNodes; } });
var parser_1 = require("./src/parser");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return __importDefault(parser_1).default; } });
var Innertube_2 = require("./src/Innertube");
Object.defineProperty(exports, "Innertube", { enumerable: true, get: function () { return __importDefault(Innertube_2).default; } });
var Session_1 = require("./src/core/Session");
Object.defineProperty(exports, "Session", { enumerable: true, get: function () { return __importDefault(Session_1).default; } });
var Player_1 = require("./src/core/Player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return __importDefault(Player_1).default; } });
exports.default = Innertube_1.default;
//# sourceMappingURL=index.js.map
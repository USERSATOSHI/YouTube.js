"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TwoColumnBrowseResults_1 = __importDefault(require("./TwoColumnBrowseResults"));
class WatchNextTabbedResults extends TwoColumnBrowseResults_1.default {
    constructor(data) {
        super(data);
    }
}
WatchNextTabbedResults.type = 'WatchNextTabbedResults';
exports.default = WatchNextTabbedResults;
//# sourceMappingURL=WatchNextTabbedResults.js.map